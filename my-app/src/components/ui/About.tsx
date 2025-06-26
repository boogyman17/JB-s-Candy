import Image from "next/image";

export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 bg-white">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600">
          Welcome to JB's Kitchen, your go-to destination for authentic Indonesian cuisine. Our mission is to bring the rich flavors and vibrant culture of Indonesia right to your table. From traditional dishes to modern interpretations, we offer a diverse menu that caters to all tastes. Join us on a culinary journey and experience the warmth of Indonesian hospitality.
        </p>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <Image
          src="/images/About.jpg"
          alt="About Food"
          width={500}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
