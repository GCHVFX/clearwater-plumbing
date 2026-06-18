'use client';

import { useState, useMemo } from 'react';
import type { EstimateSummary } from '@/app/admin/estimates/actions';

interface Props {
  estimates: EstimateSummary[];
}

export default function EstimatesList({ estimates }: Props) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return estimates.filter((e) => {
      if (statusFilter !== 'all' && e.status !== statusFilter) return false;
      if (q) {
        const searchable = `${e.customer_name} ${e.customer_email} ${e.customer_phone} ${e.service_type} ${e.job_address}`.toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [estimates, search, statusFilter]);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })
      + ' ' + d.toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit' });
  };

  const urgencyColor = (u: string) => {
    if (u === 'emergency') return { color: '#dc2626', bg: '#fef2f2' };
    if (u === 'urgent' || u === 'this_week') return { color: '#d97706', bg: '#fffbeb' };
    return { color: '#64748b', bg: '#f8fafc' };
  };

  const statusBadge = (s: string) => {
    if (s === 'needs_review') return { label: 'Needs Review', color: '#2E86C1', bg: '#eff8ff' };
    if (s === 'draft') return { label: 'Draft', color: '#d97706', bg: '#fffbeb' };
    return { label: s, color: '#64748b', bg: '#f8fafc' };
  };

  const cellStyle: React.CSSProperties = {
    padding: '12px 14px',
    fontSize: '14px',
    borderBottom: '1px solid #f0f0f0',
    textAlign: 'left',
    color: '#1e293b',
    verticalAlign: 'top',
  };

  const headerStyle: React.CSSProperties = {
    ...cellStyle,
    fontWeight: 700,
    color: '#1B3A5C',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    backgroundColor: '#F0F4F8',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1,
    whiteSpace: 'nowrap' as const,
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name, email, phone, service..."
          style={{
            flex: '1 1 240px',
            padding: '10px 14px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            minWidth: '200px',
          }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: '10px 14px',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            backgroundColor: '#ffffff',
          }}
        >
          <option value="all">All statuses</option>
          <option value="needs_review">Needs Review</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '0.75rem' }}>
        {filtered.length} estimate{filtered.length !== 1 ? 's' : ''}
        {search && ` matching "${search}"`}
      </p>

      <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '10px', backgroundColor: '#ffffff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Customer', 'Service', 'Urgency', 'Address', 'Photos', 'Status', 'Date'].map((h) => (
                <th key={h} style={headerStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ ...cellStyle, textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                  {estimates.length === 0 ? 'No quote requests yet.' : 'No estimates match your search.'}
                </td>
              </tr>
            )}
            {filtered.map((e) => {
              const uc = urgencyColor(e.urgency);
              const sb = statusBadge(e.status);
              return (
                <tr
                  key={e.id}
                  onClick={() => { window.location.href = `/admin/estimates/${e.id}`; }}
                  style={{ cursor: 'pointer' }}
                >
                  <td style={cellStyle}>
                    <div style={{ fontWeight: 600 }}>{e.customer_name}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{e.customer_phone}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{e.customer_email}</div>
                  </td>
                  <td style={{ ...cellStyle, whiteSpace: 'nowrap' }}>{e.service_type}</td>
                  <td style={cellStyle}>
                    <span style={{
                      fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
                      color: uc.color, backgroundColor: uc.bg,
                    }}>
                      {e.urgency.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td style={{ ...cellStyle, maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {e.job_address}
                  </td>
                  <td style={{ ...cellStyle, textAlign: 'center' }}>
                    {e.photo_count > 0 ? (
                      <span style={{
                        fontSize: '12px', fontWeight: 700, color: '#2E86C1', backgroundColor: '#eff8ff',
                        padding: '2px 8px', borderRadius: '4px',
                      }}>
                        {e.photo_count}
                      </span>
                    ) : (
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>—</span>
                    )}
                  </td>
                  <td style={cellStyle}>
                    <span style={{
                      fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
                      color: sb.color, backgroundColor: sb.bg,
                    }}>
                      {sb.label}
                    </span>
                  </td>
                  <td style={{ ...cellStyle, whiteSpace: 'nowrap', fontSize: '13px', color: '#64748b' }}>
                    {formatDate(e.created_at)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style>{`
        table tbody tr:hover {
          background-color: #f8fafc;
        }
      `}</style>
    </div>
  );
}
