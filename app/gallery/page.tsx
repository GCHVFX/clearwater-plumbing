import Link from 'next/link';

export const metadata = {
  title: 'Services Gallery | Clearwater Plumbing',
  description: 'Types of plumbing work we handle across the Lower Mainland — leaks, drains, water heaters, renovations, and more.',
};

const serviceCategories = [
  { title: 'Leak Repair', type: 'Leaks', desc: 'Pipe leaks, faucet drips, and water damage repairs.' },
  { title: 'Drain Clearing', type: 'Drain Cleaning', desc: 'Clogged sinks, backed-up drains, and sewer line clearing.' },
  { title: 'Water Heater Install', type: 'Water Heater', desc: 'Tank and tankless water heater installs and repairs.' },
  { title: 'Bathroom Renovation Plumbing', type: 'Renovation', desc: 'Rough-in and finish plumbing for bathroom and kitchen renos.' },
  { title: 'Toilet Replacement', type: 'Toilets', desc: 'New toilet installs and repairs for running or leaking toilets.' },
  { title: 'Emergency Response', type: 'Emergency', desc: 'Burst pipes, flooding, and after-hours emergency calls.' },
  { title: 'Outdoor Fixtures', type: 'Fixtures', desc: 'Sillcocks, hose bibs, and outdoor plumbing installs.' },
  { title: 'Sump Pump Install', type: 'Sump Pumps', desc: 'Sump pump installs for basements with water infiltration.' },
  { title: 'Kitchen Faucet Install', type: 'Faucets & Fixtures', desc: 'Kitchen and bathroom faucet replacements and upgrades.' },
];

export default function Gallery() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '4rem 0' }}>
        <div className="container-wide">
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '0',
          }}>
            Types of Work We Handle
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.65 }}>
            From small repairs to full renovations, here are the kinds of plumbing jobs we take on.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="gallery-grid">
            {serviceCategories.map((item) => (
              <div key={item.title} className="gallery-card">
                <div style={{
                  height: '140px',
                  backgroundColor: '#1B3A5C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(46,134,193,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" fill="none" stroke="rgba(255,255,255,0.6)" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                    </svg>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#2E86C1',
                      backgroundColor: '#eff8ff',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}>
                      {item.type}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '4rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '0',
          }}>
            Need similar work done?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', marginBottom: '2rem' }}>
            Show us the problem and we&apos;ll send you an estimate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <a href="tel:6045550123" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              or call <span style={{ color: '#ffffff', fontWeight: 600 }}>(604) 555-0123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
