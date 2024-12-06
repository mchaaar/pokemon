import { useState, useEffect } from 'react';

export const useCombat = ({ team, wildPokemon, fetchRandomPokemon, setWildPokemon }) => {
  const [combatResult, setCombatResult] = useState(null);
  const [showWildPokemonMessage, setShowWildPokemonMessage] = useState(false);
  const [winnerImage, setWinnerImage] = useState(null);

  const determineCombatResult = () => {
    if (!wildPokemon || team.length === 0) return;

    const teamPokemon = team[team.length - 1];
    const teamPower = (teamPokemon?.stats?.HP || 0) + (teamPokemon?.stats?.attack || 0);
    const wildPower = (wildPokemon?.stats?.HP || 0) + (wildPokemon?.stats?.attack || 0);

    if (teamPower > wildPower) {
      setCombatResult(`Victoire ! ${teamPokemon.name} a battu ${wildPokemon.name}`);
      setWinnerImage(teamPokemon.image);
    } else {
      setCombatResult(`Défaite... ${wildPokemon.name} a vaincu ${teamPokemon.name}`);
      setWinnerImage(wildPokemon.image);
    }
  };

  useEffect(() => {
    if (team.length > 0) {
      const timeout = Math.floor(Math.random() * 5000) + 2000;
      const timer = setTimeout(() => {
        fetchRandomPokemon();
        setShowWildPokemonMessage(true);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [team, fetchRandomPokemon]);

  useEffect(() => {
    if (wildPokemon && showWildPokemonMessage) {
      const timer = setTimeout(() => {
        setShowWildPokemonMessage(false);
        determineCombatResult();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [wildPokemon, showWildPokemonMessage]);

  useEffect(() => {
    if (combatResult) {
      const timer = setTimeout(() => {
        setCombatResult(null);
        setWinnerImage(null);
        setWildPokemon(null);
        fetchRandomPokemon();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [combatResult, fetchRandomPokemon]);

  return {
    combatResult,
    showWildPokemonMessage,
    setShowWildPokemonMessage,
    winnerImage,
  };
};
