'use client';

import { useEffect, useState } from "react";

export const useRandomTypes = () => {
  const [randomTypes, setRandomTypes] = useState([]);

  useEffect(() => {
    const fetchRandomTypes = async () => {
      const res = await fetch("https://pokebuildapi.fr/api/v1/types");
      const data = await res.json();
      const shuffled = data.sort(() => 0.5 - Math.random());
      setRandomTypes(
        shuffled.slice(0, 3).map((type) => ({
          name: type.name,
          image: `/types/${type.englishName.toLowerCase()}.png`,
        }))
      );
    };

    fetchRandomTypes();
  }, []);

  return randomTypes;
};
