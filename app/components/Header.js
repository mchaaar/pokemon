'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.location.href = `/search?query=${searchQuery}`;
    }
  };

  return (
    <header className="flex flex-col items-center gap-4 w-full mb-8 mt-8">
      <Link href="/">
        <Image
          src="/pokeball.png"
          alt="Pokeball Logo"
          width={100}
          height={100}
          className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </Link>
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-center">Pokémon Explorer</h1>
      </div>
      <form className="flex gap-2" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
