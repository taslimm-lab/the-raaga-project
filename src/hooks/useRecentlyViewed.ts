import { useState, useEffect } from 'react'

const KEY = 'raag-recently-viewed'
const MAX = 5

export function useRecentlyViewed() {
  const [recent, setRecent] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(recent))
  }, [recent])

  function addRecent(id: string) {
    setRecent(prev => [id, ...prev.filter(r => r !== id)].slice(0, MAX))
  }

  return { recent, addRecent }
}
