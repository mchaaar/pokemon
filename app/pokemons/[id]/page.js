'use client';

import Image from "next/image";
import { usePokemonById } from "@/app/hooks/usePokemonById";
import PokemonStats from "@/app/components/PokemonStats";
import PokemonTypes from "@/app/components/PokemonTypes";
import { use } from "react";

export default function PokemonDetail({ params }) {
  const { id } = use(params);
  const { pokemon, error } = usePokemonById(id);

  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!pokemon) return <div className="text-center">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold capitalize text-center mb-8">{pokemon.name}</h1>

      <div className="flex flex-col md:flex-row items-center gap-16 justify-center">
        <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <PokemonStats stats={pokemon.stats} />
          <PokemonTypes types={pokemon.apiTypes} />
        </div>
      </div>
    </div>
  );
}
