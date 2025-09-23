import {NextIntlClientProvider} from 'next-intl';
import type {Metadata} from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import '../globals.css';


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

export const metadata: Metadata = {
  title: 'PokeApp',
  description: '',
};

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className="min-h-dvh flex flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 bg-[#D9E9FE] text-white">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
