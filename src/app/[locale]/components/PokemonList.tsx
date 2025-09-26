import PokemonCard from './PokemonCard';

type PokeType = { type: { name: string } };
type PokeDetail = {
  id: number;
  name: string;
  types: PokeType[];
};

async function getFirst15(): Promise<PokeDetail[]> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15', {
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error('Error fetching Pokémon list');

  const data = await res.json();
  const details: PokeDetail[] = await Promise.all(
    data.results.map(async (p: any) => {
      const d = await fetch(p.url, { next: { revalidate: 300 } }).then(r => r.json());
      return {
        id: d.id,
        name: d.name,
        types: d.types, 
      } as PokeDetail;
    })
  );

  return details;
}

export default async function PokemonList() {
  const pokemonData = await getFirst15();

  return (
    <section className="mx-auto max-w-5xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pokemonData.map((p) => (
        <PokemonCard key={p.id} id={p.id} name={p.name} types={p.types} />
      ))}
    </section>
  );
}
