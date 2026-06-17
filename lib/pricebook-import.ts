export interface PricebookRow {
  category: string;
  name: string;
  description: string;
  labour_price: number;
  material_price: number;
  taxable: boolean;
  active: boolean;
}

export interface ImportResult {
  valid: PricebookRow[];
  rejected: Array<{ row: number; reason: string; data: Record<string, string> }>;
}

const LABOUR_ALIASES = ['labour_price', 'labor_price', 'labour', 'labor'];
const MATERIAL_ALIASES = ['material_price', 'materials', 'material'];

function normalizeHeader(h: string): string {
  return h.trim().toLowerCase().replace(/\s+/g, '_');
}

function parseBool(val: string | undefined | null, fallback: boolean): boolean {
  if (val === undefined || val === null || val === '') return fallback;
  const v = val.trim().toLowerCase();
  if (['true', 'yes', 'y', '1'].includes(v)) return true;
  if (['false', 'no', 'n', '0'].includes(v)) return false;
  return fallback;
}

function parsePrice(val: string | undefined | null): number {
  if (val === undefined || val === null || val === '') return 0;
  const cleaned = val.replace(/[^0-9.\-]/g, '');
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : Math.round(num * 100) / 100;
}

export function mapColumns(headers: string[]): Record<string, string> {
  const normalized = headers.map(normalizeHeader);
  const mapping: Record<string, string> = {};

  const findCol = (aliases: string[]): string | null => {
    for (const alias of aliases) {
      const idx = normalized.indexOf(alias);
      if (idx >= 0) return headers[idx];
    }
    return null;
  };

  mapping.category = findCol(['category']) || '';
  mapping.name = findCol(['name', 'item', 'item_name', 'service']) || '';
  mapping.description = findCol(['description', 'desc', 'details', 'notes']) || '';
  mapping.labour_price = findCol(LABOUR_ALIASES) || '';
  mapping.material_price = findCol(MATERIAL_ALIASES) || '';
  mapping.taxable = findCol(['taxable', 'tax']) || '';
  mapping.active = findCol(['active', 'enabled', 'status']) || '';

  if (!mapping.labour_price && !mapping.material_price) {
    const priceCol = findCol(['price', 'cost', 'rate', 'amount']);
    if (priceCol) mapping.labour_price = priceCol;
  }

  return mapping;
}

export function validateRows(
  rows: Array<Record<string, string>>,
  columnMap: Record<string, string>,
): ImportResult {
  const valid: PricebookRow[] = [];
  const rejected: ImportResult['rejected'] = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowNum = i + 2; // +2 for 1-indexed + header row

    const category = (columnMap.category ? row[columnMap.category] : '')?.trim() || '';
    const name = (columnMap.name ? row[columnMap.name] : '')?.trim() || '';

    if (!category && !name) continue; // skip fully empty rows

    if (!category) {
      rejected.push({ row: rowNum, reason: 'Missing category', data: row });
      continue;
    }
    if (!name) {
      rejected.push({ row: rowNum, reason: 'Missing name', data: row });
      continue;
    }

    const labourRaw = columnMap.labour_price ? row[columnMap.labour_price] : '';
    const materialRaw = columnMap.material_price ? row[columnMap.material_price] : '';

    if (labourRaw && isNaN(parseFloat(labourRaw.replace(/[^0-9.\-]/g, '')))) {
      rejected.push({ row: rowNum, reason: `Invalid labour price: "${labourRaw}"`, data: row });
      continue;
    }
    if (materialRaw && isNaN(parseFloat(materialRaw.replace(/[^0-9.\-]/g, '')))) {
      rejected.push({ row: rowNum, reason: `Invalid material price: "${materialRaw}"`, data: row });
      continue;
    }

    valid.push({
      category,
      name,
      description: (columnMap.description ? row[columnMap.description] : '')?.trim() || '',
      labour_price: parsePrice(labourRaw),
      material_price: parsePrice(materialRaw),
      taxable: parseBool(columnMap.taxable ? row[columnMap.taxable] : '', true),
      active: parseBool(columnMap.active ? row[columnMap.active] : '', true),
    });
  }

  return { valid, rejected };
}
