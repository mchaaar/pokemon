const CombatResultMessage = ({ combatResult, winnerImage }) => (
    <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-md shadow-lg text-white z-50 flex items-center gap-4">
        {winnerImage && (
            <img
                src={winnerImage}
                alt="Winning Pokémon"
                className="w-12 h-12 rounded-full border-2 border-white"
            />
        )}
        <div>
            <h2 className="text-lg font-bold">Résultat du combat :</h2>
            <p className="mt-2">{combatResult}</p>
        </div>
    </div>
);

export default CombatResultMessage;
