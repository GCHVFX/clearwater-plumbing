import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  priceRange: string;
  icon: string;
}

export default function ServiceCard({ title, description, priceRange, icon }: ServiceCardProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1B3A5C', marginBottom: '0.5rem' }}>
        {title}
      </h3>
      <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '1rem', flexGrow: 1 }}>
        {description}
      </p>
      <p style={{ color: '#2E86C1', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
        {priceRange}
      </p>
      <Link
        href="/contact"
        className="hover-navy"
        style={{ color: '#2E86C1', fontSize: '0.875rem', fontWeight: 600 }}
      >
        Get a Quote →
      </Link>
    </div>
  );
}
