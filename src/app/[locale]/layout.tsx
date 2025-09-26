import {NextIntlClientProvider} from 'next-intl';
//import type {Metadata} from 'next'; //por ahora no lo usamos en este caso
import Header from './components/Header';
import Footer from './components/Footer';
import '../globals.css';




export const metadata = {
  icons: { icon: '/pokeball.svg', shortcut: '/pokeball.svg', apple: '/pokeball.svg' }
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
