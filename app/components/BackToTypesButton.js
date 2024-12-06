'use client';

import Link from "next/link";

const BackToTypesButton = () => (
  <div className="flex justify-center mt-8">
    <Link href="/types">
      <button className="bg-gradient-to-r from-red-500 to-red-800 text-white px-4 py-2 rounded hover:from-red-600 hover:to-red-900 transition-all">
        Retour à la liste des types
      </button>
    </Link>
  </div>
);

export default BackToTypesButton;
