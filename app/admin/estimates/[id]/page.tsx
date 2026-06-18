import { redirect, notFound } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { fetchEstimate, fetchPricebookItems, saveLineItems } from '../actions';
import EstimateDetail from '@/components/admin/EstimateDetail';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EstimateDetailPage({ params }: Props) {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect('/admin/estimates');

  const { id } = await params;
  const estimate = await fetchEstimate(id);
  if (!estimate) notFound();

  const pricebookItems = await fetchPricebookItems();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <a
        href="/admin/estimates"
        style={{ fontSize: '14px', color: '#2E86C1', textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}
      >
        ← Back to Estimates
      </a>
      <EstimateDetail
        estimate={estimate}
        pricebookItems={pricebookItems}
        onSaveLineItems={saveLineItems}
      />
    </div>
  );
}
