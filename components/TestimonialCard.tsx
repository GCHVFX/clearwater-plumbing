interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    }}>
      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
        {[...Array(rating)].map((_, i) => (
          <span key={i} style={{ color: '#f59e0b', fontSize: '1.25rem' }}>★</span>
        ))}
      </div>
      <p style={{ color: '#374151', fontSize: '0.875rem', marginBottom: '1rem', fontStyle: 'italic' }}>
        "{quote}"
      </p>
      <p style={{ fontWeight: 600, color: '#2C3E50', fontSize: '0.875rem' }}>— {author}</p>
    </div>
  );
}
