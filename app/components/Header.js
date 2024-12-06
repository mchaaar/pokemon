'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Use Next.js router for navigation
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="flex flex-col items-center gap-4 w-full mb-8 mt-8">
      {/* Logo Redirects to Home */}
      <Link href="/">
        <Image
          src="/pokeball.png"
          alt="Pokeball Logo"
          width={100}
          height={100}
          className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </Link>

      {/* Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-center">Pokémon Explorer</h1>
      </div>

      {/* Search Form */}
      <form className="flex gap-2 w-full max-w-lg" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded p-2 text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-red-800 text-white px-4 py-2 rounded hover:from-red-600 hover:to-red-900 transition-all"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
