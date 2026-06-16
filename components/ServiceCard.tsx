import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  priceRange: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  priceRange,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-blue font-600 text-sm mb-4">{priceRange}</p>
      <Link href="/contact" className="text-blue text-sm font-600 hover:text-navy transition-colors">
        Get a Quote →
      </Link>
    </div>
  );
}
