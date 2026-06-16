import Link from 'next/link';

export const metadata = {
  title: 'About Clearwater Plumbing | 12+ Years Experience',
  description: 'Learn about Clearwater Plumbing. Licensed, insured, bonded. Serving the Lower Mainland since 2012.',
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="section-navy py-16 md:py-24">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Clearwater Plumbing
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            12+ years of professional plumbing service in the Lower Mainland. Licensed, insured, and bonded.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
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
      <section className="section-navy py-20 md:py-28">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why We're Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div>
              <h3 className="font-bold text-lg mb-3">Licensed & Insured</h3>
              <p className="text-gray-300 text-sm">
                We carry full liability insurance and are bonded. Your home and our work are fully protected.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">No Hidden Fees</h3>
              <p className="text-gray-300 text-sm">
                We quote before we start. The price you're given is the price you pay, unless you approve changes.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Only Qualified Plumbers</h3>
              <p className="text-gray-300 text-sm">
                Every job is handled by a licensed plumber. We don't send apprentices to do professional work.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Same-Day Response</h3>
              <p className="text-gray-300 text-sm">
                Emergency or routine, we respond within 2 hours during business hours. 24/7 availability for emergencies.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Guarantee Your Satisfaction</h3>
              <p className="text-gray-300 text-sm">
                If you're not happy with the work, we'll make it right. Guaranteed.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Local & Accountable</h3>
              <p className="text-gray-300 text-sm">
                We live in this community. We care about our reputation, and we want to be your plumber for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">
            Credentials
          </h2>
          <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue mb-2">12+</p>
                <p className="font-600 text-navy">Years in Business</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue mb-2">20+</p>
                <p className="font-600 text-navy">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue mb-2">2000+</p>
                <p className="font-600 text-navy">Happy Customers</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="font-bold text-navy mb-3">Licensed #L12345</p>
              <p className="text-sm text-gray-600">
                Fully insured and bonded. All work meets Building Code standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-navy py-20 md:py-28">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-12">
            Service Area
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              We serve the Lower Mainland from Port Moody to Langley, and north to Whistler. Our main service areas include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'].map((area) => (
                <p key={area} className="text-gray-300">✓ {area}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free quote on any plumbing work.
          </p>
          <Link href="/contact" className="btn-primary bg-blue font-bold text-lg">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
