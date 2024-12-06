import Image from "next/image";
import Link from "next/link";

async function fetchPokemons() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des Pokémon");
  }
  return res.json();
}

function groupByGeneration(pokemons) {
  return pokemons.reduce((acc, pokemon) => {
    const generation = pokemon.apiGeneration;
    if (!acc[generation]) {
      acc[generation] = [];
    }
    acc[generation].push(pokemon);
    return acc;
  }, {});
}

export default async function PokemonList() {
  const allPokemons = await fetchPokemons();
  const pokemonsByGeneration = groupByGeneration(allPokemons);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Liste des Pokémon par Génération</h1>

      {/* Boutons pour chaque génération */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 justify-center">
        {Object.keys(pokemonsByGeneration).map((generation) => (
          <a
            key={generation}
            href={`#generation-${generation}`}
            className="bg-gradient-to-r from-red-500 to-red-800 text-white px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-900 transition-all text-center"
          >
            Génération {generation}
          </a>
        ))}
      </div>

      {/* Liste des Pokémon par génération */}
      {Object.entries(pokemonsByGeneration).map(([generation, pokemons]) => (
        <section key={generation} id={`generation-${generation}`} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Génération {generation}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center"
              >
                {/* Image du Pokémon */}
                <Link href={`/pokemons/${pokemon.id}`}>
                  <div className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                    <Image
                      src={pokemon.image}
                      alt={pokemon.name}
                      width={120}
                      height={120}
                      className="mb-4"
                    />
                  </div>
                </Link>

                {/* Nom du Pokémon */}
                <h3 className="text-lg font-bold capitalize mb-2">{pokemon.name}</h3>

                {/* Types avec Images */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
                  {pokemon.apiTypes.map((type) => (
                    <div key={type.name} className="flex items-center">
                      <Image
                        src={`/types/${type.name.toLowerCase()}.png`}
                        alt={type.name}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                </div>

                {/* Statistiques */}
                <div className="text-sm">
                  <strong>Stats:</strong>
                  <ul className="list-inside list-disc">
                    <li>HP: {pokemon.stats.HP}</li>
                    <li>Attaque: {pokemon.stats.attack}</li>
                    <li>Défense: {pokemon.stats.defense}</li>
                    <li>Vitesse: {pokemon.stats.speed}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
