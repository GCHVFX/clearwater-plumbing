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
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 2fr 1fr; }
        }
        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          max-width: 42rem;
          margin: 0 auto;
          text-align: center;
        }
      `}</style>

      {/* Hero */}
      <section className="section-navy" style={{ padding: '4rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#d1d5db', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Need a plumber? Fill out the form below for a free quote, or call us directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="contact-grid">
            {/* Form — 2 columns on desktop */}
            <div>
              <div style={{
                backgroundColor: '#ffffff',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>
                  Get Your Free Quote
                </h2>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                  Tell us about the work you need done, and we'll get back to you within 2 hours with a quote.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Contact Info — 1 column on desktop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1B3A5C', marginBottom: '1rem' }}>
                  Call Us Directly
                </h3>
                <a
                  href="tel:6045550123"
                  style={{ fontSize: '1.875rem', fontWeight: 700, color: '#2E86C1' }}
                >
                  (604) 555-0123
                </a>
                <p style={{ color: '#4b5563', fontSize: '0.875rem', marginTop: '1rem' }}>
                  For emergencies, call anytime. For estimates, call during business hours.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1B3A5C', marginBottom: '1rem' }}>
                  Email Us
                </h3>
                <a
                  href="mailto:info@clearwaterplumbing.com"
                  style={{ color: '#2E86C1', fontWeight: 600 }}
                >
                  info@clearwaterplumbing.com
                </a>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1B3A5C', marginBottom: '1rem' }}>
                  Hours
                </h3>
                <div style={{ fontSize: '0.875rem', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <p><span style={{ fontWeight: 600 }}>Mon-Fri:</span> 7am - 6pm</p>
                  <p><span style={{ fontWeight: 600 }}>Sat-Sun:</span> 8am - 4pm</p>
                  <p style={{ marginTop: '0.5rem', color: '#2E86C1', fontWeight: 600 }}>24/7 for emergencies</p>
                </div>
              </div>

              <div style={{
                backgroundColor: 'rgba(46, 134, 193, 0.08)',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(46, 134, 193, 0.2)',
              }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>✓ Licensed #L12345</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>✓ Fully Insured</p>
                <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1B3A5C' }}>✓ Bonded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-navy" style={{ padding: '4rem 0' }}>
        <div className="container-wide">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem' }}>
            Service Areas
          </h2>
          <div className="areas-grid">
            {serviceAreas.map((area) => (
              <p key={area} style={{ color: '#d1d5db', fontSize: '0.875rem' }}>✓ {area}</p>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem', marginTop: '1.5rem' }}>
            Not listed? Call us—we may still serve your area.
          </p>
        </div>
      </section>

      {/* Calendly Placeholder */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem', textAlign: 'center' }}>
              Book a Service Call
            </h2>
            <p style={{ color: '#4b5563', textAlign: 'center', marginBottom: '2rem' }}>
              Prefer to schedule online? Use the calendar below to book a time that works for you.
            </p>
            <div style={{
              backgroundColor: '#ffffff',
              border: '2px dashed #2E86C1',
              borderRadius: '0.5rem',
              padding: '3rem',
              textAlign: 'center',
            }}>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
                Calendly calendar embed will appear here.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Once you provide the Calendly embed code, this section will display your booking calendar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
