import {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import PokemonDetail from '../components/PokemonDetail';

// 👇 tipa params como Promise y haz await antes de usarlo
type RouteParams = { locale: string; id: string };

async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('No se pudo cargar el Pokémon');
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  // Si necesitas algo de params aquí, primero:
  const { id } = await params; // opcional si no lo usas
  return {
    title: 'Detalle del Pokémon',
    description: 'detalle del Pokémon seleccionado',
  };
}

export default async function DetailPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { id } = await params;
  const t = await getTranslations('DetailPage');
  const p = await getPokemon(id);

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
