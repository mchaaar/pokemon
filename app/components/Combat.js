import React, { useState } from 'react';
import { usePokemons } from '@/app/hooks/usePokemons';
import { useCombat } from '@/app/hooks/useCombat';
import PokemonList from '@/app/components/PokemonList';
import CombatResultMessage from '@/app/components/CombatResultMessage';
import AppearanceMessage from '@/app/components/AppearanceMessage';

const Combat = () => {
  const [type, setType] = useState('');
  const [team, setTeam] = useState([]);

  const {
    pokemonList,
    wildPokemon,
    wildPokemonImage,
    fetchPokemonByType,
    fetchRandomPokemon,
    setWildPokemon,
  } = usePokemons();

  const {
    combatResult,
    showWildPokemonMessage,
    winnerImage,
  } = useCombat({
    team,
    wildPokemon,
    fetchRandomPokemon,
    setWildPokemon,
  });

  const addToTeam = (pokemon) => {
    if (team.length < 6) {
      setTeam([...team, pokemon]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-4">Combat Pokémon</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchPokemonByType(type);
          }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <label htmlFor="type" className="text-lg">
            Entrez un type de Pokémon :
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value.toLowerCase())}
            placeholder="Ex : feu, eau, plante"
            className="px-4 py-2 rounded-md border border-gray-500 bg-gray-900 text-white"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Afficher les Pokémon
          </button>
        </form>
      </div>

      <PokemonList
        title="Pokémon disponibles :"
        pokemonList={pokemonList}
        onPokemonClick={addToTeam}
      />
      <PokemonList title="Votre équipe :" pokemonList={team} onPokemonClick={() => {}} />

      {wildPokemon && showWildPokemonMessage && (
        <AppearanceMessage
          message={`${wildPokemon.name} est apparu !`}
          pokemonImage={wildPokemonImage}
        />
      )}
      {combatResult && (
        <CombatResultMessage
          combatResult={combatResult}
          winnerImage={winnerImage}
        />
      )}
    </div>
  );
};

export default Combat;
