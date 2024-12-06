'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePokemonSearch } from "@/app/hooks/usePokemonSearch";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchPokemonByName, errorMessage } = usePokemonSearch();
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const pokemon = await searchPokemonByName(searchQuery.trim());
      router.push(`/pokemons/${pokemon.id}`);
    } catch (error) {}
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

      <form className="flex flex-col items-center w-full max-w-lg" onSubmit={handleSearch}>
        <div className="flex gap-2 w-full items-center">
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
          <Link href="/combat">
            <button
              type="button"
              className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-800 text-white rounded hover:from-red-600 hover:to-red-900 transition-all"
              title="Combat"
            >
              ⚔️
            </button>
          </Link>
          <Link href="/random">
            <button
              type="button"
              className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-800 text-white rounded hover:from-red-600 hover:to-red-900 transition-all"
              title="Random Pokémon"
            >
              🎲
            </button>
          </Link>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </form>
    </header>
  );
};

export default Header;
