'use client';

import Image from "next/image";
import { usePokemonById } from "@/app/hooks/usePokemonById";

export default function PokemonDetail({ params }) {
  const { id } = params;
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
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Stats</h2>
            <ul className="list-inside list-disc text-lg">
              <li><strong>HP:</strong> {pokemon.stats.HP}</li>
              <li><strong>Attack:</strong> {pokemon.stats.attack}</li>
              <li><strong>Defense:</strong> {pokemon.stats.defense}</li>
              <li><strong>Special Attack:</strong> {pokemon.stats.special_attack}</li>
              <li><strong>Special Defense:</strong> {pokemon.stats.special_defense}</li>
              <li><strong>Speed:</strong> {pokemon.stats.speed}</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-semibold mb-4">Types</h2>
            <div className="flex gap-4">
              {pokemon.apiTypes.map((type) => (
                <div key={type.name} className="flex items-center">
                  <Image
                    src={`/types/${type.name.toLowerCase()}.png`}
                    alt={type.name}
                    width={40}
                    height={40}
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
