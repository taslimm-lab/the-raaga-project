import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import type { RaagaRow } from '../data/raagasData'
import { usePageMeta } from '../hooks/usePageMeta'

function RagaPicker({ value, onChange, exclude }: { value: RaagaRow | null; onChange: (r: RaagaRow) => void; exclude?: string }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const results = query.length >= 1
    ? ALL_RAGAS.filter(r => r.id !== exclude && r.name.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : []

  return (
    <div className="relative">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
        <input
          type="text"
          value={value && !open ? value.name : query}
          onFocus={() => { setQuery(''); setOpen(true) }}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search a raga…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container border border-outline-variant rounded-xl shadow-lg z-20 overflow-hidden">
          {results.map(r => (
            <button key={r.id} onMouseDown={() => { onChange(r); setQuery(''); setOpen(false) }}
              className="w-full text-left px-4 py-2.5 hover:bg-surface-container-high text-sm text-on-surface flex justify-between">
              <span>{r.name}</span>
              <span className="text-xs text-on-surface-variant">{r.thaat}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const ROWS: { label: string; key: keyof RaagaRow }[] = [
  { label: 'Thaat', key: 'thaat' },
  { label: 'Jati', key: 'jati' },
  { label: 'Time', key: 'time' },
  { label: 'Vadi', key: 'vadi' },
  { label: 'Samvadi', key: 'samvadi' },
  { label: 'Arohana', key: 'arohana' },
  { label: 'Avarohana', key: 'avarohana' },
  { label: 'Pakad', key: 'pakad' },
  { label: 'Nature', key: 'nature' },
  { label: 'Film Songs', key: 'songCount' },
]

export default function Compare() {
  const [left, setLeft] = useState<RaagaRow | null>(null)
  const [right, setRight] = useState<RaagaRow | null>(null)

  usePageMeta({
    title: 'Compare Ragas — Side by Side',
    description: 'Compare two Indian classical ragas side by side — thaat, jati, vadi, arohana, avarohana, pakad, and more.',
  })

  function isSame(key: keyof RaagaRow): boolean {
    if (!left || !right) return false
    const l = left[key], r = right[key]
    if (Array.isArray(l) && Array.isArray(r)) return JSON.stringify(l) === JSON.stringify(r)
    return l === r
  }

  function isDiff(key: keyof RaagaRow): boolean {
    if (!left || !right) return false
    return !isSame(key)
  }

  function displayVal(raga: RaagaRow, key: keyof RaagaRow) {
    const val = raga[key]
    if (Array.isArray(val)) return val.join(', ')
    return String(val)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link to="/library" className="text-sm text-primary hover:underline flex items-center gap-1 mb-4">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Library
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-2">Compare Ragas</h1>
        <p className="text-on-surface-variant text-sm">Select two ragas to compare their musical anatomy side by side.</p>
      </div>

      {/* Pickers */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div>
          <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-2">Raga A</p>
          <RagaPicker value={left} onChange={setLeft} exclude={right?.id} />
        </div>
        <div>
          <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-2">Raga B</p>
          <RagaPicker value={right} onChange={setRight} exclude={left?.id} />
        </div>
      </div>

      {/* Comparison table */}
      {left && right && (
        <div className="rounded-2xl border border-outline-variant overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-surface-container-high">
            <div className="px-4 py-3 text-xs font-medium text-on-surface-variant uppercase tracking-wider">Attribute</div>
            <div className="px-4 py-3 border-l border-outline-variant">
              <p className="font-serif font-semibold text-on-background">{left.name}</p>
              <p className="text-xs text-on-surface-variant">{left.thaat} Thaat</p>
            </div>
            <div className="px-4 py-3 border-l border-outline-variant">
              <p className="font-serif font-semibold text-on-background">{right.name}</p>
              <p className="text-xs text-on-surface-variant">{right.thaat} Thaat</p>
            </div>
          </div>

          {ROWS.map(({ label, key }) => (
            <div
              key={key}
              className={`grid grid-cols-3 border-t border-outline-variant ${isDiff(key) ? 'bg-primary-container/10' : ''}`}
            >
              <div className="px-4 py-3 text-xs text-on-surface-variant font-medium flex items-center gap-2">
                {label}
                {isDiff(key) && <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" title="Different" />}
              </div>
              <div className="px-4 py-3 border-l border-outline-variant text-sm text-on-surface font-mono">
                {displayVal(left, key)}
              </div>
              <div className="px-4 py-3 border-l border-outline-variant text-sm text-on-surface font-mono">
                {displayVal(right, key)}
              </div>
            </div>
          ))}

          {/* Rasa row */}
          <div className={`grid grid-cols-3 border-t border-outline-variant ${isDiff('rasa') ? 'bg-primary-container/10' : ''}`}>
            <div className="px-4 py-3 text-xs text-on-surface-variant font-medium flex items-center gap-2">
              Rasa
              {isDiff('rasa') && <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />}
            </div>
            <div className="px-4 py-3 border-l border-outline-variant flex flex-wrap gap-1">
              {left.rasa.map(r => <span key={r} className="px-2 py-0.5 bg-primary-container text-on-primary-container rounded-full text-xs">{r}</span>)}
            </div>
            <div className="px-4 py-3 border-l border-outline-variant flex flex-wrap gap-1">
              {right.rasa.map(r => <span key={r} className="px-2 py-0.5 bg-primary-container text-on-primary-container rounded-full text-xs">{r}</span>)}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 border-t border-outline-variant bg-surface-container-low">
            <div className="px-4 py-3" />
            <div className="px-4 py-3 border-l border-outline-variant">
              <Link to={`/raaga/${left.id}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                Full detail
              </Link>
            </div>
            <div className="px-4 py-3 border-l border-outline-variant">
              <Link to={`/raaga/${right.id}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                Full detail
              </Link>
            </div>
          </div>
        </div>
      )}

      {(!left || !right) && (
        <div className="text-center py-16 text-on-surface-variant">
          <span className="material-symbols-outlined text-5xl opacity-20 block mb-3">compare</span>
          <p className="text-sm">Select both ragas above to see a comparison</p>
        </div>
      )}
    </div>
  )
}
