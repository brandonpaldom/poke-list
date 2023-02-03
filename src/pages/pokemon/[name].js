import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { saveFavorite, isFavorite } from '@/utils/localFavorite'
import confetti from 'canvas-confetti'

export default function Pokemon({ pokemon }) {
  const [favorite, setFavorite] = useState(
    isFavorite([pokemon.name, pokemon.id])
  )

  const {
    name,
    id,
    height,
    weight,
    base_experience,
    sprites,
    types,
    abilities,
    stats,
  } = pokemon

  const title = `${name.charAt(0).toUpperCase() + name.slice(1)} | PokéList`

  const toggleFavorite = () => {
    saveFavorite([name, id])
    setFavorite(!favorite)

    if (!favorite) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
        {/* col 1 */}
        <div className="flex flex-col gap-4">
          {/* name section */}
          <div className="flex justify-between gap-4 rounded-lg bg-neutral-900 p-4">
            <h1>{name}</h1>
            <span className="text-[1.5rem] font-bold">#{id}</span>
          </div>
          {/* image section */}
          <div className="relative aspect-square rounded-lg bg-neutral-900 p-4">
            <Image
              src={sprites.other['official-artwork'].front_default}
              alt={name}
              width={475}
              height={475}
              priority
            />
            <button
              onClick={toggleFavorite}
              className={`absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 transition-colors duration-300 ${
                favorite && 'bg-pink-500'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
                className={`fill-current text-neutral-500 transition-colors duration-300 ${
                  favorite && 'text-white'
                }`}
              >
                <path d="m21.95 40.2-2.65-2.45Q13.1 32 8.55 26.775T4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.55 0 5.05 1.225T24 10.55q2.2-2.8 4.55-4.025Q30.9 5.3 33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 5.7-4.55 10.925Q34.9 32 28.7 37.75l-2.65 2.45q-.85.8-2.05.8-1.2 0-2.05-.8Z" />
              </svg>
            </button>
          </div>
          {/* stats section */}
          <div className="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4">
            <h2>Stats</h2>
            <div className="grid grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div
                  key={stat.stat.name}
                  className="flex justify-between rounded-lg bg-neutral-800 py-2 px-4 text-[0.875rem]"
                >
                  <span className="font-bold capitalize">{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="flex flex-col gap-4">
          {/* basic info section */}
          <div className="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4">
            <h2>Basic Info</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex justify-between rounded-lg bg-neutral-800 py-2 px-4 text-[0.875rem]">
                <span className="font-bold">Height</span>
                <span>{height / 10} m</span>
              </div>
              <div className="flex justify-between rounded-lg bg-neutral-800 py-2 px-4 text-[0.875rem]">
                <span className="font-bold">Weight</span>
                <span>{weight / 10} kg</span>
              </div>
              <div className="flex justify-between rounded-lg bg-neutral-800 py-2 px-4 text-[0.875rem]">
                <span className="font-bold">Base experience</span>
                <span>{base_experience}</span>
              </div>
            </div>
          </div>
          {/* Abilities section */}
          <div className="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4">
            <h2>Abilities</h2>
            <div className="grid grid-cols-2 gap-2">
              {abilities.map((ability) => (
                <div
                  key={ability.ability.name}
                  className="flex justify-between rounded-lg bg-neutral-800 py-2 px-4 text-[0.875rem]"
                >
                  <span className="font-bold capitalize">
                    {ability.ability.name}
                  </span>
                  <span>{ability.slot}</span>
                </div>
              ))}
            </div>
          </div>
          {/* type section */}
          <div className="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4">
            <h2>Type</h2>
            <div className="grid grid-cols-2 gap-2">
              {types.map((type) => (
                <div
                  key={type.type.name}
                  className="flex justify-between rounded-lg bg-neutral-800 py-2 px-4 text-[0.875rem]"
                >
                  <span className="font-bold capitalize">{type.type.name}</span>
                  <span>{type.slot}</span>
                </div>
              ))}
            </div>
          </div>
          {/* sprites section */}
          <div className="flex flex-col gap-4 rounded-lg bg-neutral-900 p-4">
            <h2>Sprites</h2>
            <div className="grid grid-cols-4 gap-2">
              <Image
                src={sprites.front_default}
                alt={name}
                width={96}
                height={96}
                className="rounded-lg transition-colors duration-300 hover:bg-neutral-800"
              />
              <Image
                src={sprites.back_default}
                alt={name}
                width={96}
                height={96}
                className="rounded-lg transition-colors duration-300 hover:bg-neutral-800"
              />
              <Image
                src={sprites.front_shiny}
                alt={name}
                width={96}
                height={96}
                className="rounded-lg transition-colors duration-300 hover:bg-neutral-800"
              />
              <Image
                src={sprites.back_shiny}
                alt={name}
                width={96}
                height={96}
                className="rounded-lg transition-colors duration-300 hover:bg-neutral-800"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="rounded-lg bg-yellow-400 px-8 py-2 font-bold text-black transition-colors duration-300 hover:bg-yellow-500"
        >
          Go back
        </Link>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?limit=151}`)
  const data = await res.json()

  const paths = data.results.map((pokemon) => ({
    params: { name: pokemon.name },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params.name}`)

  if (!res.ok) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const data = await res.json()

  const pokemon = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
    sprites: data.sprites,
    types: data.types,
    abilities: data.abilities,
    stats: data.stats,
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  }
}
