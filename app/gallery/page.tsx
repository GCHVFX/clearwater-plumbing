import Link from 'next/link';

export const metadata = {
  title: 'Recent Work | Clearwater Plumbing',
  description: 'Examples of recent plumbing projects completed by Clearwater Plumbing in the Lower Mainland.',
};

const projects = [
  { title: 'Kitchen Faucet Replacement', location: 'Burnaby', type: 'Faucets & Fixtures', desc: 'Replaced a leaking kitchen faucet with a new pull-down model. Included supply line replacement.' },
  { title: 'Tankless Water Heater Install', location: 'Vancouver', type: 'Water Heater', desc: 'Upgraded from a 40-gallon tank to a tankless unit. Included gas line and venting work.' },
  { title: 'Emergency Pipe Repair', location: 'Surrey', type: 'Emergency', desc: 'Responded to a burst pipe in a finished basement. Repaired the pipe and dried the affected area.' },
  { title: 'Bathroom Renovation Plumbing', location: 'Richmond', type: 'Renovation', desc: 'Full plumbing rough-in for a main bathroom renovation. New shower valve, toilet, and vanity.' },
  { title: 'Main Drain Clearing', location: 'Coquitlam', type: 'Drain Cleaning', desc: 'Cleared a main sewer line blockage using professional-grade equipment. Camera inspection included.' },
  { title: 'Toilet Replacement', location: 'Delta', type: 'Toilets', desc: 'Replaced two toilets with high-efficiency models. Included wax rings and supply lines.' },
  { title: 'Outdoor Sillcock Install', location: 'Langley', type: 'Fixtures', desc: 'Installed two frost-free sillcocks to replace old outdoor taps that were freezing in winter.' },
  { title: 'Sump Pump Installation', location: 'Maple Ridge', type: 'Emergency', desc: 'Installed a sump pump in a basement that was experiencing seasonal water infiltration.' },
  { title: 'Water Heater Repair', location: 'Vancouver', type: 'Water Heater', desc: 'Diagnosed and repaired a faulty thermostat on a gas water heater. Extended the unit life by years.' },
  { title: 'Kitchen Sink Drain Repair', location: 'Burnaby', type: 'Drain Cleaning', desc: 'Replaced corroded drain pipes under a kitchen sink. Included new P-trap and tailpiece.' },
  { title: 'Basement Bathroom Rough-In', location: 'Surrey', type: 'Renovation', desc: 'Roughed in plumbing for a new basement bathroom. Included ejector pump for below-grade drainage.' },
  { title: 'Leak Detection & Repair', location: 'Richmond', type: 'Leaks', desc: 'Located a hidden leak behind a wall using pressure testing. Repaired and patched the drywall.' },
];

export default function Gallery() {
  return (
    <div>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr 1fr 1fr; }
        }
        .gallery-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .gallery-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
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
            Recent Work
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '520px', lineHeight: 1.65 }}>
            Examples of plumbing projects we&apos;ve completed recently across the Lower Mainland.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="gallery-grid">
            {projects.map((project) => (
              <div key={project.title} className="gallery-card">
                <div style={{
                  height: '140px',
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
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#2E86C1',
                      backgroundColor: '#eff8ff',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}>
                      {project.type}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#64748b',
                      backgroundColor: '#f1f5f9',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}>
                      {project.location}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B3A5C', padding: '4rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Have a similar project?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', marginBottom: '2rem' }}>
            Show us the problem and we&apos;ll send you an estimate.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Get a Quote</Link>
            <a href="tel:6045550123" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              or call <span style={{ color: '#ffffff', fontWeight: 600 }}>(604) 555-0123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
