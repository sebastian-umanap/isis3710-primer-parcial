import Image from 'next/image'; //uso image de next es un poco más optimizada y no da problemas con las APIS porque la imagen está local
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#E71309]">
      <div className="mx-auto max-w-5xl py-4 flex justify-center">
        <Link href="/">
          <Image src="/pokemon-logo.png" alt="Pokémon" width={180} height={60} priority/> 
        </Link>
      </div>
    </header>
  );
}
