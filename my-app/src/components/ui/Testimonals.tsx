import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  imageSrc: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dianna Kimwealth",
    role: "Rodo Construction",
    imageSrc: "/images/testimonials/dianna.jpg",
    quote:
      "Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus.",
  },
  {
    name: "John Wellberg",
    role: "Solid Iron Corp",
    imageSrc: "/images/testimonials/john.jpg",
    quote:
      "Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus.",
  },
  {
    name: "Sarah Rahman",
    role: "South Cotton Architecture",
    imageSrc: "/images/testimonials/sarah.jpg",
    quote:
      "Mauris sodales tellus vel felis dapibus, sit amet porta nibh egestas. Sed dignissim tellus quis sapien sagittis cursus.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-yellow-500 uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-6">
                <Image
                  src={t.imageSrc}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <h3 className="mt-4 font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
              <p className="text-gray-700 relative pl-6 before:absolute before:top-0 before:left-0 before:text-yellow-400 before:text-4xl before:font-serif before:content-['“']">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
