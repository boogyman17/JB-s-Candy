"use client";

import Link from "next/link";
import { MagnifyingGlassCircleIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
export default function SearchBar() {
  return (
    <div className="flex items-center space-x-4">
      {/* Search Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <MagnifyingGlassCircleIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>

      {/* Wishlist / Favorites */}
      <Link href="/wishlist" className="p-2 rounded hover:bg-gray-100">
        <HeartIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
      </Link>

      {/* Cart */}
      <Link href="/cart" className="p-2 rounded hover:bg-gray-100">
        <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-gray-800" />
      </Link>
    </div>
  );
}