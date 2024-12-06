import Link from "next/link";
import RandomPokemons from "@/app/components/RandomPokemons";
import RandomTypes from "@/app/components/RandomTypes";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-4xl p-8 pb-20">
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/pokemons" className="hover:underline">
            Tous les Pokémons →
          </Link>
        </h2>
        <RandomPokemons />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <Link href="/types" className="hover:underline">
            Tous les Types →
          </Link>
        </h2>
        <RandomTypes />
      </section>
    </div>
  );
}
