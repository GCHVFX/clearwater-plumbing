import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { getSupabaseAdmin } from '@/lib/supabase';
import PricebookTable from '@/components/admin/PricebookTable';
import { savePricebookItem, togglePricebookItem, bulkImportPricebookItems } from './actions';

export const dynamic = 'force-dynamic';

export default async function PricebookPage() {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect('/admin/pricebook');

  const supabase = getSupabaseAdmin();
  const businessId = process.env.TP_BUSINESS_ID;

  const { data: items } = await supabase
    .from('tpe_pricebook_items')
    .select('*')
    .eq('business_id', businessId!)
    .order('category')
    .order('name');

  const mapped = (items || []).map((item) => ({
    id: item.id as string,
    category: item.category as string,
    name: item.name as string,
    description: (item.description as string) || '',
    labour_price: Number(item.labour_price),
    material_price: Number(item.material_price),
    taxable: item.taxable as boolean,
    active: item.active as boolean,
  }));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1B3A5C', marginBottom: '0.25rem' }}>
            Pricebook
          </h1>
          <p style={{ fontSize: '14px', color: '#64748b' }}>
            Manage standard pricing for estimates.
          </p>
        </div>
      </div>
      <PricebookTable
        initialItems={mapped}
        onSave={savePricebookItem}
        onToggleActive={togglePricebookItem}
        onBulkImport={bulkImportPricebookItems}
      />
    </div>
  );
}
