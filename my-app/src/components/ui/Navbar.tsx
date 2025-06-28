// src/components/ui/Navbar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchBar from "./Searchbar";                  // <-- ensure correct casing
import { useCart } from "@/context/Cartcontext";      // <-- fix context path
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

export default function Navbar() {
  const router = useRouter();
  const { user } = useAuth();
  const { items: cartItems, clearCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const navLinks = [
    { label: "Home",     href: "/" },
    { label: "Products", href: "/Product" },      // <-- consistent lowercase
    { label: "Reviews",  href: "/reviews" },
    { label: "Contacts", href: "/contact" },
  ];

  const accountLinks = [
    { label: "Profile", href: "/account/profile" },
    { label: "Orders",  href: "/orders" },
  ];

  async function handleCheckout() {
    if (!user) {
      toast.error("Please log in to place an order.");
      return router.push("/login");
    }
    const { error } = await supabase
      .from("orders")
      .insert({ user_id: user.id, items: cartItems });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Order placed!");
      clearCart();
      router.push("/orders");
    }
  }

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo + Links */}
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold">JB's Kitchen</span>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 px-8">
            <SearchBar />
          </div>

          {/* Right-side: Auth / Cart / Account */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link href="/login" className="hover:text-gray-300">
                  Login
                </Link>
                <Link href="/register" className="hover:text-gray-300">
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* Cart Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setCartOpen(!cartOpen)}
                    className="hover:text-gray-300"
                  >
                    My Cart ({cartItems.length})
                  </button>
                  {cartOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg p-4 z-10">
                      {cartItems.length > 0 ? (
                        <ul className="space-y-2 text-white">
                          {cartItems.map(item => (
                            <li key={item.name} className="flex justify-between">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-400">${item.price}</p>
                              </div>
                              <span className="text-sm">Qty: {item.qty}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">Cart is empty</p>
                      )}
                      <button
                        onClick={handleCheckout}
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded text-white"
                      >
                        Submit Order
                      </button>
                    </div>
                  )}
                </div>

                {/* Account Dropdown */}
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
                        {accountLinks.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block hover:text-gray-300"
                          >
                            {item.label}
                          </Link>
                        ))}
                        <li>
                          <button
                            onClick={() => supabase.auth.signOut()}
                            className="w-full text-left hover:text-gray-300"
                          >
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
