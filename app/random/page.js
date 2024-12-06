'use client';

import { useState } from "react";
import { useRandomPokemons } from "@/app/hooks/useRandomPokemons";
import PokemonDetail from "@/app/components/PokemonDetail";

export default function RandomPokemonPage() {
  const [randomId, setRandomId] = useState(
    Math.floor(Math.random() * 899) + 1
  );

  const fetchNewRandomPokemon = () => {
    setRandomId(Math.floor(Math.random() * 899) + 1);
  };

  return (
    <div className="p-8 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold text-center">Pokémon aléatoire</h1>
      <PokemonDetail params={{ id: randomId }} />
      <button
        onClick={fetchNewRandomPokemon}
        className="bg-gradient-to-r from-red-500 to-red-800 text-white px-4 py-2 rounded hover:from-red-600 hover:to-red-900 transition-all"
      >
        Nouveau Pokemon aléatoire
      </button>
    </div>
  );
}
