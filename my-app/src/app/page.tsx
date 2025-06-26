import Hero from "@/components/ui/hero";
import SectionCarousel from "@/components/ui/SectionCarousel";
import About from "@/components/ui/About";

export default function Home() {
  const popularFood = [
    { imageSrc: "/images/NasiGoreng.jpg", title: "Nasi Goreng", subtitle: "📍 Location", rating: 4 },
    { imageSrc: "/images/MieAyam.jpg", title: "Mie Ayam", subtitle: "📍 Location", rating: 5 },
    { imageSrc: "/images/SotoAyam.jpg", title: "Soto Ayam", subtitle: "📍 Location", rating: 5 },
    { imageSrc: "/images/Sate.jpg", title: "Sate", subtitle: "📍 Location", rating: 4 },
    { imageSrc: "/images/Gadogado.png", title: "Gado Gado", subtitle: "📍 Location", rating: 5 },
    { imageSrc: "/images/TempeMendoan.jpg", title: "Tempe Mendoan", subtitle: "📍 Location", rating: 4 },
    { imageSrc: "/images/EsCampur.jpg", title: "Es Campur", subtitle: "📍 Location", rating: 5 },
    { imageSrc: "/images/Indomie.jpg", title: "Indomie", subtitle: "📍 Location", rating: 4 },
    { imageSrc: "/images/NasiUduk.jpg", title: "Nasi Uduk", subtitle: "📍 Location", rating: 5 }

  ];

  const Chef = [
     { imageSrc: "/images/Sate.jpg", title: "Sate", subtitle: "📍 Location", rating: 4 },
      { imageSrc: "/images/NasiGoreng.jpg", title: "Nasi Goreng", subtitle: "📍 Location", rating: 5 },
      { imageSrc: "/images/MieAyam.jpg", title: "Mie Ayam", subtitle: "📍 Location", rating: 5 },
      { imageSrc: "/images/SotoAyam.jpg", title: "Soto Ayam", subtitle: "📍 Location", rating: 4 },
      { imageSrc: "/images/GadoGado.png", title: "Gado Gado", subtitle: "📍 Location", rating: 5 },
      { imageSrc: "/images/TempeMendoan.jpg", title: "Tempe Mendoan", subtitle: "📍 Location", rating: 4 },
      { imageSrc: "/images/EsCampur.jpg", title: "Es Campur", subtitle: "📍 Location", rating: 5 },
      { imageSrc: "/images/Indomie.jpg", title: "Indomie", subtitle: "📍 Location", rating: 4 }
  ];

  return (
    <>
      <Hero />
      <SectionCarousel title="Most Popular" items={popularFood} />
      <SectionCarousel title="Chefs Favourites" items={Chef} />
      <About />
    </>
  );
}
