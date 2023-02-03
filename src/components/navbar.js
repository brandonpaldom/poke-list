import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 text-white">
        <Link href="/">
          <Image
            src="/pokemon.svg"
            alt="Pokemon"
            width={269}
            height={99}
            className="h-8 w-auto"
          />
        </Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  )
}
