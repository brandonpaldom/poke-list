import Image from 'next/image'
import Link from 'next/link'

export default function FavoriteGridItem({ pokemon }) {
  const [name, id] = pokemon

  return (
    <Link href={`/pokemon/${name}`} className="group flex flex-col gap-2">
      <div className="aspect-square rounded-lg bg-neutral-900 p-4">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
          width={475}
          height={475}
          className="transform transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>
    </Link>
  )
}
