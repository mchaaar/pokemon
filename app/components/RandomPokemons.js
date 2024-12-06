'use client';

import Link from "next/link";
import Image from "next/image";
import { useRandomPokemons } from "@/app/hooks/useRandomPokemons";

export default function RandomPokemons() {
  const { randomPokemons, loading, error } = useRandomPokemons(6);

  if (loading) return <div className="text-center">Chargement...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {randomPokemons.map((pokemon) => (
        <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
          <div className="flex flex-col items-center p-4 border rounded hover:shadow-lg">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={80}
                height={80}
                className="mb-2"
              />
            </div>
            <p className="text-center capitalize">{pokemon.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
