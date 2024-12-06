'use client';

import { useState, useEffect } from "react";

export const usePokemonById = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
        if (!res.ok) throw new Error("Failed to fetch Pokémon data");
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (id) fetchPokemon();
  }, [id]);

  return { pokemon, error };
};
