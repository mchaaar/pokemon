'use client';

import Link from "next/link";
import Image from "next/image";
import { useRandomTypes } from "@/app/hooks/useRandomTypes";

export default function RandomTypes() {
  const randomTypes = useRandomTypes();

  return (
    <div className="grid grid-cols-3 gap-4">
      {randomTypes.map((type, index) => (
        <Link key={index} href={`/types/${type.name.toLowerCase()}`}>
          <div className="flex flex-col items-center p-4 border rounded hover:shadow-lg">
            <div className="transition-transform duration-300 ease-in-out transform hover:scale-110">
              <Image
                src={type.image}
                alt={type.name}
                width={50}
                height={50}
                className="mb-2"
              />
            </div>
            <p className="text-center capitalize">{type.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
