import Link from "next/link";
import Image from "next/image";

async function fetchAllTypes() {
  const res = await fetch("https://pokebuildapi.fr/api/v1/types");
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des types");
  }
  return res.json();
}

export default async function TypeList() {
  const types = await fetchAllTypes();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Liste des Types</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {types.map((type) => (
          <Link key={type.name} href={`/types/${type.name.toLowerCase()}`}>
            <div className="flex flex-col items-center p-4 border rounded hover:shadow-lg">
              <div className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                <Image
                  src={`/types/${type.englishName.toLowerCase()}.png`}
                  alt={type.name}
                  width={60}
                  height={60}
                  className="mb-4"
                />
              </div>
              <p className="text-lg font-semibold capitalize">{type.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
