import Link from 'next/link';

export const metadata = {
  title: 'About Clearwater Plumbing | 12+ Years Experience',
  description: 'Learn about Clearwater Plumbing. Licensed, insured, bonded. Serving the Lower Mainland since 2012.',
};

const differences = [
  { title: 'Licensed & Insured', text: 'We carry full liability insurance and are bonded. Your home and our work are fully protected.' },
  { title: 'No Hidden Fees', text: "We quote before we start. The price you're given is the price you pay, unless you approve changes." },
  { title: 'Only Qualified Plumbers', text: "Every job is handled by a licensed plumber. We don't send apprentices to do professional work." },
  { title: 'Same-Day Response', text: 'Emergency or routine, we respond within 2 hours during business hours. 24/7 availability for emergencies.' },
  { title: 'Guarantee Your Satisfaction', text: "If you're not happy with the work, we'll make it right. Guaranteed." },
  { title: 'Local & Accountable', text: 'We live in this community. We care about our reputation, and we want to be your plumber for life.' },
];

const stats = [
  { stat: '12+', label: 'Years in Business' },
  { stat: '20+', label: 'Years Experience' },
  { stat: '2000+', label: 'Happy Customers' },
];

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function About() {
  return (
    <div>
      <style>{`
        .differences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2.5rem;
          max-width: 52rem;
          margin: 0 auto;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 2rem;
          text-align: center;
        }
        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 1rem;
        }
      `}</style>

      {/* Hero */}
      <section className="section-navy" style={{ padding: '4rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            About Clearwater Plumbing
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#d1d5db', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            12+ years of professional plumbing service in the Lower Mainland. Licensed, insured, and bonded.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '1.5rem' }}>
              Our Story
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#374151' }}>
              <p>
                In 2012, I started Clearwater Plumbing with one simple idea: plumbing work should be honest, fast, and professional. No shortcuts. No surprises. No trying to upsell customers on work they don't need.
              </p>
              <p>
                After 20 years as a plumber working for other companies, I'd seen too much—rushed jobs, hidden costs, contractors who treated homes like just another number. I wanted to do it differently.
              </p>
              <p>
                Today, we've built a reputation for showing up on time, doing the work right, quoting fairly, and treating your home with respect. Repeat customers make up over 60% of our work, which tells you something about our service.
              </p>
              <p>
                We're still a small team of licensed plumbers—no apprentices doing unsupervised work. Every job gets a qualified professional. Every quote is honest. That's what drives us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section-navy" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
            Why We're Different
          </h2>
          <div className="differences-grid">
            {differences.map((item) => (
              <div key={item.title}>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem', color: '#1B3A5C' }}>
            Credentials
          </h2>
          <div style={{
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            padding: '2rem',
          }}>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label}>
                  <p style={{ fontSize: '1.875rem', fontWeight: 700, color: '#2E86C1', marginBottom: '0.5rem' }}>{item.stat}</p>
                  <p style={{ fontWeight: 600, color: '#1B3A5C' }}>{item.label}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
              <p style={{ fontWeight: 700, color: '#1B3A5C', marginBottom: '0.75rem' }}>Licensed #L12345</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                Fully insured and bonded. All work meets Building Code standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-navy" style={{ padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '3rem' }}>
            Service Area
          </h2>
          <div style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem' }}>
              We serve the Lower Mainland from Port Moody to Langley, and north to Whistler. Our main service areas include:
            </p>
            <div className="areas-grid">
              {serviceAreas.map((area) => (
                <p key={area} style={{ color: '#d1d5db', fontSize: '0.875rem' }}>✓ {area}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '1.5rem' }}>
            Ready to Work With Us?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem' }}>
            Get a free quote on any plumbing work.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
