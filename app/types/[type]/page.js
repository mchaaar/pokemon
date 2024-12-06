'use client';

import { usePokemonsByType } from "@/app/hooks/usePokemonsByType";
import PokemonCard from "@/app/components/PokemonCard";
import BackToTypesButton from "@/app/components/BackToTypesButton";
import { use } from "react";

export default function PokemonByType({ params }) {
  const { type } = use(params);
  const decodedType = decodeURIComponent(type);
  const { pokemons, error, loading } = usePokemonsByType(type);

  if (loading) return <div className="text-center">Chargement...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center capitalize">
        Liste des Pokémon de type {decodedType}
      </h1>

      {pokemons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">Aucun Pokémon trouvé pour ce type.</p>
      )}

      <BackToTypesButton />
    </div>
  );
}
