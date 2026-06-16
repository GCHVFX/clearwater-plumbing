import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

export const metadata = {
  title: 'Plumbing Services | Clearwater Plumbing',
  description: 'All plumbing services in Vancouver, Burnaby, Surrey, and Richmond. Emergency repairs, installations, maintenance, and more.',
};

const services = [
  {
    icon: '🚨',
    title: 'Emergency Repairs',
    description: 'Burst pipes, no hot water, leaks, and other urgent issues. Same-day response available.',
    priceRange: 'Starting at $200',
  },
  {
    icon: '🚰',
    title: 'Faucets & Fixtures',
    description: 'Install or replace kitchen faucets, bathroom fixtures, and outdoor taps.',
    priceRange: 'From $150-400',
  },
  {
    icon: '🚿',
    title: 'Drain Cleaning',
    description: 'Clogged drain? We use professional equipment to clear blockages fast and clean.',
    priceRange: 'From $175-350',
  },
  {
    icon: '💧',
    title: 'Water Heater Service',
    description: 'Installation of new units, repair of existing tanks, and tankless system maintenance.',
    priceRange: 'From $300-1500',
  },
  {
    icon: '🏠',
    title: 'Renovations',
    description: 'Bathroom and kitchen plumbing for renovations. We work with contractors and homeowners.',
    priceRange: 'Call for quote',
  },
  {
    icon: '🔧',
    title: 'Maintenance',
    description: 'Annual inspections and preventive maintenance to keep your system running smoothly.',
    priceRange: 'From $150-250',
  },
  {
    icon: '🧊',
    title: 'Frost-Free Sillcocks',
    description: 'Install outdoor taps that won\'t freeze in winter. Essential for Lower Mainland homes.',
    priceRange: 'From $120-200',
  },
  {
    icon: '📏',
    title: 'Shut-Off Valve Repair',
    description: 'Fix or replace main water shut-off valves and zone shut-offs.',
    priceRange: 'From $100-300',
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="section-navy py-16 md:py-24">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plumbing Services We Offer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From emergency repairs to full installations. Serving Vancouver, Burnaby, Surrey, Richmond, and the surrounding Lower Mainland.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                priceRange={service.priceRange}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-navy py-20 md:py-28">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {['Vancouver', 'Burnaby', 'Richmond', 'Surrey', 'Coquitlam', 'Delta', 'Langley', 'Maple Ridge'].map((area) => (
              <div key={area}>
                <p className="text-lg font-600">{area}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8 text-sm">
            Not listed? Call us—we may serve your area: (604) 555-0123
          </p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-light py-16 md:py-20">
        <div className="container-wide">
          <div className="bg-white border-l-4 border-blue rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-lg mb-3 text-navy">How We Price</h3>
            <p className="text-gray-700 mb-3 text-sm">
              All prices shown are estimates based on typical jobs. Every plumbing issue is different, so we quote individual jobs before starting work. No surprises.
            </p>
            <p className="text-gray-700 text-sm">
              Service call fee is $80, which is credited toward any work we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-blue py-20 md:py-28">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free quote on any of our services.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-blue font-bold text-lg">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
