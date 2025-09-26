import {getTranslations} from 'next-intl/server'; //se usa este para evitar problemas con el ASYNC

export default async function Footer() {
  const t = await getTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#11463B] text-white">
      <div className="mx-auto max-w-5xl py-4 px-4 text-sm opacity-90 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div> &copy; {year} {t('appName')}. {t('rights')}</div>
        <div>{t('builtFor')} ISIS3710</div>
      </div>
    </footer>
  );
}
