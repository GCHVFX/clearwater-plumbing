'use client';

import { useState, useRef } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { mapColumns, validateRows, type ImportResult, type PricebookRow } from '@/lib/pricebook-import';

interface Props {
  onImport: (rows: PricebookRow[]) => Promise<number>;
  onClose: () => void;
}

type Stage = 'upload' | 'preview' | 'done';

export default function PricebookImport({ onImport, onClose }: Props) {
  const [stage, setStage] = useState<Stage>('upload');
  const [result, setResult] = useState<ImportResult | null>(null);
  const [importedCount, setImportedCount] = useState(0);
  const [importing, setImporting] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const parseFile = async (file: File) => {
    setError('');
    try {
      let rows: Array<Record<string, string>> = [];
      let headers: string[] = [];

      if (file.name.endsWith('.csv') || file.name.endsWith('.tsv')) {
        const text = await file.text();
        const parsed = Papa.parse<Record<string, string>>(text, { header: true, skipEmptyLines: true });
        headers = parsed.meta.fields || [];
        rows = parsed.data;
      } else if (file.name.match(/\.xlsx?$/i)) {
        const buffer = await file.arrayBuffer();
        const wb = XLSX.read(buffer, { type: 'array' });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: '' });
        if (json.length > 0) headers = Object.keys(json[0]);
        rows = json.map((r) => {
          const out: Record<string, string> = {};
          for (const k of Object.keys(r)) out[k] = String(r[k]);
          return out;
        });
      } else {
        setError('Unsupported file type. Upload a CSV or XLSX file.');
        return;
      }

      if (rows.length === 0) {
        setError('The file contains no data rows.');
        return;
      }

      const columnMap = mapColumns(headers);
      if (!columnMap.category && !columnMap.name) {
        setError('Could not find "category" or "name" columns. Check your headers.');
        return;
      }

      const importResult = validateRows(rows, columnMap);
      setResult(importResult);
      setStage('preview');
    } catch {
      setError('Failed to parse the file. Make sure it is a valid CSV or XLSX.');
    }
  };

  const handleConfirm = async () => {
    if (!result || result.valid.length === 0) return;
    setImporting(true);
    try {
      const count = await onImport(result.valid);
      setImportedCount(count);
      setStage('done');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Import failed');
    }
    setImporting(false);
  };

  const cellStyle: React.CSSProperties = {
    padding: '8px 10px',
    fontSize: '13px',
    borderBottom: '1px solid #f0f0f0',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '200px',
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)',
    }}>
      <div style={{
        backgroundColor: '#ffffff', borderRadius: '12px', padding: '2rem',
        maxWidth: '800px', width: '100%', maxHeight: '90vh', overflow: 'auto',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      }}>
        {stage === 'upload' && (
          <>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
              Import Pricebook
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1.5rem' }}>
              Upload a CSV or XLSX file with columns: category, name, description, labour_price, material_price, taxable, active.
            </p>
            <div
              onClick={() => fileRef.current?.click()}
              style={{
                border: '2px dashed #cbd5e1', borderRadius: '10px', padding: '2.5rem',
                textAlign: 'center', cursor: 'pointer', backgroundColor: '#fafbfc',
              }}
            >
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b' }}>Click to select a file</p>
              <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '0.25rem' }}>CSV or XLSX</p>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept=".csv,.tsv,.xlsx,.xls"
              onChange={(e) => { if (e.target.files?.[0]) parseFile(e.target.files[0]); }}
              style={{ display: 'none' }}
            />
            {error && <p role="alert" style={{ fontSize: '14px', color: '#dc2626', marginTop: '1rem' }}>{error}</p>}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button
                onClick={onClose}
                style={{
                  padding: '10px 20px', fontSize: '14px', fontWeight: 600, color: '#64748b',
                  backgroundColor: 'transparent', border: '2px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}

        {stage === 'preview' && result && (
          <>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
              Import Preview
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '1rem' }}>
              <span style={{ color: '#16a34a', fontWeight: 700 }}>{result.valid.length}</span> items ready to import
              {result.rejected.length > 0 && (
                <>, <span style={{ color: '#dc2626', fontWeight: 700 }}>{result.rejected.length}</span> will be skipped</>
              )}
            </p>

            {result.valid.length > 0 && (
              <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#F0F4F8' }}>
                      {['Category', 'Name', 'Labour', 'Material', 'Tax', 'Active'].map((h) => (
                        <th key={h} style={{ ...cellStyle, fontWeight: 700, color: '#1B3A5C', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.valid.slice(0, 20).map((row, i) => (
                      <tr key={i}>
                        <td style={cellStyle}>{row.category}</td>
                        <td style={cellStyle}>{row.name}</td>
                        <td style={cellStyle}>${row.labour_price.toFixed(2)}</td>
                        <td style={cellStyle}>${row.material_price.toFixed(2)}</td>
                        <td style={cellStyle}>{row.taxable ? 'Yes' : 'No'}</td>
                        <td style={cellStyle}>{row.active ? 'Yes' : 'No'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {result.valid.length > 20 && (
                  <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '0.5rem' }}>
                    ...and {result.valid.length - 20} more items
                  </p>
                )}
              </div>
            )}

            {result.rejected.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem' }}>
                  Skipped rows:
                </p>
                <div style={{ maxHeight: '120px', overflow: 'auto', fontSize: '13px', color: '#64748b' }}>
                  {result.rejected.map((r, i) => (
                    <p key={i} style={{ marginBottom: '0.25rem' }}>
                      Row {r.row}: {r.reason}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {error && <p role="alert" style={{ fontSize: '14px', color: '#dc2626', marginBottom: '1rem' }}>{error}</p>}

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
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
                onClick={handleConfirm}
                disabled={importing || result.valid.length === 0}
                style={{
                  padding: '10px 20px', fontSize: '14px', fontWeight: 700, color: '#ffffff',
                  backgroundColor: '#2E86C1', border: 'none', borderRadius: '8px',
                  cursor: importing ? 'wait' : 'pointer', opacity: importing ? 0.6 : 1,
                }}
              >
                {importing ? 'Importing...' : `Import ${result.valid.length} Items`}
              </button>
            </div>
          </>
        )}

        {stage === 'done' && (
          <>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#16a34a', marginBottom: '0.5rem' }}>
              Import Complete
            </h2>
            <p style={{ fontSize: '15px', color: '#1e293b', marginBottom: '0.5rem' }}>
              <strong>{importedCount}</strong> items imported successfully.
            </p>
            {result && result.rejected.length > 0 && (
              <p style={{ fontSize: '14px', color: '#dc2626' }}>
                {result.rejected.length} rows were skipped due to validation errors.
              </p>
            )}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button
                onClick={onClose}
                style={{
                  padding: '10px 20px', fontSize: '14px', fontWeight: 700, color: '#ffffff',
                  backgroundColor: '#2E86C1', border: 'none', borderRadius: '8px', cursor: 'pointer',
                }}
              >
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
