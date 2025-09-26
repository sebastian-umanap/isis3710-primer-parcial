import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server'; //evitar problemas con el ASYNC
import { notFound } from 'next/navigation';
import PokemonDetail from '../components/PokemonDetail';

type RouteParams = { locale: string; id: string };

async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('No se pudo cargar el Pokémon');
  return res.json();
}

export async function generateMetadata({
  params,
}: { params: Promise<RouteParams> }): Promise<Metadata> {
  const t = await getTranslations('Meta.Detail');
  return {
    title: t('title'),       
    description: t('desc'), 
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { id } = await params;
  const t = await getTranslations('DetailPage');
  const p = await getPokemon(id);

  if (!p) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-center text-[#0b2a3c] font-extrabold text-xl md:text-2xl mb-4 capitalize">
        {p.name} - {t('title')}
      </h1>

      <PokemonDetail
        id={p.id}
        name={p.name}
        height={p.height}
        weight={p.weight}
        abilities={p.abilities}
        types={p.types}
        labels={{
          height: t('labels.height'),
          weight: t('labels.weight'),
          abilities: t('labels.abilities'),
          types: t('labels.types'),
        }}
      />
    </section>
  );
}
