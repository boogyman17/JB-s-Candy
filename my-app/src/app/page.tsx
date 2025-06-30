import Hero from "@/components/ui/hero";
import SectionCarousel from "@/components/ui/SectionCarousel";
import About from "@/components/ui/About";

export default function Home() {
  const popularFood = [
    { imageSrc: "/images/NasiGoreng.jpg", title: "Nasi Goreng", subtitle: "Fried rice", rating: 4 },
    { imageSrc: "/images/MieAyam.jpg", title: "Mie Ayam", subtitle: "Chicken noodle", rating: 5 },
    { imageSrc: "/images/SotoAyam.jpg", title: "Soto Ayam", subtitle: "Chicken soup", rating: 5 },
    { imageSrc: "/images/Sate.jpg", title: "Sate", subtitle: "Grilled meat skewers", rating: 4 },
    { imageSrc: "/images/Gadogado.png", title: "Gado Gado", subtitle: "Vegetable salad", rating: 5 },
    { imageSrc: "/images/TempeMendoan.jpg", title: "Tempe Mendoan", subtitle: "Fried tempeh", rating: 4 },
    { imageSrc: "/images/EsCampur.jpg", title: "Es Campur", subtitle: "Mixed ice dessert", rating: 5 },
    { imageSrc: "/images/Indomie.jpg", title: "Indomie", subtitle: "Instant noodles", rating: 4 },
    { imageSrc: "/images/NasiUduk.jpg", title: "Nasi Uduk", subtitle: "Coconut rice", rating: 5 }

  ];

  const Chef = [
     { imageSrc: "/images/Sate.jpg", title: "Sate", subtitle: "Meat skewer", rating: 4 },
      { imageSrc: "/images/NasiGoreng.jpg", title: "Nasi Goreng", subtitle: "Fried Rice", rating: 5 },
      { imageSrc: "/images/MieAyam.jpg", title: "Mie Ayam", subtitle: "Chicken Noodle", rating: 5 },
      { imageSrc: "/images/SotoAyam.jpg", title: "Soto Ayam", subtitle: "Chicken soup", rating: 4 },
      { imageSrc: "/images/GadoGado.png", title: "Gado Gado", subtitle: "Vegetable salad", rating: 5 },
      { imageSrc: "/images/TempeMendoan.jpg", title: "Tempe Mendoan", subtitle: "Fried tempeh", rating: 4 },
      { imageSrc: "/images/EsCampur.jpg", title: "Es Campur", subtitle: "Mixed ice dessert", rating: 5 },
      { imageSrc: "/images/Indomie.jpg", title: "Indomie", subtitle: "Instant noodles", rating: 4 }
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
