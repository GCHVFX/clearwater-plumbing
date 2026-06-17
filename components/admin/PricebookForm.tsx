'use client';

import { useState } from 'react';

export interface PricebookItemData {
  id?: string;
  category: string;
  name: string;
  description: string;
  labour_price: number;
  material_price: number;
  taxable: boolean;
  active: boolean;
}

interface Props {
  item?: PricebookItemData | null;
  onSave: (data: PricebookItemData) => Promise<void>;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '2px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '15px',
  color: '#1e293b',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 700,
  color: '#1B3A5C',
  marginBottom: '4px',
};

export default function PricebookForm({ item, onSave, onClose }: Props) {
  const [category, setCategory] = useState(item?.category || '');
  const [name, setName] = useState(item?.name || '');
  const [description, setDescription] = useState(item?.description || '');
  const [labourPrice, setLabourPrice] = useState(item?.labour_price?.toString() || '0');
  const [materialPrice, setMaterialPrice] = useState(item?.material_price?.toString() || '0');
  const [taxable, setTaxable] = useState(item?.taxable ?? true);
  const [active, setActive] = useState(item?.active ?? true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!category.trim()) { setError('Category is required'); return; }
    if (!name.trim()) { setError('Name is required'); return; }
    const lp = parseFloat(labourPrice) || 0;
    const mp = parseFloat(materialPrice) || 0;
    setSaving(true);
    setError('');
    try {
      await onSave({
        id: item?.id,
        category: category.trim(),
        name: name.trim(),
        description: description.trim(),
        labour_price: Math.round(lp * 100) / 100,
        material_price: Math.round(mp * 100) / 100,
        taxable,
        active,
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    }
    setSaving(false);
  };

  const total = (parseFloat(labourPrice) || 0) + (parseFloat(materialPrice) || 0);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    }}>
      <div style={{
        backgroundColor: '#ffffff', borderRadius: '12px', padding: '2rem',
        maxWidth: '480px', width: '100%', maxHeight: '90vh', overflow: 'auto',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '1.5rem' }}>
          {item?.id ? 'Edit Item' : 'Add Pricebook Item'}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Category *</label>
            <input style={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Drain Cleaning" />
          </div>
          <div>
            <label style={labelStyle}>Name *</label>
            <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Main Line Clearing" />
          </div>
          <div>
            <label style={labelStyle}>Description</label>
            <input style={inputStyle} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Optional details" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Labour ($)</label>
              <input style={inputStyle} type="number" step="0.01" min="0" value={labourPrice} onChange={(e) => setLabourPrice(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Material ($)</label>
              <input style={inputStyle} type="number" step="0.01" min="0" value={materialPrice} onChange={(e) => setMaterialPrice(e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Total</label>
              <div style={{ ...inputStyle, backgroundColor: '#F0F4F8', border: '2px solid #F0F4F8', color: '#1B3A5C', fontWeight: 700 }}>
                ${total.toFixed(2)}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#1e293b', cursor: 'pointer' }}>
              <input type="checkbox" checked={taxable} onChange={(e) => setTaxable(e.target.checked)} /> Taxable
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#1e293b', cursor: 'pointer' }}>
              <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} /> Active
            </label>
          </div>
        </div>

        {error && <p role="alert" style={{ fontSize: '14px', color: '#dc2626', marginTop: '1rem' }}>{error}</p>}

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px', fontSize: '14px', fontWeight: 600, color: '#64748b',
              backgroundColor: 'transparent', border: '2px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            style={{
              padding: '10px 20px', fontSize: '14px', fontWeight: 700, color: '#ffffff',
              backgroundColor: '#2E86C1', border: 'none', borderRadius: '8px',
              cursor: saving ? 'wait' : 'pointer', opacity: saving ? 0.6 : 1,
            }}
          >
            {saving ? 'Saving...' : item?.id ? 'Save Changes' : 'Add Item'}
          </button>
        </div>
      </div>
    </div>
  );
}
