'use client';

import { useState, useEffect } from "react";

export const useRandomPokemons = (amount = 6) => {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonById = async (id) => {
      const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
      if (!res.ok) throw new Error(`Failed to fetch Pokémon with ID ${id}`);
      return res.json();
    };

    const fetchRandomPokemons = async () => {
      setLoading(true);
      setError(null);
      try {
        const randomIds = Array.from({ length: amount }, () =>
          Math.floor(Math.random() * 899) + 1
        );

        const promises = randomIds.map((id) => fetchPokemonById(id));
        const pokemons = await Promise.all(promises);

        setRandomPokemons(
          pokemons.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            types: pokemon.apiTypes,
          }))
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPokemons();
  }, [amount]);

  return { randomPokemons, loading, error };
};
