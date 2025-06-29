"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const term = query.trim();
    router.push(term ? `/Product?search=${encodeURIComponent(term)}` : `/Product`);

  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      
      <div className="relative flex-1">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="What are you looking for?"
          className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </form>
  );
}
