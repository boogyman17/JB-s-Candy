
export interface Product {
  name: string;
  imageSrc: string;
  price: number;
}

export const products: Product[] = [
  { name: "Nasi Goreng",    imageSrc: "/images/NasiGoreng.jpg",    price: 5.99 },
  { name: "Rendang",        imageSrc: "/images/Rendang.jpg",        price: 8.99 },
  { name: "Satay",          imageSrc: "/images/Sate.jpg",          price: 6.49 },
  { name: "Gado-Gado",      imageSrc: "/images/Gadogado.png",       price: 7.50 },
  { name: "Bakso",          imageSrc: "/images/Bakso.jpg",          price: 4.99 },
  { name: "Soto Ayam",      imageSrc: "/images/SotoAyam.jpg",       price: 5.49 },
  { name: "Mie Goreng",     imageSrc: "/images/Miegoreng.jpg",      price: 5.99 },
  { name: "Ayam Penyet",    imageSrc: "/images/Ayampenyet.jpg",    price: 7.25 },
  { name: "Nasi Uduk",      imageSrc: "/images/NasiUduk.jpg",       price: 6.75 },
  { name: "Tempe Mendoan",  imageSrc: "/images/TempeMendoan.jpg",  price: 3.99 },
  { name: "Es Campur",      imageSrc: "/images/EsCampur.jpg",       price: 2.50 },
  { name: "Indomie Goreng", imageSrc: "/images/Indomie.jpg",        price: 1.99 },

];
