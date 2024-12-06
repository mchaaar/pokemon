const PokemonCard = ({ pokemon, onClick }) => (
    <div className="relative flex flex-col items-center bg-gray-800 p-4 rounded-lg">
      <button
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1 px-2 rounded-md"
        onClick={onClick}
      >
        Pick
      </button>
      <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 mb-2" />
      <p className="mt-2 font-semibold">{pokemon.name}</p>
      <div className="flex flex-wrap gap-2 justify-center mt-1">
        {pokemon.types?.map((type) => (
          <span
            key={type.name}
            className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-md"
          >
            {type.name}
          </span>
        )) || <p className="text-gray-400 text-xs">No Types Available</p>}
      </div>
      <div className="text-sm mt-2">
        <p>Stats</p>
        <p>HP: {pokemon.stats?.HP || 'N/A'}</p>
        <p>Attack: {pokemon.stats?.attack || 'N/A'}</p>
        <p>Defense: {pokemon.stats?.defense || 'N/A'}</p>
        <p>Speed: {pokemon.stats?.speed || 'N/A'}</p>
      </div>
    </div>
  );
  
  export default PokemonCard;
  