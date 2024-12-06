import Image from "next/image";

async function getPokemonData(id) {
  const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  return res.json();
}

export default async function PokemonDetail({ params }) {
  const { id } = params;
  const pokemon = await getPokemonData(id);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold capitalize mb-4">{pokemon.name}</h1>
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        width={300}
        height={300}
        className="mb-8"
      />
      <div className="text-lg">
        <h2 className="text-2xl font-semibold">Stats</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>HP:</strong> {pokemon.stats.HP}
          </li>
          <li>
            <strong>Attack:</strong> {pokemon.stats.attack}
          </li>
          <li>
            <strong>Defense:</strong> {pokemon.stats.defense}
          </li>
          <li>
            <strong>Special Attack:</strong> {pokemon.stats.special_attack}
          </li>
          <li>
            <strong>Special Defense:</strong> {pokemon.stats.special_defense}
          </li>
          <li>
            <strong>Speed:</strong> {pokemon.stats.speed}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Types</h2>
        <ul className="list-disc list-inside">
          {pokemon.apiTypes.map((type) => (
            <li key={type.name} className="capitalize">
              {type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
