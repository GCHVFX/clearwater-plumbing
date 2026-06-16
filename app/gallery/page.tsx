import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery | Clearwater Plumbing',
  description: 'Gallery of completed plumbing projects. Emergency repairs, installations, renovations, and more.',
};

const galleryItems = [
  { id: 1, title: 'Kitchen Renovation', description: 'Complete kitchen plumbing for renovation. New sink, faucet, and supply lines.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
  { id: 2, title: 'Bathroom Upgrade', description: 'New vanity, faucet, and drain installation in modern bathroom.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
  { id: 3, title: 'Emergency Pipe Repair', description: 'Burst pipe in basement replaced. Quick response, professional cleanup.', image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=500&h=500&fit=crop' },
  { id: 4, title: 'Water Heater Installation', description: 'Tank water heater replaced with high-efficiency unit.', image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=500&h=500&fit=crop' },
  { id: 5, title: 'Drain Cleaning', description: 'Main line clearing with professional camera inspection.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
  { id: 6, title: 'Fixture Installation', description: 'New showerhead and fixtures in master bathroom.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
  { id: 7, title: 'Leak Repair', description: 'Fixed slow leak under kitchen sink, replaced damaged cabinet.', image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=500&h=500&fit=crop' },
  { id: 8, title: 'Sump Pump Install', description: 'New basement sump pump system with discharge line.', image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=500&h=500&fit=crop' },
  { id: 9, title: 'Frost-Free Sillcock', description: 'Outdoor tap installation for winter use without freezing.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
  { id: 10, title: 'Toilet Replacement', description: 'Old toilet removed and new high-efficiency model installed.', image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=500&h=500&fit=crop' },
  { id: 11, title: 'Gas Line Service', description: 'Gas line check and safety inspection.', image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=500&h=500&fit=crop' },
  { id: 12, title: 'Backflow Prevention', description: 'Installed backflow preventer to protect home water supply.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop' },
];

export default function Gallery() {
  return (
    <div>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
      `}</style>

      {/* Hero */}
      <section className="section-navy" style={{ padding: '4rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
            Our Work
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#d1d5db', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Browse examples of plumbing projects we've completed. From emergency repairs to major installations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}>
                <div style={{ position: 'relative', width: '100%', height: '16rem', backgroundColor: '#e5e7eb' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: '#ffffff' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1B3A5C', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-blue" style={{ padding: '5rem 0' }}>
        <div className="container-wide" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Improve Your Home?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.88)', marginBottom: '2rem' }}>
            Get a free quote on any plumbing work.
          </p>
          <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#2E86C1', fontWeight: 700, fontSize: '1.125rem' }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
