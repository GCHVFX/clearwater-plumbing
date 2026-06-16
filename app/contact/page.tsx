import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Contact & Free Quote | Clearwater Plumbing',
  description: 'Get a free plumbing quote or book a service call. Fast response guaranteed.',
};

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function Contact() {
  return (
    <div>
      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .contact-layout { grid-template-columns: 2fr 1fr; gap: 5rem; }
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
            Get in Touch
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', lineHeight: 1.65 }}>
            Need a plumber? Fill out the form for a free quote, or call us directly. We respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="contact-layout">
            {/* Quote Form */}
            <div>
              <div style={{ backgroundColor: '#ffffff', padding: '2.5rem' }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: '#1B3A5C',
                  marginBottom: '0.5rem',
                  lineHeight: 1.1,
                }}>
                  Get Your Free Quote
                </h2>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '2rem', lineHeight: 1.65 }}>
                  Describe the job and we'll get back to you within 2 hours with pricing.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar — plain text, no card boxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Phone */}
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '0.625rem',
                }}>
                  Call Us Directly
                </p>
                <a href="tel:6045550123" style={{
                  display: 'block',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#1B3A5C',
                  textDecoration: 'none',
                  lineHeight: 1.1,
                  marginBottom: '0.625rem',
                }}>
                  (604) 555-0123
                </a>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>
                  Call anytime for emergencies. For estimates, call during business hours.
                </p>
              </div>

              {/* Email */}
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '0.625rem',
                }}>
                  Email
                </p>
                <a href="mailto:info@clearwaterplumbing.com" style={{
                  fontSize: '15px',
                  color: '#2E86C1',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}>
                  info@clearwaterplumbing.com
                </a>
              </div>

              {/* Hours */}
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                }}>
                  Hours
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '15px', color: '#1e293b' }}>
                  <p><span style={{ fontWeight: 600, minWidth: '80px', display: 'inline-block' }}>Mon–Fri</span> 7am – 6pm</p>
                  <p><span style={{ fontWeight: 600, minWidth: '80px', display: 'inline-block' }}>Sat–Sun</span> 8am – 4pm</p>
                  <p style={{ color: '#2E86C1', fontWeight: 600, marginTop: '4px' }}>24/7 for emergencies</p>
                </div>
              </div>

              {/* Service Areas */}
              <div>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {serviceAreas.map((area) => (
                    <p key={area} style={{ fontSize: '14px', color: '#1e293b' }}>
                      <span style={{ color: '#2E86C1', marginRight: '0.5rem', fontWeight: 700 }}>✓</span>{area}
                    </p>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div>
                <p style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                }}>
                  Credentials
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {['Licensed #L12345', 'Fully Insured', 'Bonded'].map((item) => (
                    <p key={item} style={{ fontSize: '14px', color: '#1e293b', fontWeight: 600 }}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas strip */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '2.5rem 0' }}>
        <div className="container-wide">
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
            Serving: {serviceAreas.join(' · ')}
          </p>
        </div>
      </section>

      {/* Online Booking Placeholder */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '480px' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
            }}>
              Book a Service Call
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '2rem', lineHeight: 1.65 }}>
              Prefer to schedule online? Online booking is coming soon.
            </p>
            <div style={{
              border: '2px dashed #cbd5e1',
              padding: '3rem 2rem',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '16px', color: '#64748b', fontWeight: 600 }}>Online booking coming soon</p>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '0.5rem' }}>
                In the meantime, call us at (604) 555-0123 or submit the form above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
