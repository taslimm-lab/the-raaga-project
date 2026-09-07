import { useState, useEffect } from 'react'

const KEY = 'raag-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favorites))
  }, [favorites])

  function toggle(id: string) {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  function isFavorite(id: string) {
    return favorites.includes(id)
  }

  return { favorites, toggle, isFavorite }
}
