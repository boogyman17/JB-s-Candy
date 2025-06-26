import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  rating?: number;
  badge?: React.ReactNode;
}

export default function Card({ imageSrc, title, subtitle, rating, badge }: CardProps) {
  return (
    <div className="w-64 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative h-40">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        {badge && <div className="absolute top-2 left-2">{badge}</div>}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        {rating !== undefined && (
          <p className="mt-2 text-sm text-yellow-500">
            {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
          </p>
        )}
      </div>
    </div>
  );
}
