import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ALL_RAGAS, ALL_THAATS } from '../data/raagasData'

const PRAHARS = [
  { label: 'Dawn', icon: '🌅', times: ['Early Morning', 'Morning'] },
  { label: 'Midday', icon: '☀️', times: ['Afternoon'] },
  { label: 'Dusk', icon: '🌆', times: ['Evening'] },
  { label: 'Night', icon: '🌙', times: ['Night', 'Late Night'] },
  { label: 'Anytime', icon: '✨', times: ['Any Time'] },
]

const RASAS = [
  { name: 'Shringar', emoji: '❤️', desc: 'Love & Beauty' },
  { name: 'Karuna', emoji: '💧', desc: 'Compassion' },
  { name: 'Bhakti', emoji: '🙏', desc: 'Devotion' },
  { name: 'Shanta', emoji: '☮️', desc: 'Peace' },
  { name: 'Veera', emoji: '⚔️', desc: 'Heroism' },
  { name: 'Raudra', emoji: '🔥', desc: 'Fury' },
  { name: 'Hasya', emoji: '😄', desc: 'Joy' },
  { name: 'Gambhir', emoji: '🏔️', desc: 'Gravity' },
]

const PAGE_SIZE = 20

export default function Library() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('q') ?? '')
  const [prahar, setPrahar] = useState<string | null>(null)
  const [rasa, setRasa] = useState<string | null>(null)
  const [thaat, setThaat] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = ALL_RAGAS

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.thaat.toLowerCase().includes(q) ||
        r.nature.toLowerCase().includes(q)
      )
    }

    if (prahar) {
      const p = PRAHARS.find(p => p.label === prahar)
      if (p) list = list.filter(r => p.times.includes(r.time))
    }

    if (rasa) {
      list = list.filter(r => r.rasa.includes(rasa))
    }

    if (thaat) {
      list = list.filter(r => r.thaat === thaat)
    }

    return list
  }, [search, prahar, rasa, thaat])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function reset() {
    setSearch('')
    setPrahar(null)
    setRasa(null)
    setThaat(null)
    setPage(1)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs text-primary uppercase tracking-wider font-medium mb-1">The Complete Archive</p>
        <h1 className="font-serif text-4xl font-semibold text-on-background">Raaga Library</h1>
        <p className="text-on-surface-variant mt-2">{ALL_RAGAS.length} ragas documented across {ALL_THAATS.length} thaats</p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input
          type="text"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          placeholder="Search by raga name, thaat, nature…"
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">close</span>
          </button>
        )}
      </div>

      {/* Prahar Filter */}
      <div className="mb-5">
        <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-3">Filter by Time (Prahar)</p>
        <div className="flex flex-wrap gap-2">
          {PRAHARS.map(p => (
            <button
              key={p.label}
              onClick={() => { setPrahar(prahar === p.label ? null : p.label); setPage(1) }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                prahar === p.label
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span>{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rasa Filter */}
      <div className="mb-5">
        <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-3">Filter by Rasa (Emotion)</p>
        <div className="flex flex-wrap gap-2">
          {RASAS.map(r => (
            <button
              key={r.name}
              onClick={() => { setRasa(rasa === r.name ? null : r.name); setPage(1) }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                rasa === r.name
                  ? 'bg-secondary text-on-secondary border-secondary'
                  : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span>{r.emoji}</span>
              {r.name}
              <span className="text-xs opacity-60">{r.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Thaat filter */}
      <div className="mb-8">
        <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-3">Filter by Thaat</p>
        <div className="flex flex-wrap gap-2">
          {ALL_THAATS.map(t => (
            <button
              key={t}
              onClick={() => { setThaat(thaat === t ? null : t); setPage(1) }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                thaat === t
                  ? 'bg-tertiary text-on-tertiary border-tertiary'
                  : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Active filters */}
      {(prahar || rasa || thaat || search) && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-on-surface-variant">{filtered.length} results</span>
          <button onClick={reset} className="text-xs text-primary hover:underline ml-auto">Clear all filters</button>
        </div>
      )}

      {/* Table */}
      <div className="rounded-2xl border border-outline-variant overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container text-on-surface-variant text-left">
              <th className="px-4 py-3 font-medium">Raga</th>
              <th className="px-4 py-3 font-medium hidden sm:table-cell">Thaat</th>
              <th className="px-4 py-3 font-medium hidden md:table-cell">Time</th>
              <th className="px-4 py-3 font-medium hidden lg:table-cell">Rasa</th>
              <th className="px-4 py-3 font-medium text-right">Songs</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((raga, i) => (
              <tr
                key={raga.id}
                className={`border-t border-outline-variant hover:bg-surface-container-low transition-colors ${i % 2 === 0 ? '' : 'bg-surface-container-lowest'}`}
              >
                <td className="px-4 py-3">
                  <Link to={`/raaga/${raga.id}`} className="flex items-center gap-2 group">
                    <div>
                      <span className="font-medium text-on-surface group-hover:text-primary transition-colors">{raga.name}</span>
                      {raga.isCurated && (
                        <span className="ml-2 px-1.5 py-0.5 bg-primary-container text-on-primary-container rounded text-[10px]">Featured</span>
                      )}
                      <p className="text-xs text-on-surface-variant sm:hidden">{raga.thaat}</p>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-3 text-on-surface-variant hidden sm:table-cell">{raga.thaat}</td>
                <td className="px-4 py-3 text-on-surface-variant hidden md:table-cell">{raga.time}</td>
                <td className="px-4 py-3 hidden lg:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {raga.rasa.slice(0, 2).map(r => (
                      <span key={r} className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded-full text-xs">{r}</span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${raga.songCount > 0 ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant'}`}>
                    {raga.songCount > 0 ? raga.songCount : '—'}
                  </span>
                </td>
              </tr>
            ))}
            {pageItems.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-16 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-5xl mb-3 block opacity-30">search_off</span>
                  No ragas found for your filters.
                  <button onClick={reset} className="block mx-auto mt-2 text-sm text-primary hover:underline">Clear filters</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full border border-outline-variant text-sm disabled:opacity-40 hover:bg-surface-container transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-on-surface-variant">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full border border-outline-variant text-sm disabled:opacity-40 hover:bg-surface-container transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
