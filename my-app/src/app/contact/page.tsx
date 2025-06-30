import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <main className="bg-gray-800 text-white py-16 px-4 md:px-16 lg:px-32">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">Contact Us:</h1>
        <p className="text-gray-300">
          Are you a food lover? If your answer is yes, then this is the restaurant for you.  
          We serve food at reasonable prices. It’s awesome, we know.
        </p>
      </section>

      
      <section className="flex flex-col md:flex-row gap-12">
        
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

        
        <div className="flex-1 h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.699581826717!2d-77.03777118464723!3d38.897676179570265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0xfbfbc1f0ce3b10ec!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1682842212345!5m2!1sen!2sus"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

      </section>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
        <div className="space-y-4">
          <MapPinIcon className="w-12 h-12 mx-auto text-yellow-400" />
          <p>1600 Pennsylvania Ave NW<br/> Washington, DC 20500<br></br>United States</p>
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
