'use client';

import { useEffect, useState } from "react";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [wildPokemon, setWildPokemon] = useState(null);
  const [wildPokemonImage, setWildPokemonImage] = useState(null);
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

  const fetchPokemonByType = async (type) => {
    try {
      const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
      if (!res.ok) throw new Error("Erreur lors de la récupération des Pokémon par type");
      const data = await res.json();
      const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10);
      setPokemonList(shuffled);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchRandomPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 899) + 1;
      const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${randomId}`);
      if (!res.ok) throw new Error("Erreur lors de la récupération d'un Pokémon sauvage");
      const data = await res.json();
      setWildPokemon(data);
      setWildPokemonImage(data.image);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    pokemons,
    pokemonList,
    wildPokemon,
    wildPokemonImage,
    error,
    fetchPokemonByType,
    fetchRandomPokemon,
    setWildPokemon,
    setWildPokemonImage,
  };
};
