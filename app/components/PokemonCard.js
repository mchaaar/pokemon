'use client';

import Link from "next/link";
import Image from "next/image";
import PokemonTypeIcon from "@/app/components/PokemonTypeIcon";
import PokemonStats from "@/app/components/PokemonStats";

const PokemonCard = ({ pokemon }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center">
    <Link href={`/pokemons/${pokemon.id}`}>
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={120}
          height={120}
          className="mb-4"
        />
      </div>
    </Link>
    <h3 className="text-lg font-bold capitalize mb-2">{pokemon.name}</h3>

    <div className="flex flex-col items-start mb-2">
      {pokemon.apiTypes.map((type) => (
        <PokemonTypeIcon key={type.name} type={type.name} />
      ))}
    </div>

    <PokemonStats stats={pokemon.stats} />
  </div>
);

export default PokemonCard;
