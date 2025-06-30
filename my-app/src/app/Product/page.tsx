// src/app/products/page.tsx
import { Metadata } from "next";
import ProductsList from "./Productlist";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products – JB's Candy",
  description: "Browse all of our delicious Indonesian dishes",
};

export default function ProductsPage() {
return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsList />
    </Suspense>
  );
}
