// src/components/ui/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./Searchbar"; 

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const cartItems = [
    { name: "Apple iPhone 15", price: 599, qty: 1 },
    { name: "Apple iPad Air", price: 499, qty: 1 },
    { name: "Apple Watch SE", price: 198, qty: 2 },
    { name: "Sony PlayStation 5", price: 799, qty: 1 },
    { name: "Apple iMac 20\"", price: 8997, qty: 3 },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/best-sellers" },
    { label: "Contacts", href: "/gift-ideas" },
    { label: "Today's Deals", href: "/deals" },
  ];

  const accountLinks = [
    { label: "Profile", href: "/account/profile" },
    { label: "Orders", href: "/account/orders" },
    { label: "Wishlist", href: "/account/wishlist" },
    { label: "Settings", href: "/account/settings" },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Links */}
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold">JB's Candy</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* SearchBar inserted here */}
          <div className="flex-1 px-8">
            <SearchBar />
          </div>

          {/* Cart & Account Menus */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="hover:text-gray-300"
              >
                My Cart
              </button>
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg p-4 z-10">
                  <ul className="space-y-2 text-white">
                    {cartItems.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-400">
                            ${item.price}
                          </p>
                        </div>
                        <span className="text-sm">
                          Qty: {item.qty}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded text-white">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>

            {/* Account */}
            <div className="relative">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="hover:text-gray-300"
              >
                Account
              </button>
              {accountOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-4 z-10 text-white">
                  <ul className="space-y-2">
                    {accountLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block hover:text-gray-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
