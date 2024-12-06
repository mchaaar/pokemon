import React from "react";
import Image from "next/image";

const PokemonTypes = ({ types }) => (
  <div className="flex flex-col items-center md:items-start">
    <h2 className="text-2xl font-semibold mb-4">Types</h2>
    <div className="flex gap-4">
      {types.map((type) => (
        <div key={type.name} className="flex items-center">
          <Image
            src={`/types/${type.name.toLowerCase()}.png`}
            alt={type.name}
            width={40}
            height={40}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      ))}
    </div>
  </div>
);

export default PokemonTypes;
