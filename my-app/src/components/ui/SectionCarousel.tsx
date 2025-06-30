"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "./product-card";
import { useCart } from "@/context/Cartcontext";
import toast from "react-hot-toast";

interface SectionCarouselProps {
  title: string;
  items: Array<{
    imageSrc: string;
    title: string;
    subtitle?: string;
    rating?: number;
  }>;
}

export default function SectionCarousel({ title, items }: SectionCarouselProps) {
  const { addToCart } = useCart();

  return (
    <section className="px-6 md:px-16 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-800">
          show all <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-auto scroll-pl-6">
        {items.map((it, i) => (
          <Card
            key={i}
            imageSrc={it.imageSrc}
            title={it.title}
            subtitle={it.subtitle}
            rating={it.rating}
            onAddToCart={() => {
              addToCart({
                name: it.title,
                price: parseFloat((it.rating || 0).toFixed(2)), // adjust price source
                imageSrc: it.imageSrc,
              });
              toast.success(`${it.title} added to cart!`);
            }}
          />
        ))}
      </div>
    </section>
  );
}
