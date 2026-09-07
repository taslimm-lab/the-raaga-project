import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { ALL_RAGAS, ALL_THAATS } from '../data/raagasData'
import AdSlot from '../components/AdSlot'
import { usePageMeta } from '../hooks/usePageMeta'
import { amazonMusicSongUrl, appleMusicSongUrl } from '../data/utils'
import FavoriteButton from '../components/FavoriteButton'

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

type SortKey = 'name' | 'thaat' | 'time' | 'songCount'
type SortDir = 'asc' | 'desc'
type ViewMode = 'table' | 'grid'

const PAGE_SIZE = 20

export default function Library() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()

  const [view, setView] = useState<ViewMode>('table')
  const [sortKey, setSortKey] = useState<SortKey>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  // Read filters from URL
  const search = params.get('q') ?? ''
  const prahar = params.get('prahar') ?? null
  const rasa = params.get('rasa') ?? null
  const thaat = params.get('thaat') ?? null
  const page = parseInt(params.get('page') ?? '1', 10)

  function updateParam(key: string, value: string | null) {
    const next = new URLSearchParams(params)
    if (value) {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    next.delete('page') // reset page on filter change
    setParams(next, { replace: true })
  }

  function setSearch(q: string) {
    const next = new URLSearchParams(params)
    if (q) { next.set('q', q) } else { next.delete('q') }
    next.delete('page')
    setParams(next, { replace: true })
  }

  function setPage(p: number) {
    const next = new URLSearchParams(params)
    if (p > 1) { next.set('page', String(p)) } else { next.delete('page') }
    setParams(next, { replace: true })
  }

  function reset() {
    setParams({}, { replace: true })
  }

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
    setPage(1)
  }

  const filtered = useMemo(() => {
    let list = [...ALL_RAGAS]

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

    list.sort((a, b) => {
      let cmp = 0
      if (sortKey === 'name') cmp = a.name.localeCompare(b.name)
      else if (sortKey === 'thaat') cmp = a.thaat.localeCompare(b.thaat)
      else if (sortKey === 'time') cmp = a.time.localeCompare(b.time)
      else if (sortKey === 'songCount') cmp = a.songCount - b.songCount
      return sortDir === 'asc' ? cmp : -cmp
    })

    return list
  }, [search, prahar, rasa, thaat, sortKey, sortDir])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  usePageMeta({
    title: 'Raag Library — Browse 174 Indian Classical Ragas',
    description: 'Search and filter 174 Indian classical ragas by thaat, time of day, and rasa (emotion). Each raga includes musical anatomy, film song connections, and more.',
  })

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <span className="material-symbols-outlined text-[14px] opacity-30 ml-0.5">unfold_more</span>
    return (
      <span className="material-symbols-outlined text-[14px] text-primary ml-0.5">
        {sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward'}
      </span>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-1">The Complete Archive</p>
          <h1 className="font-serif text-4xl font-semibold text-on-background">Raag Library</h1>
          <p className="text-on-surface-variant mt-2">{ALL_RAGAS.length} ragas documented across {ALL_THAATS.length} thaats</p>
        </div>
        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-surface-container rounded-full p-1 border border-outline-variant self-start">
          <button
            onClick={() => setView('table')}
            title="Table view"
            className={`p-2 rounded-full transition-colors ${view === 'table' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined text-[20px]">table_rows</span>
          </button>
          <button
            onClick={() => setView('grid')}
            title="Card view"
            className={`p-2 rounded-full transition-colors ${view === 'grid' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
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
              onClick={() => updateParam('prahar', prahar === p.label ? null : p.label)}
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
              onClick={() => updateParam('rasa', rasa === r.name ? null : r.name)}
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
              onClick={() => updateParam('thaat', thaat === t ? null : t)}
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

      {/* Active filter summary */}
      {(prahar || rasa || thaat || search) && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-on-surface-variant">{filtered.length} results</span>
          <div className="flex flex-wrap gap-1.5 ml-2">
            {search && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-surface-container rounded-full text-xs text-on-surface-variant">
                "{search}"
                <button onClick={() => setSearch('')} className="hover:text-primary">
                  <span className="material-symbols-outlined text-[12px]">close</span>
                </button>
              </span>
            )}
            {prahar && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-primary-container text-on-primary-container rounded-full text-xs">
                {prahar}
                <button onClick={() => updateParam('prahar', null)} className="hover:opacity-70">
                  <span className="material-symbols-outlined text-[12px]">close</span>
                </button>
              </span>
            )}
            {rasa && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs">
                {rasa}
                <button onClick={() => updateParam('rasa', null)} className="hover:opacity-70">
                  <span className="material-symbols-outlined text-[12px]">close</span>
                </button>
              </span>
            )}
            {thaat && (
              <span className="flex items-center gap-1 px-2.5 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs">
                {thaat}
                <button onClick={() => updateParam('thaat', null)} className="hover:opacity-70">
                  <span className="material-symbols-outlined text-[12px]">close</span>
                </button>
              </span>
            )}
          </div>
          <button onClick={reset} className="text-xs text-primary hover:underline ml-auto shrink-0">Clear all</button>
        </div>
      )}

      {/* Ad — above table */}
      <AdSlot slotId="6175523505" format="horizontal" />

      {/* Table View */}
      {view === 'table' && (
        <div className="rounded-2xl border border-outline-variant overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container text-on-surface-variant text-left">
                <th className="px-4 py-3">
                  <button onClick={() => handleSort('name')} className="flex items-center font-medium hover:text-primary transition-colors">
                    Raga <SortIcon col="name" />
                  </button>
                </th>
                <th className="px-4 py-3 hidden sm:table-cell">
                  <button onClick={() => handleSort('thaat')} className="flex items-center font-medium hover:text-primary transition-colors">
                    Thaat <SortIcon col="thaat" />
                  </button>
                </th>
                <th className="px-4 py-3 hidden md:table-cell">
                  <button onClick={() => handleSort('time')} className="flex items-center font-medium hover:text-primary transition-colors">
                    Time <SortIcon col="time" />
                  </button>
                </th>
                <th className="px-4 py-3 hidden lg:table-cell font-medium">Rasa</th>
                <th className="px-4 py-3 text-right">
                  <button onClick={() => handleSort('songCount')} className="flex items-center font-medium hover:text-primary transition-colors ml-auto">
                    Listen <SortIcon col="songCount" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map((raga, i) => (
                <tr
                  key={raga.id}
                  className={`border-t border-outline-variant hover:bg-surface-container-low transition-colors ${i % 2 === 0 ? '' : 'bg-surface-container-lowest'}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <FavoriteButton ragaId={raga.id} />
                      <Link to={`/raaga/${raga.id}`} className="flex items-center gap-2 group">
                        <div>
                          <span className="font-medium text-on-surface group-hover:text-primary transition-colors">{raga.name}</span>
                          {raga.isCurated && (
                            <span className="ml-2 px-1.5 py-0.5 bg-primary-container text-on-primary-container rounded text-[10px]">Featured</span>
                          )}
                          <p className="text-xs text-on-surface-variant sm:hidden">{raga.thaat}</p>
                        </div>
                      </Link>
                    </div>
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
                    {raga.songCount > 0 ? (
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={amazonMusicSongUrl(raga.name, '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Listen on Amazon Music"
                          className="p-1 rounded-full hover:bg-[#FF9900]/20 transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF9900"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.048-.872-1.236-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.927 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095V6.41c0-.677.051-1.475-.344-2.06-.346-.525-1.01-.742-1.594-.742-1.083 0-2.05.556-2.286 1.709-.049.258-.237.511-.494.523l-2.762-.298c-.232-.051-.491-.239-.424-.594C7.688 2.089 10.41 1 12.864 1c1.25 0 2.884.333 3.869 1.279 1.25 1.167 1.13 2.722 1.13 4.415v3.995c0 1.201.499 1.728.968 2.376.164.23.2.506-.009.676l-1.678 1.054zm3.049 2.877c-2.591 1.92-6.35 2.938-9.585 2.938-4.535 0-8.617-1.678-11.702-4.47-.243-.22-.026-.52.265-.349 3.332 1.941 7.451 3.108 11.704 3.108 2.869 0 6.023-.595 8.927-1.83.438-.185.805.288.391.603z"/></svg>
                        </a>
                        <a
                          href={appleMusicSongUrl(raga.name, '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Listen on Apple Music"
                          className="p-1 rounded-full hover:bg-[#FC3C44]/20 transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FC3C44"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a4.98 4.98 0 00-.35 1.49c-.06.5-.087 1-.09 1.5v12.6c.01.52.04 1.04.12 1.55.155 1.01.54 1.93 1.17 2.73.99 1.27 2.29 1.97 3.9 2.16.5.06 1 .09 1.5.09h11.7c.5 0 1-.03 1.5-.09 1.26-.15 2.35-.68 3.22-1.6.83-.88 1.3-1.95 1.43-3.15.06-.55.09-1.1.09-1.65V7.68c-.003-.52-.03-1.04-.08-1.556zM12 17.5c-3.038 0-5.5-2.46-5.5-5.5S8.962 6.5 12 6.5s5.5 2.46 5.5 5.5-2.462 5.5-5.5 5.5zm6.5-9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/></svg>
                        </a>
                        <span className="text-xs text-on-surface-variant ml-1">{raga.songCount}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-on-surface-variant">—</span>
                    )}
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
      )}

      {/* Card Grid View */}
      {view === 'grid' && (
        <div>
          {pageItems.length === 0 ? (
            <div className="text-center py-16 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-3 block opacity-30">search_off</span>
              No ragas found for your filters.
              <button onClick={reset} className="block mx-auto mt-2 text-sm text-primary hover:underline">Clear filters</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {pageItems.map(raga => (
                <div key={raga.id} className="rounded-2xl border border-outline-variant overflow-hidden group hover:shadow-md transition-shadow">
                  {/* Colour header based on thaat */}
                  <div
                    className="h-24 relative flex items-end px-4 pb-3"
                    style={{ background: thaatGradient(raga.thaat) }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="relative z-10 flex items-end justify-between w-full">
                      <h3 className="font-serif text-lg font-semibold text-white leading-tight">{raga.name}</h3>
                      <FavoriteButton ragaId={raga.id} className="bg-black/30 hover:bg-black/50" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded-full text-xs">{raga.thaat}</span>
                      <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant rounded-full text-xs">{raga.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {raga.rasa.slice(0, 2).map(r => (
                        <span key={r} className="px-2 py-0.5 bg-primary-container/50 text-on-primary-container rounded-full text-xs">{r}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/raaga/${raga.id}`}
                        className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
                      >
                        Explore
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                      {raga.songCount > 0 && (
                        <span className="text-xs text-on-surface-variant">{raga.songCount} songs</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full border border-outline-variant text-sm disabled:opacity-40 hover:bg-surface-container transition-colors"
          >
            Previous
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              const p = totalPages <= 7 ? i + 1 : (() => {
                if (i === 0) return 1
                if (i === 6) return totalPages
                if (page <= 4) return i + 1
                if (page >= totalPages - 3) return totalPages - 6 + i
                return page - 3 + i
              })()
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-full text-sm transition-colors ${
                    page === p
                      ? 'bg-primary text-on-primary font-medium'
                      : 'text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  {p}
                </button>
              )
            })}
          </div>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full border border-outline-variant text-sm disabled:opacity-40 hover:bg-surface-container transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Ad — below pagination */}
      <AdSlot slotId="9710463891" format="responsive" />
    </div>
  )
}

function thaatGradient(thaat: string): string {
  const map: Record<string, string> = {
    Kalyan:   'linear-gradient(135deg, #7d5700 0%, #a0722a 100%)',
    Bilawal:  'linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)',
    Khamaj:   'linear-gradient(135deg, #4a0e8f 0%, #7c3aed 100%)',
    Bhairav:  'linear-gradient(135deg, #7c0a02 0%, #b71c1c 100%)',
    Purvi:    'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
    Marwa:    'linear-gradient(135deg, #4e342e 0%, #795548 100%)',
    Kafi:     'linear-gradient(135deg, #004d40 0%, #00796b 100%)',
    Asavari:  'linear-gradient(135deg, #37474f 0%, #546e7a 100%)',
    Bhairavi: 'linear-gradient(135deg, #880e4f 0%, #c2185b 100%)',
    Todi:     'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
  }
  return map[thaat] ?? 'linear-gradient(135deg, #944222 0%, #7d5700 100%)'
}
