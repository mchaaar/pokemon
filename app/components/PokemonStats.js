'use client';

const PokemonStats = ({ stats }) => (
  <div className="text-sm">
    <h2 className="text-md font-semibold mb-2">Stats</h2>
    <div className="space-y-1">
      <div>
        <strong>HP:</strong> {stats.HP}
      </div>
      <div>
        <strong>Attack:</strong> {stats.attack}
      </div>
      <div>
        <strong>Defense:</strong> {stats.defense}
      </div>
      <div>
        <strong>Speed:</strong> {stats.speed}
      </div>
    </div>
  </div>
);

export default PokemonStats;
