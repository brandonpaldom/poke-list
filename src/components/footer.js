import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 text-neutral-500">
        <p>PokéList</p>
        <p>
          Created by{' '}
          <Link
            href="https://brandonpalmeros.dev/"
            rel="noopener"
            target="_blank"
            className="underline"
          >
            Brandon Palmeros
          </Link>
        </p>
      </div>
    </footer>
  )
}
