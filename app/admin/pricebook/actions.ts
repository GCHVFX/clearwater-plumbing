'use server';

import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';
import type { PricebookRow } from '@/lib/pricebook-import';

function getBusinessId(): string {
  const id = process.env.TP_BUSINESS_ID;
  if (!id) throw new Error('TP_BUSINESS_ID not configured');
  return id;
}

async function requireAdmin() {
  const authed = await isAdminAuthenticated();
  if (!authed) throw new Error('Unauthorized');
}

export async function savePricebookItem(data: {
  id?: string;
  category: string;
  name: string;
  description: string;
  labour_price: number;
  material_price: number;
  taxable: boolean;
  active: boolean;
}) {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  if (data.id) {
    const { error } = await supabase
      .from('tpe_pricebook_items')
      .update({
        category: data.category,
        name: data.name,
        description: data.description || null,
        labour_price: data.labour_price,
        material_price: data.material_price,
        taxable: data.taxable,
        active: data.active,
      })
      .eq('id', data.id)
      .eq('business_id', businessId);

    if (error) throw new Error('Failed to update item');
  } else {
    const { error } = await supabase
      .from('tpe_pricebook_items')
      .insert({
        business_id: businessId,
        category: data.category,
        name: data.name,
        description: data.description || null,
        labour_price: data.labour_price,
        material_price: data.material_price,
        taxable: data.taxable,
        active: data.active,
      });

    if (error) throw new Error('Failed to add item');
  }
}

export async function togglePricebookItem(id: string, active: boolean) {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  const { error } = await supabase
    .from('tpe_pricebook_items')
    .update({ active })
    .eq('id', id)
    .eq('business_id', businessId);

  if (error) throw new Error('Failed to update item');
}

export async function bulkImportPricebookItems(rows: PricebookRow[]): Promise<number> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  const records = rows.map((row) => ({
    business_id: businessId,
    category: row.category,
    name: row.name,
    description: row.description || null,
    labour_price: row.labour_price,
    material_price: row.material_price,
    taxable: row.taxable,
    active: row.active,
  }));

  const { error } = await supabase
    .from('tpe_pricebook_items')
    .insert(records);

  if (error) throw new Error('Failed to import items');
  return records.length;
}
