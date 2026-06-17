import Link from 'next/link';
import HeroQuoteStart from '@/components/HeroQuoteStart';
import Icon from '@/components/Icon';

const howItWorks = [
  { step: '1', title: 'Select the issue' },
  { step: '2', title: 'Upload photos' },
  { step: '3', title: 'We review it' },
  { step: '4', title: 'Get your estimate' },
];

const serviceExamples = [
  { title: 'Faucet & Fixture Installs', type: 'Faucets & Fixtures', desc: 'Kitchen and bathroom faucet replacements, new fixture installs, and upgrades.' },
  { title: 'Water Heater Service', type: 'Water Heater', desc: 'Tank and tankless water heater installs, repairs, and maintenance.' },
  { title: '24/7 Emergency Response', type: 'Emergency', desc: 'Burst pipes, flooding, and gas leaks handled around the clock.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero — split: headline left, quote start right */}
      <section style={{
        backgroundColor: '#1B3A5C',
        padding: '4rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,134,193,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,134,193,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container-wide" style={{ position: 'relative' }}>
          <div className="hero-layout">
            <div>
              <p style={{
                fontSize: '14px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '1.125rem',
              }}>
                Clearwater Plumbing
              </p>
              <h1 className="hero-h1" style={{
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '0',
              }}>
                Need a plumber?<br />Show us the problem.
              </h1>
              <p style={{
                fontSize: '1.0625rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                maxWidth: '420px',
                marginBottom: '1.5rem',
              }}>
                Upload photos and describe what&apos;s going on. We review everything and send an estimate before scheduling any work.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
                maxWidth: '400px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #2E86C1',
                }}>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                    Upfront estimates &middot; Real people &middot; Quality work
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', paddingLeft: '1rem' }}>
                  Serving Vancouver, Burnaby, Surrey &amp; the Lower Mainland
                </p>
              </div>
            </div>

            <div>
              <HeroQuoteStart />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section style={{
        backgroundColor: '#0f2b44',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.25rem 0',
      }}>
        <div className="container-wide">
          <div className="emergency-inner">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239,68,68,0.15)',
                flexShrink: 0,
                color: '#f87171',
                marginTop: '1px',
              }}>
                <Icon name="alert-triangle" size={18} />
              </span>
              <div>
                <p style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                  Plumbing Emergency?
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  Burst pipes, flooding, gas leaks, or no water? Call now.
                </p>
              </div>
            </div>
            <a href="tel:6045550123" className="emergency-phone" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '12px 24px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              fontSize: '17px',
              fontWeight: 800,
              color: '#ffffff',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}>
              <Icon name="phone" size={18} />
              (604) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-wide">
          <p style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#64748b',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>
            How It Works
          </p>
          <div className="hiw-grid">
            {howItWorks.map((item, i) => (
              <div key={item.step} style={{
                textAlign: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#1B3A5C',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 800,
                  margin: '0 auto 0.75rem',
                }}>
                  {item.step}
                </div>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>{item.title}</p>
                {i < howItWorks.length - 1 && (
                  <div className="hiw-connector" style={{
                    position: 'absolute',
                    top: '22px',
                    left: 'calc(50% + 30px)',
                    width: 'calc(100% - 60px)',
                    height: '2px',
                    backgroundColor: '#e2e8f0',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service problems — asymmetric grid, not uniform cards */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#64748b',
              marginBottom: '0.5rem',
            }}>
              Common Problems
            </p>
            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              fontWeight: 900,
              color: '#1B3A5C',
              lineHeight: 1.1,
              letterSpacing: '0',
            }}>
              What do you need fixed?
            </h2>
          </div>

          <div className="services-feature" style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            {[
              { icon: 'droplet', title: 'Leaks', desc: 'Dripping taps, pipe leaks, water stains on walls or ceilings.', service: 'leak' },
              { icon: 'drain', title: 'Drains', desc: 'Slow drains, clogs, or backups in sinks and tubs.', service: 'drain' },
              { icon: 'flame', title: 'Water Heaters', desc: 'No hot water, strange noises, or visible leaks from the unit.', service: 'water-heater' },
              { icon: 'toilet', title: 'Toilets', desc: 'Running water, weak flush, or leaks at the base.', service: 'toilet' },
              { icon: 'house', title: 'Renovations', desc: 'Rough-in and finish plumbing for kitchen or bathroom renos.', service: 'renovation' },
              { icon: 'wrench', title: 'Faucets & Fixtures', desc: 'Install or replace kitchen and bathroom fixtures.', service: 'faucet' },
            ].map((s, i) => (
              <Link
                key={s.title}
                href={`/contact?service=${s.service}`}
                className="service-row-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.5rem',
                  borderBottom: i < 5 ? '1px solid #f0f0f0' : 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background-color 0.15s ease',
                }}
              >
                <span style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: '#eff8ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#2E86C1',
                }}>
                  <Icon name={s.icon} size={22} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#1B3A5C', display: 'block' }}>{s.title}</span>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>{s.desc}</span>
                </div>
                <Icon name="arrow-right" size={18} color="#2E86C1" />
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '1rem' }}>
            <Link href="/services" style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 600 }}>
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust — horizontal, not cards */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '3.5rem 0' }}>
        <div className="container-wide">
          <div className="trust-row">
            {[
              { title: 'Upfront Estimates', desc: 'We quote before we start. The price you receive is the price you pay.', icon: 'file-text' },
              { title: 'Real People', desc: 'Talk directly with the person doing the work. No call centres.', icon: 'user' },
              { title: 'Quality Work', desc: 'Qualified plumber on every job. We clean up when we&apos;re done.', icon: 'check-circle' },
            ].map((item) => (
              <div key={item.title} className="trust-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.625rem' }}>
                  <Icon name={item.icon} size={20} color="rgba(255,255,255,0.7)" />
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — service examples, not specific completed projects */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <p style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#64748b',
                marginBottom: '0.5rem',
              }}>
                What We Do
              </p>
              <h2 style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 900,
                color: '#1B3A5C',
                lineHeight: 1.1,
              }}>
                Services we offer
              </h2>
            </div>
            <Link href="/services" style={{ fontSize: '14px', color: '#2E86C1', fontWeight: 600 }}>
              View all &rarr;
            </Link>
          </div>
          <div className="projects-row">
            {serviceExamples.map((item) => (
              <div key={item.title} style={{
                borderLeft: '3px solid #2E86C1',
                paddingLeft: '1.25rem',
              }}>
                <span style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#2E86C1',
                  backgroundColor: '#eff8ff',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  marginBottom: '0.5rem',
                }}>
                  {item.type}
                </span>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.375rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ backgroundColor: '#0f2b44', padding: '2rem 0' }}>
        <div className="container-wide" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
            Serving Vancouver &middot; Burnaby &middot; Surrey &middot; Richmond &middot; Coquitlam &middot; Delta &middot; Langley &middot; Maple Ridge
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
            Credentials can be added here once verified.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        backgroundColor: '#1B3A5C',
        padding: '4rem 0',
      }}>
        <div className="container-wide">
          <div className="cta-bottom">
            <div>
              <h2 style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '0.5rem',
                lineHeight: 1.1,
                letterSpacing: '0',
              }}>
                Ready to get started?
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>
                Tell us the problem. We&apos;ll handle the rest.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px', whiteSpace: 'nowrap' }}>
                Start a Quote Request
              </Link>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                or call{' '}
                <a href="tel:6045550123" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600, textDecoration: 'none' }}>
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
