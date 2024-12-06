'use client';

import { useEffect, useState } from "react";

export const usePokemonsByType = (type) => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonsByType = async () => {
      try {
        const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
        if (!res.ok) throw new Error(`Erreur lors de la récupération des Pokémon pour le type ${type}`);
        const data = await res.json();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonsByType();
  }, [type]);

  return { pokemons, error, loading };
};
