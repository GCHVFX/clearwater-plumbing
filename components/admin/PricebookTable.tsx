'use client';

import { useState, useMemo } from 'react';
import PricebookForm, { type PricebookItemData } from './PricebookForm';
import PricebookImport from './PricebookImport';
import type { PricebookRow } from '@/lib/pricebook-import';

interface PricebookItem extends PricebookItemData {
  id: string;
}

interface Props {
  initialItems: PricebookItem[];
  onSave: (data: PricebookItemData) => Promise<void>;
  onToggleActive: (id: string, active: boolean) => Promise<void>;
  onBulkImport: (rows: PricebookRow[]) => Promise<number>;
}

export default function PricebookTable({ initialItems, onSave, onToggleActive, onBulkImport }: Props) {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState('');
  const [showInactive, setShowInactive] = useState(false);
  const [editing, setEditing] = useState<PricebookItemData | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return items.filter((item) => {
      if (!showInactive && !item.active) return false;
      if (q && !item.name.toLowerCase().includes(q) && !item.category.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [items, search, showInactive]);

  const handleSave = async (data: PricebookItemData) => {
    await onSave(data);
    if (data.id) {
      setItems((prev) => prev.map((i) => i.id === data.id ? { ...i, ...data, id: data.id! } : i));
    } else {
      // Refresh page to get the server-assigned ID
      window.location.reload();
    }
  };

  const handleToggle = async (id: string, currentActive: boolean) => {
    const newActive = !currentActive;
    await onToggleActive(id, newActive);
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, active: newActive } : i));
  };

  const handleImport = async (rows: PricebookRow[]): Promise<number> => {
    const count = await onBulkImport(rows);
    window.location.reload();
    return count;
  };

  const cellStyle: React.CSSProperties = {
    padding: '12px 14px',
    fontSize: '14px',
    borderBottom: '1px solid #f0f0f0',
    textAlign: 'left',
    color: '#1e293b',
    whiteSpace: 'nowrap',
  };

  const headerStyle: React.CSSProperties = {
    ...cellStyle,
    fontWeight: 700,
    color: '#1B3A5C',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    backgroundColor: '#F0F4F8',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  };

  return (
    <div>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        alignItems: 'center',
        marginBottom: '1.5rem',
      }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name or category..."
          style={{
            flex: '1 1 200px',
            padding: '10px 14px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            minWidth: '200px',
          }}
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '14px', color: '#64748b', cursor: 'pointer', whiteSpace: 'nowrap' }}>
          <input type="checkbox" checked={showInactive} onChange={(e) => setShowInactive(e.target.checked)} />
          Show inactive
        </label>
        <button
          onClick={() => setShowImport(true)}
          style={{
            padding: '10px 16px', fontSize: '14px', fontWeight: 600, color: '#1B3A5C',
            backgroundColor: '#ffffff', border: '2px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Import CSV/XLSX
        </button>
        <button
          onClick={() => setShowAdd(true)}
          style={{
            padding: '10px 16px', fontSize: '14px', fontWeight: 700, color: '#ffffff',
            backgroundColor: '#2E86C1', border: 'none', borderRadius: '8px', cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          + Add Item
        </button>
      </div>

      {/* Count */}
      <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '0.75rem' }}>
        {filtered.length} item{filtered.length !== 1 ? 's' : ''}
        {search && ` matching "${search}"`}
        {showInactive && ' (including inactive)'}
      </p>

      {/* Table */}
      <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '10px', backgroundColor: '#ffffff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Category', 'Name', 'Description', 'Labour', 'Material', 'Total', 'Tax', 'Status', ''].map((h) => (
                <th key={h} style={headerStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={9} style={{ ...cellStyle, textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                  {items.length === 0 ? 'No pricebook items yet. Add items manually or import from a spreadsheet.' : 'No items match your search.'}
                </td>
              </tr>
            )}
            {filtered.map((item) => (
              <tr
                key={item.id}
                onClick={() => setEditing(item)}
                style={{ cursor: 'pointer', opacity: item.active ? 1 : 0.5 }}
              >
                <td style={cellStyle}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: '#2E86C1', backgroundColor: '#eff8ff',
                    padding: '2px 8px', borderRadius: '4px',
                  }}>{item.category}</span>
                </td>
                <td style={{ ...cellStyle, fontWeight: 600 }}>{item.name}</td>
                <td style={{ ...cellStyle, color: '#64748b', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.description || '—'}</td>
                <td style={cellStyle}>${item.labour_price.toFixed(2)}</td>
                <td style={cellStyle}>${item.material_price.toFixed(2)}</td>
                <td style={{ ...cellStyle, fontWeight: 700, color: '#1B3A5C' }}>
                  ${(item.labour_price + item.material_price).toFixed(2)}
                </td>
                <td style={cellStyle}>{item.taxable ? 'Yes' : 'No'}</td>
                <td style={cellStyle}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
                    color: item.active ? '#16a34a' : '#dc2626',
                    backgroundColor: item.active ? '#f0fdf4' : '#fef2f2',
                  }}>
                    {item.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td style={cellStyle}>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleToggle(item.id, item.active); }}
                    style={{
                      padding: '4px 10px', fontSize: '12px', fontWeight: 600,
                      color: item.active ? '#dc2626' : '#16a34a',
                      backgroundColor: 'transparent', border: `1px solid ${item.active ? '#fca5a5' : '#86efac'}`,
                      borderRadius: '6px', cursor: 'pointer',
                    }}
                  >
                    {item.active ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showAdd && <PricebookForm onSave={handleSave} onClose={() => setShowAdd(false)} />}
      {editing && <PricebookForm item={editing} onSave={handleSave} onClose={() => setEditing(null)} />}
      {showImport && <PricebookImport onImport={handleImport} onClose={() => setShowImport(false)} />}
    </div>
  );
}
