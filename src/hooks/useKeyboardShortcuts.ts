import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'

interface Options {
  onOpenSearch?: () => void
}

export function useKeyboardShortcuts({ onOpenSearch }: Options = {}) {
  const navigate = useNavigate()

  useEffect(() => {
    function handle(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName.toLowerCase()
      const isInput = tag === 'input' || tag === 'textarea' || tag === 'select'

      if (e.key === 'Escape') {
        // Close any overlay — handled by individual components listening to Escape
        return
      }

      if (isInput) return

      if (e.key === '/' || e.key === 's') {
        e.preventDefault()
        onOpenSearch?.()
      }

      if (e.key === 'r' || e.key === 'R') {
        const raga = ALL_RAGAS[Math.floor(Math.random() * ALL_RAGAS.length)]
        navigate(`/raaga/${raga.id}`)
      }
    }

    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [navigate, onOpenSearch])
}
