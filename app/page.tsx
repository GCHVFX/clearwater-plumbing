import Link from 'next/link';

const trustPoints = [
  {
    title: 'Upfront Estimates',
    desc: 'Know what to expect before work begins.',
    icon: '📋',
  },
  {
    title: 'Real People',
    desc: 'Talk directly with someone who understands the job.',
    icon: '👤',
  },
  {
    title: 'Quality Work',
    desc: 'Work completed properly with attention to detail.',
    icon: '✅',
  },
];

const howItWorks = [
  { step: '01', title: 'Tell Us What’s Happening', desc: 'Select from common plumbing issues.', icon: '💬' },
  { step: '02', title: 'Upload Photos', desc: 'Help us understand the problem before we arrive.', icon: '📷' },
  { step: '03', title: 'We Review the Request', desc: 'A real person reviews everything you send.', icon: '🔍' },
  { step: '04', title: 'Receive Your Estimate', desc: 'We contact you with pricing before scheduling work.', icon: '📨' },
];

const serviceCards = [
  { title: 'Leaks', desc: 'Dripping taps, pipe leaks, water stains on the ceiling.', icon: '💧', href: '/contact' },
  { title: 'Drain Cleaning', desc: 'Slow drains, clogs, or backups in sinks and tubs.', icon: '🚿', href: '/contact' },
  { title: 'Water Heaters', desc: 'No hot water, strange noises, or visible leaks.', icon: '🔥', href: '/contact' },
  { title: 'Toilets', desc: 'Running toilets, weak flush, leaks at the base.', icon: '🚽', href: '/contact' },
  { title: 'Renovation Plumbing', desc: 'Rough-in and finish work for kitchen or bath renos.', icon: '🏠', href: '/contact' },
  { title: 'Emergency Plumbing', desc: 'Burst pipes, flooding, or no water at all.', icon: '🚨', href: '/contact' },
];

const recentProjects = [
  { title: 'Kitchen Faucet Replacement', location: 'Burnaby', type: 'Faucets & Fixtures' },
  { title: 'Tankless Water Heater Install', location: 'Vancouver', type: 'Water Heater' },
  { title: 'Emergency Pipe Repair', location: 'Surrey', type: 'Emergency' },
  { title: 'Bathroom Renovation Plumbing', location: 'Richmond', type: 'Renovation' },
];

export default function Home() {
  return (
    <div>
      <style>{`
        .hero-h1 { font-size: clamp(32px, 5.5vw, 60px); }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }

        .trust-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .trust-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .hiw-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .hiw-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .service-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 600px) {
          .service-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .service-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 600px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .projects-grid { grid-template-columns: repeat(4, 1fr); }
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

        .service-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }
        .service-card-link:hover .service-card-inner {
          border-color: #2E86C1;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
      `}</style>

      {/* Hero */}
      <section style={{
        backgroundColor: '#1B3A5C',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '50%',
          background: 'linear-gradient(135deg, rgba(46,134,193,0.15) 0%, rgba(27,58,92,0) 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <p style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#2E86C1',
            marginBottom: '1rem',
          }}>
            Lower Mainland Plumbing
          </p>
          <h1 className="hero-h1" style={{
            fontWeight: 900,
            lineHeight: 1.08,
            color: '#ffffff',
            marginBottom: '1.25rem',
            maxWidth: '700px',
            letterSpacing: '-0.02em',
          }}>
            Need a plumber? Show us the problem.
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.65,
            maxWidth: '540px',
            marginBottom: '2.5rem',
          }}>
            Upload a few photos and tell us what&apos;s going on. We&apos;ll review everything and send a proper estimate before scheduling any work.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>
              Get a Quote
            </Link>
            <a href="tel:6045550123" className="btn-secondary" style={{ fontSize: '16px', padding: '15px 31px' }}>
              Call (604) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Why Homeowners Choose Clearwater */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Why Homeowners Choose Clearwater
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '480px', margin: '0 auto' }}>
              We keep it simple. Honest estimates, real communication, quality work.
            </p>
          </div>
          <div className="trust-grid">
            {trustPoints.map((item) => (
              <div key={item.title} style={{
                textAlign: 'center',
                padding: '2.5rem 2rem',
                backgroundColor: '#F0F4F8',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.625rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              How It Works
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              From request to estimate in four simple steps.
            </p>
          </div>
          <div className="hiw-grid">
            {howItWorks.map((item, i) => (
              <div key={item.step} style={{
                textAlign: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#1B3A5C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  fontSize: '1.5rem',
                }}>
                  {item.icon}
                </div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#2E86C1',
                  letterSpacing: '0.08em',
                  marginBottom: '0.375rem',
                }}>
                  STEP {item.step}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
                {i < howItWorks.length - 1 && (
                  <div style={{
                    display: 'none',
                    position: 'absolute',
                    top: '32px',
                    right: '-1rem',
                    width: '2rem',
                    height: '2px',
                    backgroundColor: '#cbd5e1',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Do You Need Help With? */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              What Do You Need Help With?
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              Select a problem and we&apos;ll guide you through requesting a quote.
            </p>
          </div>
          <div className="service-grid">
            {serviceCards.map((card) => (
              <Link key={card.title} href={card.href} className="service-card-link">
                <div className="service-card-inner" style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '2px solid #e2e8f0',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.2s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1B3A5C', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, flexGrow: 1 }}>
                    {card.desc}
                  </p>
                  <p style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 600, marginTop: '1rem' }}>
                    Get a Quote &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 900,
              color: '#1B3A5C',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}>
              Recent Work
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              A few examples of projects we&apos;ve completed recently.
            </p>
          </div>
          <div className="projects-grid">
            {recentProjects.map((project) => (
              <div key={project.title} style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
                <div style={{
                  height: '160px',
                  backgroundColor: '#1B3A5C',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(46,134,193,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" fill="none" stroke="rgba(255,255,255,0.6)" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
                    </svg>
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.375rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b' }}>
                    {project.location} &middot; {project.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/gallery" style={{ fontSize: '15px', color: '#2E86C1', fontWeight: 600 }}>
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '5rem 0' }}>
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
                Ready to get started?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, maxWidth: '480px' }}>
                Show us the problem and we&apos;ll send you an estimate. No obligations, no surprises.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary" style={{ fontSize: '15px', whiteSpace: 'nowrap', padding: '16px 32px' }}>
                Get a Quote
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
