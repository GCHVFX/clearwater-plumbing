import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'About Clearwater Plumbing',
  description: 'Licensed, insured, and bonded plumbing in the Lower Mainland. Reliable service, honest communication, quality work.',
};

const values = [
  {
    title: 'Reliability',
    desc: 'We show up when we say we will. If something changes, we communicate immediately.',
    icon: 'clock',
  },
  {
    title: 'Communication',
    desc: 'You talk directly with the person doing the work. No call centres, no runaround.',
    icon: 'message-circle',
  },
  {
    title: 'Professionalism',
    desc: 'Licensed plumbers on every job. We treat your home with respect and clean up after ourselves.',
    icon: 'shield',
  },
];

const credentials = [
  'Licensed Plumber — Licence #L12345',
  'Fully insured — $2M liability coverage',
  'Bonded for your protection',
  'All work meets BC Building Code standards',
];

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function About() {
  return (
    <div>
      <style>{`
        .about-values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .about-values-grid { grid-template-columns: repeat(3, 1fr); }
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
            About Clearwater Plumbing
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: 1.65 }}>
            Reliable plumbing in the Lower Mainland. Licensed, insured, and bonded.
          </p>
        </div>
      </section>

      {/* Short Story */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '640px' }}>
            <p style={{ fontSize: '17px', color: '#1e293b', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Clearwater Plumbing has served the Lower Mainland since 2012. We started with a simple idea: plumbing work should be honest, on time, and done right.
            </p>
            <p style={{ fontSize: '17px', color: '#1e293b', lineHeight: 1.8 }}>
              We&apos;re a small team. Every job gets a qualified, licensed plumber. We quote before we start, and the price you&apos;re given is the price you pay.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 900,
            color: '#1B3A5C',
            marginBottom: '3rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            What We Stand For
          </h2>
          <div className="about-values-grid">
            {values.map((item) => (
              <div key={item.title} style={{
                padding: '2.5rem 2rem',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <div style={{ color: '#2E86C1', marginBottom: '1.25rem' }}><Icon name={item.icon} size={32} /></div>
                <h3 style={{ fontWeight: 800, fontSize: '1.125rem', color: '#1B3A5C', marginBottom: '0.625rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '480px' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '1.75rem',
              lineHeight: 1.1,
            }}>
              Credentials
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {credentials.map((item) => (
                <p key={item} style={{ fontSize: '15px', color: '#1e293b' }}>
                  <span style={{ color: '#2E86C1', fontWeight: 700, marginRight: '0.5rem' }}>&#10003;</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
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
          }}>
            Ready to Work With Us?
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
