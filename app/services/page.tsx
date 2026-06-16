import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Plumbing Services | Clearwater Plumbing',
  description: 'All plumbing services in Vancouver, Burnaby, Surrey, and Richmond. Emergency repairs, installations, maintenance, and more.',
};

const services = [
  { icon: '🚨', title: 'Emergency Repairs', description: 'Burst pipes, no hot water, leaks, and other urgent issues. Same-day response available.', priceRange: 'Starting at $200' },
  { icon: '🚰', title: 'Faucets & Fixtures', description: 'Install or replace kitchen faucets, bathroom fixtures, and outdoor taps.', priceRange: 'From $150-400' },
  { icon: '🚿', title: 'Drain Cleaning', description: 'Clogged drain? We use professional equipment to clear blockages fast and clean.', priceRange: 'From $175-350' },
  { icon: '💧', title: 'Water Heater Service', description: 'Installation of new units, repair of existing tanks, and tankless system maintenance.', priceRange: 'From $300-1500' },
  { icon: '🏠', title: 'Renovations', description: 'Bathroom and kitchen plumbing for renovations. We work with contractors and homeowners.', priceRange: 'Call for quote' },
  { icon: '🔧', title: 'Maintenance', description: 'Annual inspections and preventive maintenance to keep your system running smoothly.', priceRange: 'From $150-250' },
  { icon: '🧊', title: 'Frost-Free Sillcocks', description: "Install outdoor taps that won't freeze in winter. Essential for Lower Mainland homes.", priceRange: 'From $120-200' },
  { icon: '📏', title: 'Shut-Off Valve Repair', description: 'Fix or replace main water shut-off valves and zone shut-offs.', priceRange: 'From $100-300' },
];

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function Services() {
  return (
    <div>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 1.5rem;
          text-align: center;
        }
      `}</style>

      {/* Hero */}
      <section className="section-navy" style={{ padding: '4rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Plumbing Services We Offer
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#d1d5db', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            From emergency repairs to full installations. Serving Vancouver, Burnaby, Surrey, Richmond, and the surrounding Lower Mainland.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} priceRange={s.priceRange} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-navy" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
            Our Service Areas
          </h2>
          <div className="areas-grid">
            {serviceAreas.map((area) => (
              <div key={area}>
                <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>{area}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#9ca3af', marginTop: '2rem', fontSize: '0.875rem' }}>
            Not listed? Call us—we may serve your area: (604) 555-0123
          </p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container-wide">
          <div style={{
            backgroundColor: '#ffffff',
            borderLeft: '4px solid #2E86C1',
            borderRadius: '0.5rem',
            padding: '2rem',
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.75rem', color: '#1B3A5C' }}>
              How We Price
            </h3>
            <p style={{ color: '#374151', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
              All prices shown are estimates based on typical jobs. Every plumbing issue is different, so we quote individual jobs before starting work. No surprises.
            </p>
            <p style={{ color: '#374151', fontSize: '0.875rem' }}>
              Service call fee is $80, which is credited toward any work we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-blue" style={{ padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Need a Plumber?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.88)', marginBottom: '2rem' }}>
            Get a free quote on any of our services.
          </p>
          <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#2E86C1', fontWeight: 700, fontSize: '1.125rem' }}>
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
