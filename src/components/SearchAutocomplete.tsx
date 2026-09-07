import { useState, useRef, useEffect, type Ref } from 'react'
import { useNavigate } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'

interface Props {
  placeholder?: string
  className?: string
  inputClassName?: string
  onSearch?: () => void
  inputRef?: Ref<HTMLInputElement>
}

export default function SearchAutocomplete({ placeholder = 'Search ragas…', className = '', inputClassName = '', onSearch, inputRef }: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const suggestions = query.trim().length >= 1
    ? ALL_RAGAS
        .filter(r =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.thaat.toLowerCase().includes(query.toLowerCase()) ||
          r.rasa.some(rs => rs.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 6)
    : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function go(id: string) {
    setQuery('')
    setOpen(false)
    navigate(`/raaga/${id}`)
    onSearch?.()
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (suggestions.length === 1) { go(suggestions[0].id); return }
    if (query.trim()) {
      navigate(`/library?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
      setOpen(false)
      onSearch?.()
    }
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">search</span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className={`pl-9 pr-4 py-2 rounded-full bg-surface-container-high border border-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-full ${inputClassName}`}
        />
      </form>

      {open && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container border border-outline-variant rounded-2xl shadow-xl z-50 overflow-hidden">
          {suggestions.map(r => (
            <button
              key={r.id}
              onMouseDown={() => go(r.id)}
              className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-surface-container-high transition-colors text-left"
            >
              <div>
                <p className="text-sm font-medium text-on-surface">{r.name}</p>
                <p className="text-xs text-on-surface-variant">{r.thaat} · {r.time}</p>
              </div>
              <div className="flex gap-1">
                {r.rasa.slice(0, 1).map(rs => (
                  <span key={rs} className="px-2 py-0.5 bg-primary-container text-on-primary-container rounded-full text-[10px]">{rs}</span>
                ))}
              </div>
            </button>
          ))}
          <div className="border-t border-outline-variant px-4 py-2">
            <button
              onMouseDown={handleSubmit as never}
              className="text-xs text-primary hover:underline"
            >
              See all results for "{query}"
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
