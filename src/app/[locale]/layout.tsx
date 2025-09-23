import {NextIntlClientProvider} from 'next-intl';
import type {Metadata} from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import '../globals.css';




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
