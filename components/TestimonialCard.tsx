interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

export default function TestimonialCard({ quote, author, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
      <p className="text-gray-700 text-sm mb-4 italic">"{quote}"</p>
      <p className="font-600 text-dark text-sm">— {author}</p>
    </div>
  );
}
