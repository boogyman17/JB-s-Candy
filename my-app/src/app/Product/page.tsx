import { Metadata } from "next";
import Card from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products – JB's Candy",
  description: "Browse all of our delicious Indonesian dishes",
};

interface Product {
  name: string;
  imageSrc: string;
  price: number;
}

const products: Product[] = [
  { name: "Nasi Goreng",       imageSrc: "/images/NasiGoreng.jpg",  price: 5.99 },
  { name: "Rendang",           imageSrc: "/images/Rendang.jpg",      price: 8.99 },
  { name: "Satay",             imageSrc: "/images/Satay.jpg",        price: 6.49 },
  { name: "Gado-Gado",         imageSrc: "/images/GadoGado.jpg",    price: 7.50 },
  { name: "Bakso",             imageSrc: "/images/Bakso.jpg",        price: 4.99 },
  { name: "Soto Ayam",         imageSrc: "/images/SotoAyam.jpg",    price: 5.49 },
  { name: "Mie Goreng",        imageSrc: "/images/MieGoreng.jpg",   price: 5.99 },
  { name: "Ayam Penyet",       imageSrc: "/images/ayam-penyet.jpg",  price: 7.25 },
  { name: "Nasi Uduk",         imageSrc: "/images/NasiUduk.jpg",    price: 6.75 },
  { name: "Tempe Mendoan",     imageSrc: "/images/TempeMendoan.jpg", price: 3.99 },
  { name: "Es Campur",         imageSrc: "/images/EsCampur.jpg",    price: 2.50 },
  { name: "Indomie Goreng",    imageSrc: "/images/Indomie.jpg",      price: 1.99 },
];

export default function ProductsPage() {
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
          />
        ))}
      </div>
    </main>
  );
}
