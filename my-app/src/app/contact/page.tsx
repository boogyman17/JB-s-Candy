// src/app/contact/page.tsx
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="bg-gray-800 text-white py-16 px-4 md:px-16 lg:px-32">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">Contact Us:</h1>
        <p className="text-gray-300">
          Are you a food lover? If your answer is yes, then this is the restaurant for you.  
          We serve food at reasonable prices. It’s awesome, we know.
        </p>
      </section>

      {/* Form + Map */}
      <section className="flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <form className="flex-1 space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Your full name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full bg-transparent border-b border-gray-600 placeholder-gray-400 py-2 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your email address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-gray-600 placeholder-gray-400 py-2 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Your phone number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your phone number"
              className="w-full bg-transparent border-b border-gray-600 placeholder-gray-400 py-2 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message here</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Message here"
              className="w-full bg-transparent border-b border-gray-600 placeholder-gray-400 py-2 focus:outline-none focus:border-yellow-400 resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900 transition rounded"
          >
            Send Now &rarr;
          </button>
        </form>

        {/* Embedded Map */}
        <div className="flex-1 h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          />
        </div>
      </section>

      {/* Contact Details */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="space-y-4">
          <MapPinIcon className="w-12 h-12 mx-auto text-yellow-400" />
          <p>1/A, Street View, New York,<br/>United States</p>
        </div>
        <div className="space-y-4">
          <PhoneIcon className="w-12 h-12 mx-auto text-yellow-400" />
          <p>Phone Number<br/>+61222333444</p>
        </div>
        <div className="space-y-4">
          <EnvelopeIcon className="w-12 h-12 mx-auto text-yellow-400" />
          <p>Email Us <br/>Jason.budiman07@gmail.com</p>
        </div>
      </section>
    </main>
  );
}
