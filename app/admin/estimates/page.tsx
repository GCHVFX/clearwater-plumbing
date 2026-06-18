import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { fetchEstimates } from './actions';
import EstimatesList from '@/components/admin/EstimatesList';

export const dynamic = 'force-dynamic';

export default async function EstimatesPage() {
  const authed = await isAdminAuthenticated();
  if (!authed) redirect('/admin/estimates');

  const estimates = await fetchEstimates();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1B3A5C', marginBottom: '0.25rem' }}>
          Estimates
        </h1>
        <p style={{ fontSize: '14px', color: '#64748b' }}>
          Website quote requests needing review.
        </p>
      </div>
      <EstimatesList estimates={estimates} />
    </div>
  );
}
