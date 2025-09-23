import {Metadata} from 'next';
import { useTranslations } from 'next-intl';


//Colores del Background para Tailwind
const BgColorTypes = {
 bug: 'bg-[#a8b820]',
 dark: 'bg-[#705848]',
 dragon: 'bg-[#7038f8]',
 electric: 'bg-[#f8d030]',
 fairy: 'bg-[#f0a6f7]',
fighting: 'bg-[#c03028]',
 fire: 'bg-[#f08030]',
 flying: 'bg-[#a890f0]',
 ghost: 'bg-[#705898]',
 grass: 'bg-[#78c850]',
 ground: 'bg-[#e0c068]',
 ice: 'bg-[#98d8d8]',
 normal: 'bg-[#a8a878]',
 poison: 'bg-[#a040a0]',
 psychic: 'bg-[#f85888]',
 rock: 'bg-[#b8a038]',
 water: 'bg-[#6890f0]',
 }
 //Colores del Border para Tailwind
 const BorderColorTypes = {
 bug: 'border-[#a8b820]',
 dark: 'border-[#705848]',
 dragon: 'border-[#7038f8]',
 electric: 'border-[#f8d030]',
 fairy: 'border-[#f0a6f7]',
 fighting: 'border-[#c03028]',
 fire: 'border-[#f08030]',
 flying: 'border-[#a890f0]',
 ghost: 'border-[#705898]',
 grass: 'border-[#78c850]',
 ground: 'border-[#e0c068]',
 ice: 'border-[#98d8d8]',
 normal: 'border-[#a8a878]',
 poison: 'border-[#a040a0]',
 psychic: 'border-[#f85888]',
 rock: 'border-[#b8a038]',
 water: 'border-[#6890f0]',
 }


type Params = { params: { id: string } };

async function getPokemon(id: string) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: 'no-store' }).then(r => r.json());
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: 'Detalle del Pokémon',
    description:
      "detalle del Pokémon seleccionado",
  };
}

export default async function DetailPage({ params }: Params) {
  const p = await getPokemon(params.id);
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;
  const alturaCm = p.height * 10;
  const pesoKg = (p.weight / 10);
  

  return (
    <section className="mx-auto max-w-4xl px-4 py-8 text-white">
    <h1 className="text-3xl font-bold capitalize mb-2">{p.name}- Detalles del pokemon</h1>

    <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-2xl bg-white/20">
                <img src={imgUrl} alt={p.name} className="w-full h-full object-contain" />
            </div>
        <div>
            <p className="mb-1"><strong>Altura:</strong> {alturaCm} cm</p>
            <p className="mb-1"><strong>Peso:</strong> {pesoKg} kg</p>
            <p className="mb-1">
                <strong>Habilidades:</strong> {p.abilities.map((a:any)=>a.ability.name).join(', ')}
            </p>
            <p className="mb-1">
                <strong >Tipos:</strong> {p.types.map((t:any)=>t.type.name).join(', ')}
            </p>

        </div>
    </div>
    </section>
  );
}