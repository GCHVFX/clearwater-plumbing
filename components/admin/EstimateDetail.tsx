'use client';

import { useState, useMemo, useCallback } from 'react';
import type { EstimateFull, PricebookEntry, LineItem } from '@/app/admin/estimates/actions';

interface DraftLineItem {
  tempId: string;
  pricebook_item_id: string | null;
  name: string;
  description: string | null;
  quantity: number;
  labour_price: number;
  material_price: number;
  taxable: boolean;
}

interface Props {
  estimate: EstimateFull;
  pricebookItems: PricebookEntry[];
  onSaveLineItems: (
    estimateId: string,
    items: Array<{
      id?: string;
      pricebook_item_id: string | null;
      name: string;
      description: string | null;
      quantity: number;
      labour_price: number;
      material_price: number;
      taxable: boolean;
      sort_order: number;
    }>,
  ) => Promise<void>;
}

function toTempId(): string {
  return Math.random().toString(36).slice(2, 10);
}

function existingToDraft(li: LineItem): DraftLineItem {
  return {
    tempId: li.id,
    pricebook_item_id: li.pricebook_item_id,
    name: li.name,
    description: li.description,
    quantity: li.quantity,
    labour_price: li.labour_price,
    material_price: li.material_price,
    taxable: li.taxable,
  };
}

export default function EstimateDetail({ estimate, pricebookItems, onSaveLineItems }: Props) {
  const [lineItems, setLineItems] = useState<DraftLineItem[]>(
    estimate.line_items.map(existingToDraft),
  );
  const [pbSearch, setPbSearch] = useState('');
  const [photoUrls, setPhotoUrls] = useState<Record<string, string>>({});
  const [loadingPhotos, setLoadingPhotos] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(estimate.status);

  const filteredPb = useMemo(() => {
    if (!pbSearch.trim()) return pricebookItems.slice(0, 20);
    const q = pbSearch.toLowerCase();
    return pricebookItems.filter(
      (item) => item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
    ).slice(0, 20);
  }, [pricebookItems, pbSearch]);

  const addFromPricebook = useCallback((item: PricebookEntry) => {
    setLineItems((prev) => [
      ...prev,
      {
        tempId: toTempId(),
        pricebook_item_id: item.id,
        name: item.name,
        description: item.description || null,
        quantity: 1,
        labour_price: item.labour_price,
        material_price: item.material_price,
        taxable: item.taxable,
      },
    ]);
    setSaved(false);
  }, []);

  const removeLineItem = useCallback((tempId: string) => {
    setLineItems((prev) => prev.filter((li) => li.tempId !== tempId));
    setSaved(false);
  }, []);

  const updateLineItem = useCallback((tempId: string, field: keyof DraftLineItem, value: unknown) => {
    setLineItems((prev) =>
      prev.map((li) => (li.tempId === tempId ? { ...li, [field]: value } : li)),
    );
    setSaved(false);
  }, []);

  const loadPhoto = useCallback(async (storagePath: string) => {
    if (photoUrls[storagePath] || loadingPhotos[storagePath]) return;
    setLoadingPhotos((prev) => ({ ...prev, [storagePath]: true }));
    try {
      const res = await fetch(`/api/admin/photos?path=${encodeURIComponent(storagePath)}`);
      if (res.ok) {
        const data = await res.json();
        setPhotoUrls((prev) => ({ ...prev, [storagePath]: data.url }));
      }
    } finally {
      setLoadingPhotos((prev) => ({ ...prev, [storagePath]: false }));
    }
  }, [photoUrls, loadingPhotos]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSaveLineItems(
        estimate.id,
        lineItems.map((li, i) => ({
          pricebook_item_id: li.pricebook_item_id,
          name: li.name,
          description: li.description,
          quantity: li.quantity,
          labour_price: li.labour_price,
          material_price: li.material_price,
          taxable: li.taxable,
          sort_order: i,
        })),
      );
      setSaved(true);
      if (status === 'needs_review' && lineItems.length > 0) {
        setStatus('draft');
      }
    } catch {
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const subtotal = lineItems.reduce((sum, li) => {
    return sum + li.quantity * (li.labour_price + li.material_price);
  }, 0);

  const taxableTotal = lineItems
    .filter((li) => li.taxable)
    .reduce((sum, li) => sum + li.quantity * (li.labour_price + li.material_price), 0);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
      + ' at ' + d.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' });
  };

  const statusBadge = (s: string) => {
    if (s === 'needs_review') return { label: 'Needs Review', color: '#2E86C1', bg: '#eff8ff' };
    if (s === 'draft') return { label: 'Draft', color: '#d97706', bg: '#fffbeb' };
    return { label: s, color: '#64748b', bg: '#f8fafc' };
  };

  const sb = statusBadge(status);

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    padding: '1.5rem',
    marginBottom: '1.5rem',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 700,
    color: '#1B3A5C',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '4px',
  };

  const valueStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#1e293b',
  };

  const inputStyle: React.CSSProperties = {
    padding: '6px 10px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1B3A5C', marginBottom: '0.25rem' }}>
            {estimate.customer_name}
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b' }}>
            {formatDate(estimate.created_at)} · {estimate.source.replace(/_/g, ' ')}
          </p>
        </div>
        <span style={{
          fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '6px',
          color: sb.color, backgroundColor: sb.bg,
        }}>
          {sb.label}
        </span>
      </div>

      {/* Customer info + Job details grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1B3A5C', marginBottom: '1rem' }}>Customer</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
              <div style={labelStyle}>Name</div>
              <div style={valueStyle}>{estimate.customer_name}</div>
            </div>
            <div>
              <div style={labelStyle}>Phone</div>
              <div style={valueStyle}>
                <a href={`tel:${estimate.customer_phone}`} style={{ color: '#2E86C1', textDecoration: 'none' }}>
                  {estimate.customer_phone}
                </a>
              </div>
            </div>
            <div>
              <div style={labelStyle}>Email</div>
              <div style={valueStyle}>
                <a href={`mailto:${estimate.customer_email}`} style={{ color: '#2E86C1', textDecoration: 'none' }}>
                  {estimate.customer_email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1B3A5C', marginBottom: '1rem' }}>Job Details</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
              <div style={labelStyle}>Address</div>
              <div style={valueStyle}>{estimate.job_address}</div>
            </div>
            <div>
              <div style={labelStyle}>Service Type</div>
              <div style={valueStyle}>{estimate.service_type}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div>
                <div style={labelStyle}>Urgency</div>
                <div style={valueStyle}>{estimate.urgency.replace(/_/g, ' ')}</div>
              </div>
              <div>
                <div style={labelStyle}>Location</div>
                <div style={valueStyle}>{estimate.location || '—'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.75rem' }}>Description</h2>
        <p style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
          {estimate.description}
        </p>
      </div>

      {/* Photos */}
      {estimate.photos.length > 0 && (
        <div style={cardStyle}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.75rem' }}>
            Photos ({estimate.photos.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {estimate.photos.map((photo) => (
              <div key={photo.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                {photoUrls[photo.storage_path] ? (
                  <a href={photoUrls[photo.storage_path]} target="_blank" rel="noopener noreferrer">
                    <img
                      src={photoUrls[photo.storage_path]}
                      alt={photo.original_filename}
                      style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                    />
                  </a>
                ) : (
                  <button
                    onClick={() => loadPhoto(photo.storage_path)}
                    disabled={loadingPhotos[photo.storage_path]}
                    style={{
                      width: '100%', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      backgroundColor: '#f8fafc', border: 'none', cursor: 'pointer', fontSize: '13px', color: '#2E86C1',
                      fontWeight: 600,
                    }}
                  >
                    {loadingPhotos[photo.storage_path] ? 'Loading...' : 'View Photo'}
                  </button>
                )}
                <div style={{ padding: '8px 10px', fontSize: '12px', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {photo.original_filename}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pricebook search */}
      <div style={cardStyle}>
        <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.75rem' }}>
          Add from Pricebook
        </h2>
        <input
          type="text"
          value={pbSearch}
          onChange={(e) => setPbSearch(e.target.value)}
          placeholder="Search pricebook items..."
          style={{
            ...inputStyle,
            marginBottom: '0.75rem',
            padding: '10px 14px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
          }}
        />
        {filteredPb.length > 0 && (
          <div style={{ maxHeight: '280px', overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            {filteredPb.map((item) => (
              <div
                key={item.id}
                onClick={() => addFromPricebook(item)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                  padding: '10px 14px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, color: '#2E86C1', backgroundColor: '#eff8ff',
                    padding: '1px 6px', borderRadius: '4px', marginRight: '8px',
                  }}>
                    {item.category}
                  </span>
                  <span style={{ fontWeight: 600 }}>{item.name}</span>
                  {item.description && (
                    <span style={{ color: '#94a3b8', fontSize: '12px', marginLeft: '8px' }}>{item.description}</span>
                  )}
                </div>
                <span style={{ fontWeight: 700, color: '#1B3A5C', whiteSpace: 'nowrap' }}>
                  ${(item.labour_price + item.material_price).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
        {pbSearch && filteredPb.length === 0 && (
          <p style={{ fontSize: '13px', color: '#94a3b8', padding: '0.5rem 0' }}>No matching pricebook items.</p>
        )}
      </div>

      {/* Line items table */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 800, color: '#1B3A5C' }}>
            Estimate Line Items ({lineItems.length})
          </h2>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '10px 20px', fontSize: '14px', fontWeight: 700, color: '#ffffff',
              backgroundColor: saved ? '#16a34a' : '#2E86C1',
              border: 'none', borderRadius: '8px', cursor: saving ? 'wait' : 'pointer',
              opacity: saving ? 0.6 : 1,
            }}
          >
            {saving ? 'Saving...' : saved ? 'Saved' : 'Save Draft'}
          </button>
        </div>

        {lineItems.length === 0 ? (
          <p style={{ fontSize: '14px', color: '#94a3b8', textAlign: 'center', padding: '2rem' }}>
            No line items yet. Search the pricebook above to add items.
          </p>
        ) : (
          <>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Item', 'Qty', 'Labour', 'Material', 'Line Total', 'Tax', ''].map((h) => (
                      <th key={h} style={{
                        padding: '8px 10px', fontSize: '11px', fontWeight: 700, color: '#1B3A5C',
                        textTransform: 'uppercase' as const, letterSpacing: '0.05em', textAlign: 'left',
                        borderBottom: '2px solid #e2e8f0', whiteSpace: 'nowrap' as const,
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((li) => {
                    const lineTotal = li.quantity * (li.labour_price + li.material_price);
                    return (
                      <tr key={li.tempId}>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0', minWidth: '180px' }}>
                          <input
                            type="text"
                            value={li.name}
                            onChange={(e) => updateLineItem(li.tempId, 'name', e.target.value)}
                            style={inputStyle}
                          />
                        </td>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0', width: '80px' }}>
                          <input
                            type="number"
                            value={li.quantity}
                            min={0.01}
                            step={0.01}
                            onChange={(e) => updateLineItem(li.tempId, 'quantity', parseFloat(e.target.value) || 0)}
                            style={{ ...inputStyle, width: '70px', textAlign: 'right' }}
                          />
                        </td>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0', width: '110px' }}>
                          <input
                            type="number"
                            value={li.labour_price}
                            min={0}
                            step={0.01}
                            onChange={(e) => updateLineItem(li.tempId, 'labour_price', parseFloat(e.target.value) || 0)}
                            style={{ ...inputStyle, width: '90px', textAlign: 'right' }}
                          />
                        </td>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0', width: '110px' }}>
                          <input
                            type="number"
                            value={li.material_price}
                            min={0}
                            step={0.01}
                            onChange={(e) => updateLineItem(li.tempId, 'material_price', parseFloat(e.target.value) || 0)}
                            style={{ ...inputStyle, width: '90px', textAlign: 'right' }}
                          />
                        </td>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0', fontWeight: 700, color: '#1B3A5C', whiteSpace: 'nowrap', textAlign: 'right' }}>
                          ${lineTotal.toFixed(2)}
                        </td>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0', textAlign: 'center' }}>
                          <input
                            type="checkbox"
                            checked={li.taxable}
                            onChange={(e) => updateLineItem(li.tempId, 'taxable', e.target.checked)}
                          />
                        </td>
                        <td style={{ padding: '8px 10px', borderBottom: '1px solid #f0f0f0' }}>
                          <button
                            onClick={() => removeLineItem(li.tempId)}
                            style={{
                              padding: '4px 8px', fontSize: '12px', fontWeight: 600, color: '#dc2626',
                              backgroundColor: 'transparent', border: '1px solid #fca5a5', borderRadius: '6px',
                              cursor: 'pointer',
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>
                  Subtotal: <span style={{ fontWeight: 700, color: '#1B3A5C' }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                  Taxable: ${taxableTotal.toFixed(2)}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        .pb-row:hover {
          background-color: #f8fafc;
        }
      `}</style>
    </div>
  );
}
