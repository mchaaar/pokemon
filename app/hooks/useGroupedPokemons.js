'use client';

export const useGroupedPokemons = (pokemons) => {
  const groupByGeneration = (pokemons) =>
    pokemons.reduce((acc, pokemon) => {
      const generation = pokemon.apiGeneration;
      if (!acc[generation]) acc[generation] = [];
      acc[generation].push(pokemon);
      return acc;
    }, {});

  return groupByGeneration(pokemons);
};
