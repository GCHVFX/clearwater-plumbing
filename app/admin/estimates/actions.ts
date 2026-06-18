'use server';

import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';

function getBusinessId(): string {
  const id = process.env.TP_BUSINESS_ID;
  if (!id) throw new Error('TP_BUSINESS_ID not configured');
  return id;
}

async function requireAdmin() {
  const authed = await isAdminAuthenticated();
  if (!authed) throw new Error('Unauthorized');
}

export interface EstimateSummary {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  job_address: string;
  service_type: string;
  urgency: string;
  description: string;
  status: string;
  created_at: string;
  photo_count: number;
}

export interface EstimateFull {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  job_address: string;
  service_type: string;
  location: string;
  urgency: string;
  description: string;
  status: string;
  source: string;
  created_at: string;
  photos: Array<{
    id: string;
    storage_path: string;
    original_filename: string;
    mime_type: string;
  }>;
  line_items: LineItem[];
}

export interface LineItem {
  id: string;
  pricebook_item_id: string | null;
  name: string;
  description: string | null;
  quantity: number;
  labour_price: number;
  material_price: number;
  taxable: boolean;
  sort_order: number;
}

export interface PricebookEntry {
  id: string;
  category: string;
  name: string;
  description: string;
  labour_price: number;
  material_price: number;
  taxable: boolean;
}

export async function fetchEstimates(): Promise<EstimateSummary[]> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  const { data: estimates, error } = await supabase
    .from('tpe_estimates')
    .select('id, customer_name, customer_phone, customer_email, job_address, service_type, urgency, description, status, created_at')
    .eq('business_id', businessId)
    .in('status', ['needs_review', 'draft'])
    .order('created_at', { ascending: false });

  if (error) throw new Error('Failed to fetch estimates');

  const ids = (estimates || []).map((e: Record<string, unknown>) => e.id as string);

  let photoCounts: Record<string, number> = {};
  if (ids.length > 0) {
    const { data: photos } = await supabase
      .from('tpe_estimate_photos')
      .select('estimate_id')
      .in('estimate_id', ids);

    if (photos) {
      for (const p of photos) {
        const eid = p.estimate_id as string;
        photoCounts[eid] = (photoCounts[eid] || 0) + 1;
      }
    }
  }

  return (estimates || []).map((e: Record<string, unknown>) => ({
    id: e.id as string,
    customer_name: e.customer_name as string,
    customer_phone: e.customer_phone as string,
    customer_email: e.customer_email as string,
    job_address: e.job_address as string,
    service_type: e.service_type as string,
    urgency: e.urgency as string,
    description: e.description as string,
    status: e.status as string,
    created_at: e.created_at as string,
    photo_count: photoCounts[e.id as string] || 0,
  }));
}

export async function fetchEstimate(id: string): Promise<EstimateFull | null> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  const { data: estimate, error } = await supabase
    .from('tpe_estimates')
    .select('*')
    .eq('id', id)
    .eq('business_id', businessId)
    .single();

  if (error || !estimate) return null;

  const { data: photos } = await supabase
    .from('tpe_estimate_photos')
    .select('id, storage_path, original_filename, mime_type')
    .eq('estimate_id', id);

  const { data: lineItems } = await supabase
    .from('tpe_estimate_line_items')
    .select('id, pricebook_item_id, name, description, quantity, labour_price, material_price, taxable, sort_order')
    .eq('estimate_id', id)
    .order('sort_order');

  return {
    id: estimate.id as string,
    customer_name: estimate.customer_name as string,
    customer_phone: estimate.customer_phone as string,
    customer_email: estimate.customer_email as string,
    job_address: estimate.job_address as string,
    service_type: estimate.service_type as string,
    location: (estimate.location as string) || '',
    urgency: estimate.urgency as string,
    description: estimate.description as string,
    status: estimate.status as string,
    source: estimate.source as string,
    created_at: estimate.created_at as string,
    photos: (photos || []).map((p: Record<string, unknown>) => ({
      id: p.id as string,
      storage_path: p.storage_path as string,
      original_filename: p.original_filename as string,
      mime_type: p.mime_type as string,
    })),
    line_items: (lineItems || []).map((li: Record<string, unknown>) => ({
      id: li.id as string,
      pricebook_item_id: (li.pricebook_item_id as string) || null,
      name: li.name as string,
      description: (li.description as string) || null,
      quantity: Number(li.quantity),
      labour_price: Number(li.labour_price),
      material_price: Number(li.material_price),
      taxable: li.taxable as boolean,
      sort_order: Number(li.sort_order),
    })),
  };
}

export async function fetchPricebookItems(): Promise<PricebookEntry[]> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  const { data, error } = await supabase
    .from('tpe_pricebook_items')
    .select('id, category, name, description, labour_price, material_price, taxable')
    .eq('business_id', businessId)
    .eq('active', true)
    .order('category')
    .order('name');

  if (error) throw new Error('Failed to fetch pricebook');

  return (data || []).map((item: Record<string, unknown>) => ({
    id: item.id as string,
    category: item.category as string,
    name: item.name as string,
    description: (item.description as string) || '',
    labour_price: Number(item.labour_price),
    material_price: Number(item.material_price),
    taxable: item.taxable as boolean,
  }));
}

export async function saveLineItems(
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
): Promise<void> {
  await requireAdmin();
  const supabase = getSupabaseAdmin();
  const businessId = getBusinessId();

  const { data: estimate } = await supabase
    .from('tpe_estimates')
    .select('id, status')
    .eq('id', estimateId)
    .eq('business_id', businessId)
    .single();

  if (!estimate) throw new Error('Estimate not found');

  const { error: deleteError } = await supabase
    .from('tpe_estimate_line_items')
    .delete()
    .eq('estimate_id', estimateId);

  if (deleteError) throw new Error('Failed to clear existing line items');

  if (items.length > 0) {
    const records = items.map((item, i) => ({
      estimate_id: estimateId,
      pricebook_item_id: item.pricebook_item_id || null,
      name: item.name,
      description: item.description || null,
      quantity: item.quantity,
      labour_price: item.labour_price,
      material_price: item.material_price,
      taxable: item.taxable,
      sort_order: i,
    }));

    const { error: insertError } = await supabase
      .from('tpe_estimate_line_items')
      .insert(records);

    if (insertError) throw new Error('Failed to save line items');
  }

  if (estimate.status === 'needs_review') {
    await supabase
      .from('tpe_estimates')
      .update({ status: 'draft' })
      .eq('id', estimateId)
      .eq('business_id', businessId);
  }
}
