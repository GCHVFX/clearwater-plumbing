interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '2rem',
      boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    }}>
      <div style={{ marginBottom: '1rem' }}>
        {[...Array(rating)].map((_, i) => (
          <span key={i} style={{ color: '#FDB022', fontSize: '1rem', letterSpacing: '1px' }}>★</span>
        ))}
      </div>
      <p style={{
        color: '#1e293b',
        fontSize: '0.9375rem',
        lineHeight: 1.7,
        fontStyle: 'italic',
        marginBottom: '1.25rem',
      }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: 500 }}>
        &mdash; {author}
      </p>
    </div>
  );
}
