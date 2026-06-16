import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';

const whyItems = [
  { icon: '⏱', title: 'Same-Day Response', text: 'We respond to calls within 2 hours during business hours.' },
  { icon: '💰', title: 'Transparent Pricing', text: 'No surprises. We quote before we start work.' },
  { icon: '🛡', title: 'Licensed & Insured', text: 'Full coverage. Your home is protected.' },
  { icon: '🕐', title: '24/7 Emergencies', text: "Burst pipe at midnight? We're available." },
];

export default function Home() {
  return (
    <div>
      <style>{`
        .hero-section { padding: 5rem 0; }
        .hero-h1 { font-size: 2.5rem; }
        @media (min-width: 768px) {
          .hero-section { padding: 8rem 0; }
          .hero-h1 { font-size: 3.25rem; }
        }
        .home-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
        }
        .home-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem;
        }
        .home-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .see-services-link:hover { color: #1B3A5C; }
      `}</style>

      {/* Hero */}
      <section className="section-navy hero-section">
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <p style={{ color: '#2E86C1', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Licensed • Insured • Bonded
          </p>
          <h1 className="hero-h1" style={{ fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
            Fast. Dependable.<br />Professional. Plumbing You Can Trust.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Serving the Lower Mainland for 12+ years. Same-day response on emergencies.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '1.125rem' }}>
            Get Your Free Quote
          </Link>
          <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '1.25rem' }}>
            No hidden fees. Transparent pricing upfront.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '1rem' }}>
              What We Fix
            </h2>
            <p style={{ color: '#4b5563', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
              From emergency repairs to full installations, we handle all plumbing needs in your home.
            </p>
          </div>

          <div className="home-services-grid">
            <ServiceCard icon="🚨" title="Emergency Repairs" description="Burst pipes, leaks, no hot water. We respond fast." priceRange="Starting at $200" />
            <ServiceCard icon="🚰" title="Faucet & Fixture" description="Install or replace faucets, showerheads, and fixtures." priceRange="From $150-400" />
            <ServiceCard icon="🚿" title="Drain Cleaning" description="Clear clogs and blockages. Fast and clean." priceRange="From $175-350" />
            <ServiceCard icon="💧" title="Water Heater" description="Installation, repair, and maintenance." priceRange="From $300-1500" />
            <ServiceCard icon="🔧" title="Maintenance" description="Keep your plumbing running smoothly." priceRange="Call for quote" />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="see-services-link" style={{ color: '#2E86C1', fontWeight: 600, fontSize: '1.125rem' }}>
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-navy" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '4rem' }}>
            Why Choose Clearwater
          </h2>
          <div className="home-why-grid">
            {whyItems.map((item) => (
              <div key={item.title} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '1rem' }}>
              What Homeowners Say
            </h2>
            <p style={{ color: '#4b5563' }}>Real feedback from people we've helped.</p>
          </div>
          <div className="home-testimonials-grid">
            <TestimonialCard rating={5} quote="Called at 11 PM with a burst pipe. They came in 45 minutes and fixed it. Saved my basement. Highly recommend." author="Sarah M., Burnaby" />
            <TestimonialCard rating={5} quote="Honest guys. They quoted $1200 but fixed it for $800. No upselling. That's rare. Using them again." author="Mike T., Surrey" />
            <TestimonialCard rating={5} quote="Installed a new water heater. Clean, professional, on time. Price was exactly what they quoted." author="Jennifer K., Vancouver" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-blue" style={{ padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Fix That Plumbing Issue?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.88)', marginBottom: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Get a free, no-obligation quote. We'll review your job and call you back within 2 hours.
          </p>
          <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#2E86C1', fontSize: '1.125rem' }}>
            Request a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
