// src/app/products/ProductsList.tsx
"use client";

import Card from "@/components/ui/card";
import { useCart } from "@/context/Cartcontext";
import toast from "react-hot-toast";
import { products } from "@/data/product";

export default function ProductsList() {
  const { addToCart } = useCart();

  function handleAdd(prod: { name: string; price: number; imageSrc: string }) {
    addToCart({
      name: prod.name,
      price: prod.price,
      imageSrc: prod.imageSrc,
    });
    toast.success(`${prod.name} added to cart!`);
  }

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((prod) => (
          <Card
            key={prod.name}
            imageSrc={prod.imageSrc}
            title={prod.name}
            subtitle={`$${prod.price.toFixed(2)}`}
            onAddToCart={() => handleAdd(prod)}
          />
        ))}
      </div>
    </main>
  );
}
