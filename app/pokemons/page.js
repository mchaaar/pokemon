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

      {Object.entries(pokemonsByGeneration).map(([generation, pokemons]) => (
        <section key={generation} className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 mt-10 text-center">Génération {generation}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center"
              >
                {/* Link wraps the image and redirects to `/pokemons/[id]` */}
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
                <h3 className="text-lg font-bold capitalize mb-2">{pokemon.name}</h3>

                <p className="text-sm mb-2">
                  <strong>Types:</strong>{" "}
                  {pokemon.apiTypes.map((type) => type.name).join(", ")}
                </p>

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
