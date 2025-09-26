import {useTranslations} from 'next-intl';
import { getTranslations } from 'next-intl/server';
import PokemonList from './components/PokemonList';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta.Home');
  return {
    title: t('title'),      
    description: t('desc'),
  };
}

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className="text-center text-[#0b2a3c] font-extrabold text-2xl md:text-3xl my-6">{t("title")}</h1>
      <PokemonList />
    </div>
    
  );
}






