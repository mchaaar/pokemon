import Link from "next/link";
import Image from "next/image";

async function fetchRandomPokemons() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
  const data = await res.json();
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6).map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.image,
  }));
}

async function fetchRandomTypes() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/types");
  const data = await res.json();
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map((type) => ({
    name: type.name,
    image: `/types/${type.englishName.toLowerCase()}.png`,
  }));
}

export default async function Home() {
  const randomPokemons = await fetchRandomPokemons();
  const randomTypes = await fetchRandomTypes();

  return (
    <div className="flex flex-col gap-16 w-full max-w-4xl p-8 pb-20">
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/pokemons" className="hover:underline">
            Explore Random Pokémon →
          </Link>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {randomPokemons.map((pokemon) => (
            <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
              <div className="flex flex-col items-center p-4 border rounded hover:shadow-lg">
                <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    width={80}
                    height={80}
                    className="mb-2"
                  />
                </div>
                <p className="text-center capitalize">{pokemon.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/types" className="hover:underline">
            Explore Random Types →
          </Link>
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {randomTypes.map((type, index) => (
            <Link key={index} href={`/types/${type.name.toLowerCase()}`}>
              <div className="flex flex-col items-center p-4 border rounded hover:shadow-lg">
                <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <Image
                    src={type.image}
                    alt={type.name}
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                </div>
                <p className="text-center capitalize">{type.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
