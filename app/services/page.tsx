import Link from 'next/link';

export const metadata = {
  title: 'Plumbing Services | Clearwater Plumbing',
  description: 'All plumbing services in Vancouver, Burnaby, Surrey, and Richmond. Emergency repairs, installations, maintenance, and more.',
};

const services = [
  { title: 'Emergency Repairs', description: 'Burst pipes, no hot water, active leaks, and other urgent situations. We prioritise emergency calls and aim to be on-site within 2 hours.', price: 'Starting at $200' },
  { title: 'Faucets & Fixtures', description: 'Install or replace kitchen faucets, bathroom taps, showerheads, and outdoor fixtures. We supply parts or use customer-supplied fixtures.', price: 'From $150–400' },
  { title: 'Drain Cleaning', description: 'Clogged drain or slow drainage? We clear blockages using professional-grade equipment. Fast, clean, and effective.', price: 'From $175–350' },
  { title: 'Water Heater Service', description: 'Installation of new tank or tankless water heaters, repair of existing units, and regular maintenance to extend equipment life.', price: 'From $300–1,500' },
  { title: 'Bathroom & Kitchen Renovations', description: 'Full plumbing rough-in and finish work for renovations. We coordinate with your general contractor or work directly with homeowners.', price: 'Call for quote' },
  { title: 'Preventive Maintenance', description: 'Annual plumbing inspections to catch problems before they become expensive. Ideal for older homes or rental properties.', price: 'From $150–250' },
  { title: 'Frost-Free Sillcocks', description: "Install outdoor taps designed to prevent freezing. An essential upgrade for any Lower Mainland home.", price: 'From $120–200' },
  { title: 'Shut-Off Valve Service', description: 'Repair or replace main water shut-off valves, zone shut-offs, and isolation valves throughout your home.', price: 'From $100–300' },
];

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function Services() {
  return (
    <div>
      <style>{`
        .services-list {
          display: grid;
          grid-template-columns: 1fr;
          border-top: 1px solid #e2e8f0;
        }
        @media (min-width: 768px) {
          .services-list { grid-template-columns: 1fr 1fr; }
        }
        .service-row {
          padding: 2rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        @media (min-width: 768px) {
          .service-row { padding: 2rem 2rem 2rem 0; }
          .service-row:nth-child(even) { padding-left: 2rem; border-left: 1px solid #e2e8f0; }
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
            Plumbing Services We Offer
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '540px', lineHeight: 1.65 }}>
            From burst pipes at midnight to full bathroom renovations. Serving the Lower Mainland since 2012.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
        <div className="container-wide">
          <div className="services-list">
            {services.map((s) => (
              <div key={s.title} className="service-row">
                <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: '#1B3A5C', marginBottom: '0.5rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, marginBottom: '0.625rem' }}>
                  {s.description}
                </p>
                <p style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 600 }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '3rem 0' }}>
        <div className="container-wide">
          <div style={{
            backgroundColor: '#ffffff',
            borderLeft: '4px solid #2E86C1',
            padding: '1.75rem 2rem',
            maxWidth: '640px',
          }}>
            <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#1B3A5C', marginBottom: '0.75rem' }}>
              How We Price Our Work
            </h3>
            <p style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.7, marginBottom: '0.625rem' }}>
              All prices shown are estimates based on typical jobs. Every plumbing situation is different, so we quote each job individually before starting. No hidden fees.
            </p>
            <p style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.7 }}>
              Service call fee: <strong>$80</strong> — credited toward any work we perform.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0' }}>
        <div className="container-wide">
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#64748b',
            marginBottom: '0.75rem',
          }}>
            Service Areas
          </p>
          <p style={{ fontSize: '16px', color: '#1e293b' }}>
            {serviceAreas.join(' &nbsp;&bull;&nbsp; ')}
          </p>
          <p style={{ fontSize: '14px', color: '#64748b', marginTop: '0.625rem' }}>
            Not on this list? Call us — we may serve your area: (604) 555-0123
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B3A5C', borderLeft: '6px solid #2E86C1', padding: '4rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Need a Plumber?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', marginBottom: '2rem' }}>
            Get a free quote on any of our services.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Request a Free Quote</Link>
            <a href="tel:6045550123" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              or call <span style={{ color: '#ffffff', fontWeight: 600 }}>(604) 555-0123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
