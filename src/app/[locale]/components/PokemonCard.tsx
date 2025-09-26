'use client';
import Link from 'next/link';
import { BgColorTypes, BorderColorTypes, getMainTypeName } from '../lib/pokeColors';

type Props = {
  id: number;
  name: string;
  types: { type: { name: string } }[];
};

export default function PokemonCard({ id, name, types }: Props) {
  const mainType = getMainTypeName(types);
  const border = BorderColorTypes[mainType];
  const badgeBg = BgColorTypes[mainType];

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link
      href={`/${id}`}
      className={`block rounded-2xl border-4 ${border} bg-white shadow-sm hover:shadow-md transition`}
    >
      <div className="p-5 flex flex-col items-center">
        {/* Contenedor de imagen: altura fija responsiva, SIN recortes */}
        <div className="w-full rounded-xl bg-slate-100 grid place-items-center h-56 sm:h-60 md:h-64">
          <img
            src={imgUrl}
            alt={name}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Texto siempre visible (color forzado) */}
        <h3 className="mt-4 text-lg font-bold capitalize text-gray-900 text-center">
          {name}
        </h3>

        {/* Badge con tus colores */}
        <span
          className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeBg}`}
        >
          {mainType}
        </span>
      </div>
    </Link>
  );
}
