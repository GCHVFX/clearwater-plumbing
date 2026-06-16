import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';

const homeServices = [
  { name: 'Emergency Repairs', desc: 'Burst pipes, leaks, no hot water.', price: 'Starting at $200' },
  { name: 'Faucets & Fixtures', desc: 'Install or replace faucets and fixtures.', price: 'From $150–400' },
  { name: 'Drain Cleaning', desc: 'Clear clogs fast, professionally.', price: 'From $175–350' },
  { name: 'Water Heaters', desc: 'Installation, repair, maintenance.', price: 'From $300–1,500' },
  { name: 'Maintenance', desc: 'Annual inspections and tune-ups.', price: 'Call for quote' },
];

const whyItems = [
  { num: '01', title: 'Same-Day Response', text: 'We respond to service calls within 2 hours during business hours, and around the clock for emergencies.' },
  { num: '02', title: 'Transparent Pricing', text: 'We quote before we start. The price you receive is the price you pay, unless you approve a change.' },
  { num: '03', title: 'Licensed & Insured', text: 'Full liability insurance and bonding. Every job is handled by a licensed plumber—no apprentices doing unsupervised work.' },
  { num: '04', title: '24/7 Emergencies', text: 'A burst pipe at midnight is a real emergency. We pick up the phone and we show up.' },
];

const trustStats = [
  { stat: '12+', label: 'Years in Business' },
  { stat: '2,000+', label: 'Jobs Completed' },
  { stat: '24/7', label: 'Emergency Service' },
];

export default function Home() {
  return (
    <div>
      <style>{`
        .hero-h1 { font-size: clamp(36px, 6vw, 68px); }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
        .hero-stats { display: flex; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 2rem; }
        .hero-stat { padding: 0 2rem 0 0; }
        .hero-stat + .hero-stat { padding-left: 2rem; border-left: 1px solid rgba(255,255,255,0.2); }
        @media (max-width: 480px) {
          .hero-stats { flex-direction: column; gap: 1.25rem; }
          .hero-stat + .hero-stat { border-left: none; border-top: 1px solid rgba(255,255,255,0.15); padding-left: 0; padding-top: 1.25rem; }
        }

        .services-strip {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }
        .services-strip-item { padding: 0; }
        @media (min-width: 768px) {
          .services-strip {
            display: flex;
            gap: 0;
          }
          .services-strip-item {
            flex: 1;
            padding: 0 2rem;
          }
          .services-strip-item:first-child { padding-left: 0; }
          .services-strip-item + .services-strip-item { border-left: 1px solid #e2e8f0; }
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }
        @media (min-width: 768px) {
          .why-grid { grid-template-columns: 1fr 1fr; gap: 4rem 5rem; }
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .cta-inner {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }
        @media (min-width: 768px) {
          .cta-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .cta-actions { flex-direction: row; align-items: center; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ backgroundColor: '#1B3A5C', minHeight: '520px', display: 'flex', alignItems: 'center', padding: '5rem 0' }}>
        <div className="container-wide">
          <h1 className="hero-h1" style={{
            fontWeight: 900,
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: '1.25rem',
            maxWidth: '800px',
            letterSpacing: '-0.01em',
          }}>
            Your Neighbourhood Plumber. Done Right.
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.65,
            maxWidth: '540px',
            marginBottom: '2.5rem',
          }}>
            Clearwater Plumbing has served the Lower Mainland since 2012. Licensed, insured, and bonded.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary" style={{ fontSize: '16px' }}>
              Request a Quote
            </Link>
            <a href="tel:6045550123" className="btn-secondary" style={{ fontSize: '16px' }}>
              Call (604) 555-0123
            </a>
          </div>

          <div className="hero-stats">
            {trustStats.map((item) => (
              <div key={item.stat} className="hero-stat">
                <p style={{ fontSize: '1.875rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '4px' }}>
                  {item.stat}
                </p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.58)' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section style={{ backgroundColor: '#ffffff', padding: '3rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-wide">
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#64748b',
            marginBottom: '1.75rem',
          }}>
            What We Do
          </p>
          <div className="services-strip">
            {homeServices.map((s) => (
              <div key={s.name} className="services-strip-item">
                <p style={{ fontWeight: 700, fontSize: '16px', color: '#1e293b', marginBottom: '5px' }}>{s.name}</p>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '6px', lineHeight: 1.5 }}>{s.desc}</p>
                <p style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 600 }}>{s.price}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/services" style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 600 }}>
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Clearwater */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '4rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Why Clearwater?
          </h2>
          <div className="why-grid">
            {whyItems.map((item) => (
              <div key={item.num} style={{ position: 'relative', paddingTop: '1rem' }}>
                <span style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontSize: '80px',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  fontFamily: 'inherit',
                }}>
                  {item.num}
                </span>
                <div style={{ position: 'relative', paddingTop: '2.75rem' }}>
                  <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: '#ffffff', marginBottom: '0.625rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 38px)',
            fontWeight: 900,
            color: '#1B3A5C',
            marginBottom: '3rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            What Our Customers Say
          </h2>
          <div className="testimonials-grid">
            <TestimonialCard
              rating={5}
              quote="Called at 11 PM with a burst pipe. They came in 45 minutes and fixed it. Saved my basement. Highly recommend."
              author="Sarah M., Burnaby"
            />
            <TestimonialCard
              rating={5}
              quote="Honest guys. They quoted $1,200 but fixed it for $800. No upselling. That's rare. Using them again."
              author="Mike T., Surrey"
            />
            <TestimonialCard
              rating={5}
              quote="Installed a new water heater. Clean, professional, on time. Price was exactly what they quoted."
              author="Jennifer K., Vancouver"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#1B3A5C', borderLeft: '6px solid #2E86C1', padding: '4rem 0' }}>
        <div className="container-wide">
          <div className="cta-inner">
            <div>
              <h2 style={{
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '0.75rem',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}>
                Ready to book a plumber?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, maxWidth: '480px' }}>
                We'll respond within 2 hours. No call centres. You speak directly with us.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary" style={{ fontSize: '15px', whiteSpace: 'nowrap' }}>
                Request a Quote
              </Link>
              <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>
                or call{' '}
                <a href="tel:6045550123" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, textDecoration: 'none' }}>
                  (604) 555-0123
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
