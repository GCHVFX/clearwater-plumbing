import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contact & Free Quote | Clearwater Plumbing',
  description: 'Get a free plumbing quote or book a service call. Fast response guaranteed.',
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="section-navy py-16 md:py-24">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Need a plumber? Fill out the form below for a free quote, or call us directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form - Takes 2 columns on desktop */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-navy mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-600 mb-6">
                  Tell us about the work you need done, and we'll get back to you within 2 hours with a quote.
                </p>
                <QuoteForm />
              </div>
            </div>

            {/* Contact Info - 1 column on desktop */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-navy mb-4">
                  Call Us Directly
                </h3>
                <a
                  href="tel:6045550123"
                  className="text-3xl font-bold text-blue hover:text-navy transition-colors"
                >
                  (604) 555-0123
                </a>
                <p className="text-gray-600 text-sm mt-4">
                  For emergencies, call anytime. For estimates, call during business hours.
                </p>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-navy mb-4">
                  Email Us
                </h3>
                <a
                  href="mailto:info@clearwaterplumbing.com"
                  className="text-blue hover:text-navy transition-colors font-600"
                >
                  info@clearwaterplumbing.com
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-navy mb-4">
                  Hours
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-600">Mon-Fri:</span> 7am - 6pm</p>
                  <p><span className="font-600">Sat-Sun:</span> 8am - 4pm</p>
                  <p className="mt-2 text-blue font-600">
                    24/7 for emergencies
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="bg-blue/10 p-6 rounded-lg border border-blue/20">
                <p className="text-sm font-bold text-navy mb-2">
                  ✓ Licensed #L12345
                </p>
                <p className="text-sm font-bold text-navy mb-2">
                  ✓ Fully Insured
                </p>
                <p className="text-sm font-bold text-navy">
                  ✓ Bonded
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-navy py-16 md:py-20">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">
            Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center text-sm">
            {['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'].map((area) => (
              <p key={area} className="text-gray-300">
                ✓ {area}
              </p>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Not listed? Call us—we may still serve your area.
          </p>
        </div>
      </section>

      {/* Calendly Embed - Placeholder */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-2 text-center">
              Book a Service Call
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Prefer to schedule online? Use the calendar below to book a time that works for you.
            </p>

            {/* Calendly Placeholder */}
            <div className="bg-white border-2 border-dashed border-blue rounded-lg p-12 text-center">
              <p className="text-gray-600 mb-4">
                Calendly calendar embed will appear here.
              </p>
              <p className="text-sm text-gray-500">
                Once you provide the Calendly embed code, this section will display your booking calendar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
