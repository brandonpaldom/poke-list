import Image from 'next/image'
import Link from 'next/link'

export default function NoFavorites() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-center">
      <Image src="/favicon.png" alt="Pokemon" width={64} height={64} />
      <h1>You don&apos;t have any favorites yet</h1>
      <p className="text-neutral-500">
        Go back to the home page and add some favorites
      </p>
      <div className="flex justify-center">
        <Link
          href="/"
          className="rounded-lg bg-yellow-400 px-8 py-2 font-bold text-black transition-colors duration-300 hover:bg-yellow-500"
        >
          Go back
        </Link>
      </div>
    </div>
  )
}
