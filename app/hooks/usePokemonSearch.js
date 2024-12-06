import { useState } from "react";

export const usePokemonSearch = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const searchPokemonByName = async (name) => {
    try {
      const res = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/${encodeURIComponent(name.toLowerCase())}`
      );

      if (!res.ok) {
        throw new Error("Pokémon introuvable");
      }

      return await res.json();
    } catch (error) {
      setErrorMessage("Pokémon introuvable. Vérifiez l'orthographe !");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      throw error;
    }
  };

  return { searchPokemonByName, errorMessage };
};
