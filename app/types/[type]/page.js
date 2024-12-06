import Image from "next/image";
import Link from "next/link";

async function fetchPokemonsByType(type) {
  const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
  if (!res.ok) {
    throw new Error(`Erreur lors de la récupération des Pokémon pour le type ${type}`);
  }
  return res.json();
}

export default async function PokemonByType({ params }) {
  const { type } = params;
  const pokemons = await fetchPokemonsByType(type);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center capitalize">
        Liste des Pokémon de type {type}
      </h1>

      {pokemons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="border p-4 rounded shadow hover:shadow-lg flex flex-col items-center"
            >
              {/* Link wraps the image for navigation */}
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
      ) : (
        <p className="text-center text-lg">Aucun Pokémon trouvé pour ce type.</p>
      )}

      <div className="flex justify-center mt-8">
        <Link href="/types">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Retour à la liste des types
          </button>
        </Link>
      </div>
    </div>
  );
}
