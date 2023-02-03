let favoritesCache

function getFavorites() {
  if (!favoritesCache) {
    try {
      favoritesCache = JSON.parse(localStorage.getItem('favorites') || '[]')
    } catch (e) {
      console.error(e)
      favoritesCache = []
    }
  }
  return favoritesCache
}

function updateFavorites(favorites) {
  favoritesCache = favorites
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  } catch (e) {
    console.error(e)
  }
}

export function saveFavorite([name, id]) {
  if (typeof window === 'undefined') return
  const favorites = getFavorites()
  const index = favorites.findIndex((favorite) => favorite[1] === id)
  if (index === -1) {
    favorites.push([name, id])
  } else {
    favorites.splice(index, 1)
  }
  updateFavorites(favorites)
}

export function isFavorite([name, id]) {
  if (typeof window === 'undefined') return
  const favorites = getFavorites()
  return favorites.findIndex((favorite) => favorite[1] === id) !== -1
}

export function getFavoritesCount() {
  if (typeof window === 'undefined') return
  return getFavorites()
}
