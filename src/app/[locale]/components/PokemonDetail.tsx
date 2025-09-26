import { BgColorTypes, BorderColorTypes, getMainTypeName } from '../lib/pokeColors';

type PokeType = { type: { name: string } };
type Ability = { ability: { name: string } };

type Labels = {
  height: string;
  weight: string;
  abilities: string;
  types: string;
};

type Props = {
  id: number;
  name: string;
  height: number;
  weight: number; 
  abilities: Ability[];
  types: PokeType[];
  labels: Labels;
};

export default function PokemonDetail({ id, name, height, weight, abilities, types, labels }: Props) {
  const mainType = getMainTypeName(types);
  const border = BorderColorTypes[mainType];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const alturaCm = height * 10;
  const pesoKg = weight / 10;
  const fmt = (s: string) => s.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className={`rounded-2xl border-4 ${border} bg-white p-4`}>
        <div className="aspect-square w-full rounded-xl bg-slate-100 overflow-hidden grid place-items-center">
          <img src={imgUrl} alt={name} className="max-w-full max-h-full object-contain" />
        </div>
      </div>

      <div className="text-gray-900">
        <p className="mb-1"><strong>{labels.height}:</strong> {alturaCm} cm</p>
        <p className="mb-1"><strong>{labels.weight}:</strong> {pesoKg} kg</p>

        <div className="mt-3">
          <p className="font-semibold">{labels.abilities}:</p>
          <ul className="list-disc list-inside">
            {abilities.map(a => (
              <li key={a.ability.name} className="capitalize">{fmt(a.ability.name)}</li>
            ))}
          </ul>
        </div>

        <div className="mt-3">
          <p className="font-semibold">{labels.types}:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {types.map(t => {
              const typeName = t.type.name as keyof typeof BgColorTypes;
              const badge = BgColorTypes[typeName] ?? BgColorTypes.normal;
              return (
                <span
                  key={typeName}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white capitalize ${badge}`}
                >
                  {typeName}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
