import { useEffect, useState } from 'react'
import Head from 'next/head'
import { getFavoritesCount } from '@/utils/localFavorite'
import NoFavorites from '@/components/no-favorites'
import FavoriteGridContainer from '@/components/favorite-grid-container'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(getFavoritesCount())
  }, [])

  return (
    <>
      <Head>
        <title>Favorites | PokéList</title>
        <meta name="description" content="Favorites | PokéList" />
      </Head>
      {favorites.length > 0 ? (
        <>
          <h1>Favorites</h1>
          <FavoriteGridContainer pokemons={favorites} />
        </>
      ) : (
        <NoFavorites />
      )}
    </>
  )
}
