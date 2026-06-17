import Link from 'next/link';

export const metadata = {
  title: 'Plumbing Services | Clearwater Plumbing',
  description: 'Plumbing services in Vancouver, Burnaby, Surrey, and Richmond. Leaks, drains, water heaters, toilets, renovations, and emergencies.',
};

const services = [
  {
    title: 'Leaks',
    desc: 'Dripping taps, pipe leaks, water stains on walls or ceilings. We find the source and fix it properly.',
    icon: '💧',
    details: ['Pipe leak repair', 'Faucet drip repair', 'Toilet leak repair', 'Water line repair'],
  },
  {
    title: 'Drain Cleaning',
    desc: 'Slow drains, clogs, or backups. We use professional equipment to clear blockages without damaging your pipes.',
    icon: '🚿',
    details: ['Kitchen sink drains', 'Bathroom drains', 'Floor drains', 'Main sewer line'],
  },
  {
    title: 'Water Heaters',
    desc: 'No hot water, strange noises, or visible leaks. We repair and install tank and tankless water heaters.',
    icon: '🔥',
    details: ['Tank water heaters', 'Tankless water heaters', 'Repair & maintenance', 'New installation'],
  },
  {
    title: 'Toilets',
    desc: 'Running toilets, weak flush, leaks at the base, or a full replacement. We handle all toilet issues.',
    icon: '🚽',
    details: ['Running toilet repair', 'Toilet replacement', 'Wax ring replacement', 'Flush valve repair'],
  },
  {
    title: 'Faucets & Fixtures',
    desc: 'Install or replace kitchen faucets, bathroom taps, showerheads, and outdoor fixtures.',
    icon: '🔧',
    details: ['Kitchen faucets', 'Bathroom faucets', 'Showerheads', 'Outdoor fixtures'],
  },
  {
    title: 'Renovation Plumbing',
    desc: 'Full plumbing rough-in and finish work for kitchen and bathroom renovations.',
    icon: '🏠',
    details: ['Kitchen renovation', 'Bathroom renovation', 'Rough-in plumbing', 'Fixture installation'],
  },
  {
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, flooding, gas leaks, or no water. We respond quickly to urgent situations.',
    icon: '🚨',
    details: ['Burst pipe repair', 'Flood response', 'Emergency shut-off', 'After-hours service'],
  },
  {
    title: 'Preventive Maintenance',
    desc: 'Annual inspections to catch problems before they become expensive. Ideal for older homes.',
    icon: '🛡️',
    details: ['Annual inspections', 'Valve maintenance', 'Pressure testing', 'Pipe assessment'],
  },
];

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function Services() {
  return (
    <div>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .service-item {
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          background-color: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .service-item:hover {
          border-color: #2E86C1;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
      `}</style>

      {/* Hero */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '4rem 0' }}>
        <div className="container-wide">
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            What Do You Need Help With?
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.65 }}>
            We solve plumbing problems. Pick the issue that sounds like yours, and request a quote.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-item">
                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: '#1B3A5C', marginBottom: '0.625rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {s.desc}
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.375rem',
                  marginBottom: '1.5rem',
                }}>
                  {s.details.map((d) => (
                    <p key={d} style={{ fontSize: '13px', color: '#1e293b' }}>
                      <span style={{ color: '#2E86C1', marginRight: '0.375rem' }}>&#10003;</span>{d}
                    </p>
                  ))}
                </div>
                <Link
                  href="/contact"
                  style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 700 }}
                >
                  Get a Quote &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
        <div className="container-wide">
          <div style={{
            backgroundColor: '#F0F4F8',
            borderLeft: '4px solid #2E86C1',
            padding: '2rem 2.5rem',
            borderRadius: '0 12px 12px 0',
            maxWidth: '640px',
          }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: '#1B3A5C', marginBottom: '0.75rem' }}>
              How We Price Our Work
            </h3>
            <p style={{ fontSize: '15px', color: '#1e293b', lineHeight: 1.7, marginBottom: '0.625rem' }}>
              Every plumbing job is different, so we quote each job individually before starting. Upload photos and describe the problem, and we&apos;ll provide an estimate.
            </p>
            <p style={{ fontSize: '15px', color: '#1e293b', lineHeight: 1.7 }}>
              No hidden fees. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '3.5rem 0' }}>
        <div className="container-wide">
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '0.75rem',
          }}>
            Service Areas
          </p>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
            {serviceAreas.join(' · ')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '4rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 900,
            color: '#1B3A5C',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '2rem' }}>
            Show us the problem and we&apos;ll send you an estimate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <a href="tel:6045550123" style={{ fontSize: '15px', color: '#64748b', textDecoration: 'none' }}>
              or call <span style={{ color: '#2E86C1', fontWeight: 600 }}>(604) 555-0123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
