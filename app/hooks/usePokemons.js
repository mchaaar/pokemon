'use client';

import { useEffect, useState } from "react";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        if (!res.ok) throw new Error("Erreur lors de la récupération des Pokémon");
        const data = await res.json();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, error };
};
