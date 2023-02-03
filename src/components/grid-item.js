import Link from 'next/link'
import Image from 'next/image'

export default function GridItem({ pokemon: { name, image } }) {
  return (
    <Link href={`/pokemon/${name}`} className="group flex flex-col gap-2">
      <div className="aspect-square rounded-lg bg-neutral-900 p-4">
        <Image
          src={image}
          alt={name}
          width={475}
          height={475}
          className="transform transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>
      <h2>{name}</h2>
    </Link>
  )
}
