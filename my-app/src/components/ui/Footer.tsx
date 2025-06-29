// src/components/ui/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <Image
            src="/images/logo.png"         // <-- replace with your logo path
            alt="JB's Kitchen Logo"
            width={300}
            height={300}
            priority
          />
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-4 uppercase text-sm">Customer Service</h3>
          <ul className="space-y-2 text-sm">
          </ul>
        </div>

        {/* Legal & Cookies */}
        <div>
          <h3 className="font-semibold mb-4 uppercase text-sm">Legal & Cookies</h3>
          <ul className="space-y-2 text-sm">
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 uppercase text-sm">About JB's Kitchen</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-4 uppercase text-sm">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61562956138362" target="_blank" className="hover:text-gray-900">
              <FaFacebookF size={20} />
            </Link>
            <Link href="https://www.instagram.com/jasonb_man/" target="_blank" className="hover:text-gray-900">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
