import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-navy py-20 md:py-32">
        <div className="container-wide text-center">
          <div className="mb-6">
            <p className="text-blue font-600 text-sm tracking-wide uppercase">
              Licensed • Insured • Bonded
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Fast. Dependable.<br />Professional. Plumbing You Can Trust.
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Serving the Lower Mainland for 12+ years. Same-day response on emergencies.
          </p>
          <Link href="/contact" className="btn-primary bg-blue text-lg mb-8 inline-block">
            Get Your Free Quote
          </Link>
          <p className="text-sm text-gray-400">
            No hidden fees. Transparent pricing upfront.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What We Fix
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to full installations, we handle all plumbing needs in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ServiceCard
              icon="🚨"
              title="Emergency Repairs"
              description="Burst pipes, leaks, no hot water. We respond fast."
              priceRange="Starting at $200"
            />
            <ServiceCard
              icon="🚰"
              title="Faucet & Fixture"
              description="Install or replace faucets, showerheads, and fixtures."
              priceRange="From $150-400"
            />
            <ServiceCard
              icon="🚿"
              title="Drain Cleaning"
              description="Clear clogs and blockages. Fast and clean."
              priceRange="From $175-350"
            />
            <ServiceCard
              icon="💧"
              title="Water Heater"
              description="Installation, repair, and maintenance."
              priceRange="From $300-1500"
            />
            <ServiceCard
              icon="🔧"
              title="Maintenance"
              description="Keep your plumbing running smoothly."
              priceRange="Call for quote"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="text-blue font-600 text-lg hover:text-navy transition-colors">
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-navy py-20 md:py-28">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Clearwater
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⏱</div>
              <h3 className="font-bold text-lg mb-2">Same-Day Response</h3>
              <p className="text-sm text-gray-300">
                We respond to calls within 2 hours during business hours.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-sm text-gray-300">
                No surprises. We quote before we start work.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛡</div>
              <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-300">
                Full coverage. Your home is protected.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="font-bold text-lg mb-2">24/7 Emergencies</h3>
              <p className="text-sm text-gray-300">
                Burst pipe at midnight? We're available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Homeowners Say
            </h2>
            <p className="text-gray-600">
              Real feedback from people we've helped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              rating={5}
              quote="Called at 11 PM with a burst pipe. They came in 45 minutes and fixed it. Saved my basement. Highly recommend."
              author="Sarah M., Burnaby"
            />
            <TestimonialCard
              rating={5}
              quote="Honest guys. They quoted $1200 but fixed it for $800. No upselling. That's rare. Using them again."
              author="Mike T., Surrey"
            />
            <TestimonialCard
              rating={5}
              quote="Installed a new water heater. Clean, professional, on time. Price was exactly what they quoted."
              author="Jennifer K., Vancouver"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-blue py-20 md:py-28">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix That Plumbing Issue?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote. We'll review your job and call you back within 2 hours.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-blue font-bold text-lg hover:bg-gray-100">
            Request a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
