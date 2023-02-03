import Head from 'next/head'
import GridContainer from '@/components/grid-container'

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>PokéList</title>
        <meta name="description" content="PokéList" />
      </Head>
      <GridContainer pokemons={pokemons} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?limit=151}`)
  const data = await res.json()

  const pokemons = data.results.map((pokemon, i) => {
    const id = i + 1
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return {
      ...pokemon,
      image,
    }
  })

  return {
    props: {
      pokemons,
    },
  }
}
