const AppearanceMessage = ({ message, pokemonImage }) => (
  <div className="fixed top-4 right-4 bg-gray-800 p-4 rounded-md shadow-lg text-white z-50 flex items-center gap-4">
    {pokemonImage && (
      <img
        src={pokemonImage}
        alt="Appearing Pokémon"
        className="w-12 h-12 rounded-full border-2 border-white"
      />
    )}
    <div>
      <h2 className="text-lg font-bold">Un Pokémon sauvage est apparu !</h2>
      <p className="mt-2">{message}</p>
    </div>
  </div>
);

export default AppearanceMessage;
