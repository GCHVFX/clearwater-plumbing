import Link from 'next/link';

export const metadata = {
  title: 'About Clearwater Plumbing | 12+ Years Experience',
  description: 'Learn about Clearwater Plumbing. Licensed, insured, bonded. Serving the Lower Mainland since 2012.',
};

const stats = [
  { stat: '12+', label: 'Years in Business' },
  { stat: '20+', label: 'Years of Experience' },
  { stat: '2,000+', label: 'Jobs Completed' },
];

const differences = [
  { title: 'Licensed & Insured', text: 'We carry full liability insurance and are bonded. Every job is handled by a licensed plumber, not an apprentice doing unsupervised work.' },
  { title: 'No Hidden Fees', text: "We quote before we start. The price you're given is the price you pay. If anything changes mid-job, we ask first." },
  { title: 'Same-Day Response', text: 'We respond within 2 hours during business hours. For true emergencies, we pick up the phone at any hour.' },
  { title: 'Honest Advice', text: "We'll tell you what actually needs fixing. If it doesn't need replacing, we won't suggest it. Repeat business matters more to us than upselling." },
  { title: 'Clean Workmanship', text: 'We treat your home like our own. We clean up after every job and leave the space better than we found it.' },
  { title: 'Local & Accountable', text: 'We live in this community. Our reputation is built on word-of-mouth from neighbours who trust us with their homes.' },
];

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function About() {
  return (
    <div>
      <style>{`
        .about-diff-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .about-diff-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem 4rem; }
        }
        .about-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          text-align: center;
        }
        @media (max-width: 480px) {
          .about-stats-row { grid-template-columns: 1fr; gap: 2rem; text-align: left; }
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
            12+ years of professional plumbing in the Lower Mainland. Licensed, insured, and bonded.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '720px' }}>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '2rem',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Our Story
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '16px', color: '#1e293b', lineHeight: 1.75 }}>
              <p>
                In 2012, I started Clearwater Plumbing with one simple idea: plumbing work should be honest, fast, and professional. No shortcuts. No surprises. No trying to upsell customers on work they don't need.
              </p>
              <p>
                After 20 years as a plumber working for other companies, I'd seen too much — rushed jobs, hidden costs, contractors who treated homes like just another number. I wanted to do it differently.
              </p>
              <p>
                Today, we've built a reputation for showing up on time, doing the work right, quoting fairly, and treating your home with respect. Repeat customers make up over 60% of our work — that tells you something about how we operate.
              </p>
              <p>
                We're still a small team. Every job gets a qualified, licensed plumber. Every quote is honest. That's not a marketing line — it's just how we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '3.5rem 0' }}>
        <div className="container-wide">
          <div className="about-stats-row">
            {stats.map((item, i) => (
              <div key={item.stat} style={{
                paddingLeft: i > 0 ? '2rem' : '0',
                paddingRight: i < stats.length - 1 ? '2rem' : '0',
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {item.stat}
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
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
            Why We're Different
          </h2>
          <div className="about-diff-grid">
            {differences.map((item) => (
              <div key={item.title}>
                <h3 style={{ fontWeight: 800, fontSize: '1.0625rem', color: '#1B3A5C', marginBottom: '0.625rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>{item.text}</p>
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
              {[
                'Licensed Plumber — Licence #L12345',
                'Fully insured — $2M liability coverage',
                'Bonded for your protection',
                'All work meets BC Building Code standards',
                'Serving the Lower Mainland since 2012',
              ].map((item) => (
                <p key={item} style={{ fontSize: '15px', color: '#1e293b' }}>
                  <span style={{ color: '#2E86C1', fontWeight: 700, marginRight: '0.5rem' }}>✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '4rem 0' }}>
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
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '0.625rem' }}>
            {serviceAreas.join(' · ')}
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
            We serve the entire Lower Mainland. Call to confirm your area: (604) 555-0123
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
            Get a free quote on any plumbing work.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Request a Free Quote</Link>
            <a href="tel:6045550123" style={{ fontSize: '15px', color: '#64748b', textDecoration: 'none' }}>
              or call <span style={{ color: '#2E86C1', fontWeight: 600 }}>(604) 555-0123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
