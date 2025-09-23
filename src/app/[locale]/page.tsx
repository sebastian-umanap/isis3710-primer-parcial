import {useTranslations} from 'next-intl';
import PokemonCard from './components/PokemonCard';
import { use } from 'react';

async function getFirst15() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15', { next: { revalidate: 300 } });
  const data = await res.json();
  const details = await Promise.all(
    data.results.map(async (p: any) => {
      const d = await fetch(p.url).then(r => r.json());
      return d;
    })
  );
  return details;
}

export default function Home() {
  const pokemonData = use(getFirst15());
  const t = useTranslations('HomePage');
  console.log(t);
  return (
    <div>
      <h1>{("title")}</h1>
    <section className="mx-auto max-w-5xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pokemonData.map((p: any) => (
        <PokemonCard key={p.id} id={p.id} name={p.name} types={p.types} />
      ))}
    </section>
    </div>
    
  );
}






