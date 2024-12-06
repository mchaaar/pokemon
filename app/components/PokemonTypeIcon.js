'use client';

import Image from "next/image";

const PokemonTypeIcon = ({ type }) => (
  <div className="flex items-center mb-1">
    <Image
      src={`/types/${type.toLowerCase()}.png`}
      alt={type}
      width={24}
      height={24}
      className="mr-2"
    />
    <span className="capitalize">{type}</span>
  </div>
);

export default PokemonTypeIcon;
