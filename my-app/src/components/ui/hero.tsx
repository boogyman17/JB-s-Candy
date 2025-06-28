import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 bg-white">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Order from <br/>
          JB's Kitchen <span className="text-green-500">Now Online</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg">
          Indonesian Food right to your door!
        </p>
        <Link href="/Product" className="inline-block mt-6 px-6 py-3 border border-red-500 text-red-500 rounded hover:bg-red-50">
          Order Now
        </Link>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image
          src="/images/Hero.jpg"
          alt="Delicious Dish"
          width={500}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
