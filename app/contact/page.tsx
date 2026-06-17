import { Suspense } from 'react';
import GuidedQuoteFlow from '@/components/GuidedQuoteFlow';

export const metadata = {
  title: 'Get a Quote | Clearwater Plumbing',
  description: 'Request a plumbing quote in minutes. Upload photos, describe the problem, and receive an estimate.',
};

const serviceAreas = ['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'];

export default function Contact() {
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
            Get a Quote
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.65 }}>
            Tell us about the problem, upload a few photos, and we&apos;ll review everything and send you an estimate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '3rem 0 4rem' }}>
        <div className="container-wide">
          {/* Mobile emergency callout — hidden on desktop via components.css */}
          <div className="contact-mobile-emergency" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '1rem 1.25rem',
            backgroundColor: '#0f2b44',
            borderRadius: '10px',
            marginBottom: '1.5rem',
          }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>Need immediate help?</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>Available 24/7 for emergencies</p>
            </div>
            <a href="tel:6045550123" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '8px 16px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#ffffff',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}>
              Call Now
            </a>
          </div>

          <div className="contact-layout">
            {/* Guided Quote Flow */}
            <div>
              <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading...</div>}>
                <GuidedQuoteFlow />
              </Suspense>
            </div>

            {/* Sidebar */}
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
                  Prefer to Call?
                </p>
                <a href="tel:6045550123" style={{
                  display: 'block',
                  fontSize: '1.75rem',
                  fontWeight: 900,
                  color: '#1B3A5C',
                  textDecoration: 'none',
                  lineHeight: 1.1,
                  marginBottom: '0.625rem',
                }}>
                  (604) 555-0123
                </a>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>
                  Available 24/7 for emergencies.
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
                  <p><span style={{ fontWeight: 600, minWidth: '80px', display: 'inline-block' }}>Mon&ndash;Fri</span> 7am &ndash; 6pm</p>
                  <p><span style={{ fontWeight: 600, minWidth: '80px', display: 'inline-block' }}>Sat&ndash;Sun</span> 8am &ndash; 4pm</p>
                  <p style={{ color: '#2E86C1', fontWeight: 600, marginTop: '4px' }}>24/7 for emergencies</p>
                </div>
              </div>

              {/* What Happens Next */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid #e2e8f0',
              }}>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#1B3A5C', marginBottom: '1rem' }}>
                  What happens after you submit?
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'We review your photos and description',
                    'We prepare an estimate based on the job',
                    'We contact you to discuss and schedule',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: '#2E86C1',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}>
                        {i + 1}
                      </span>
                      <p style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
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
                <p style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.8 }}>
                  {serviceAreas.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
