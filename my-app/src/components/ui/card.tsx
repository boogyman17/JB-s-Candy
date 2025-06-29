// src/components/ui/Card.tsx
"use client";

import Image from "next/image";
import { ReactNode } from "react";

export interface CardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  rating?: number;
  badge?: ReactNode;
  onAddToCart?: () => void;       // ← purchase callback
  addButtonLabel?: string;
}

export default function Card({
  imageSrc,
  title,
  subtitle,
  rating,
  badge,
  onAddToCart,
  addButtonLabel = "Add to cart",
}: CardProps) {
  return (
    <div className="w-64 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md flex flex-col">
      <div className="relative h-40">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        {badge && <div className="absolute top-2 left-2">{badge}</div>}
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        {rating !== undefined && (
          <p className="mt-2 text-sm text-yellow-500">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </p>
        )}
      </div>
      {onAddToCart && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onAddToCart}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            {addButtonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
