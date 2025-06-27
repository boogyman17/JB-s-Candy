// src/app/products/page.tsx
import { Metadata } from "next";
import ProductsList from "./Productlist";

export const metadata: Metadata = {
  title: "Products – JB's Candy",
  description: "Browse all of our delicious Indonesian dishes",
};

export default function ProductsPage() {
  return <ProductsList/>;
}
