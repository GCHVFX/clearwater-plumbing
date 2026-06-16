import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery | Clearwater Plumbing',
  description: 'Gallery of completed plumbing projects. Emergency repairs, installations, renovations, and more.',
};

const galleryItems = [
  {
    id: 1,
    title: 'Kitchen Renovation',
    description: 'Complete kitchen plumbing for renovation. New sink, faucet, and supply lines.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Bathroom Upgrade',
    description: 'New vanity, faucet, and drain installation in modern bathroom.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Emergency Pipe Repair',
    description: 'Burst pipe in basement replaced. Quick response, professional cleanup.',
    image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Water Heater Installation',
    description: 'Tank water heater replaced with high-efficiency unit.',
    image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'Drain Cleaning',
    description: 'Main line clearing with professional camera inspection.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Fixture Installation',
    description: 'New showerhead and fixtures in master bathroom.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
  },
  {
    id: 7,
    title: 'Leak Repair',
    description: 'Fixed slow leak under kitchen sink, replaced damaged cabinet.',
    image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=500&h=500&fit=crop',
  },
  {
    id: 8,
    title: 'Sump Pump Install',
    description: 'New basement sump pump system with discharge line.',
    image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=500&h=500&fit=crop',
  },
  {
    id: 9,
    title: 'Frost-Free Sillcock',
    description: 'Outdoor tap installation for winter use without freezing.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
  },
  {
    id: 10,
    title: 'Toilet Replacement',
    description: 'Old toilet removed and new high-efficiency model installed.',
    image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=500&h=500&fit=crop',
  },
  {
    id: 11,
    title: 'Gas Line Service',
    description: 'Gas line check and safety inspection.',
    image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=500&h=500&fit=crop',
  },
  {
    id: 12,
    title: 'Backflow Prevention',
    description: 'Installed backflow preventer to protect home water supply.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
  },
];

export default function Gallery() {
  return (
    <div>
      {/* Hero */}
      <section className="section-navy py-16 md:py-24">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Work
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse examples of plumbing projects we've completed. From emergency repairs to major installations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-light py-20 md:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-lg text-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-blue py-20 md:py-28">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Home?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free quote on any plumbing work.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-blue font-bold text-lg">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
