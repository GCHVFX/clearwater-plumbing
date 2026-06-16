import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery | Clearwater Plumbing',
  description: 'Gallery of completed plumbing projects. Emergency repairs, installations, renovations, and more.',
};

const galleryItems = [
  { id: 1, title: 'Kitchen Renovation', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop' },
  { id: 2, title: 'Bathroom Upgrade', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop' },
  { id: 3, title: 'Emergency Pipe Repair', image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=600&h=500&fit=crop' },
  { id: 4, title: 'Water Heater Installation', image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=600&h=500&fit=crop' },
  { id: 5, title: 'Drain Cleaning', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop' },
  { id: 6, title: 'Fixture Installation', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop' },
  { id: 7, title: 'Leak Repair', image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=600&h=500&fit=crop' },
  { id: 8, title: 'Sump Pump Install', image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=600&h=500&fit=crop' },
  { id: 9, title: 'Frost-Free Sillcock', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop' },
  { id: 10, title: 'Toilet Replacement', image: 'https://images.unsplash.com/photo-1565103668306-00d82f3cc069?w=600&h=500&fit=crop' },
  { id: 11, title: 'Gas Line Service', image: 'https://images.unsplash.com/photo-1549887534-7f1e1e6d6d0f?w=600&h=500&fit=crop' },
  { id: 12, title: 'Backflow Prevention', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=500&fit=crop' },
];

export default function Gallery() {
  return (
    <div>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr 1fr 1fr; }
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
            Our Work
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', lineHeight: 1.65 }}>
            A selection of completed plumbing projects — from emergency repairs to full installations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ backgroundColor: '#F0F4F8', padding: '5rem 0' }}>
        <div className="container-wide">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 33vw"
                  />
                </div>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b', marginTop: '0.75rem' }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B3A5C', borderLeft: '6px solid #2E86C1', padding: '4rem 0' }}>
        <div className="container-wide">
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}>
            Ready to Improve Your Home?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.68)', marginBottom: '2rem' }}>
            Get a free quote on any plumbing work.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <a href="tel:6045550123" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              or call <span style={{ color: '#ffffff', fontWeight: 600 }}>(604) 555-0123</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
