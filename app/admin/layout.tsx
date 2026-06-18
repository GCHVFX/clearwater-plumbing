import AdminGate from '@/components/admin/AdminGate';

export const metadata = {
  title: 'TradePulse Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGate>
      <div style={{ minHeight: '100vh', backgroundColor: '#F0F4F8' }}>
        <nav style={{
          backgroundColor: '#1B3A5C',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          height: '48px',
        }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>
            TradePulse
          </span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: '0 0.75rem' }}>/</span>
          <a href="/admin/estimates" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Estimates
          </a>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: '0 0.75rem' }}>/</span>
          <a href="/admin/pricebook" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            Pricebook
          </a>
        </nav>
        {children}
      </div>
    </AdminGate>
  );
}
