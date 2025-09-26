export const BgColorTypes = {
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
};

export const BorderColorTypes = {
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
};

// esto lo hago simplemente para evitar errores y no volver a repetir los colores y tipos cuando los necesite.
export function getMainTypeName(types: { type: { name: string } }[] = []) {
  const n = types?.[0]?.type?.name ?? 'normal';
  return (n in BgColorTypes ? n : 'normal') as keyof typeof BgColorTypes;
}
