import PokemonCombatCard from '@/app/components/PokemonCombatCard';

const PokemonList = ({ title, pokemonList, onPokemonClick }) => (
  <div className="w-full max-w-4xl">
    <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {pokemonList.map((pokemon) => (
        <PokemonCombatCard key={pokemon.id} pokemon={pokemon} onClick={() => onPokemonClick(pokemon)} />
      ))}
    </div>
  </div>
);

export default PokemonList;
