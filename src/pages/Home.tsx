import { useState, useCallback, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { RAGA_FILM_SONGS } from '../data/ragaFilmSongs'
import { youtubeSongUrl, amazonMusicSongUrl, appleMusicSongUrl } from '../data/utils'
import AdSlot from '../components/AdSlot'
import NewsletterSignup from '../components/NewsletterSignup'
import { usePageMeta } from '../hooks/usePageMeta'
import { useRagaOfDay } from '../hooks/useRagaOfDay'
import { useNowRagas } from '../hooks/useNowRagas'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed'
import FavoriteButton from '../components/FavoriteButton'
import { RAGA_COLLECTIONS } from '../data/ragaCollections'
import { RAGA_TRIVIA } from '../data/ragaTrivia'

const BOLLYWOOD_CONNECTIONS = [
  { title: 'Tujhe Dekha To Yeh Jaana Sanam', movie: 'DDLJ', year: 1995, raga: 'Yaman', ragaId: 'yaman' },
  { title: 'Lag Ja Gale', movie: 'Woh Kaun Thi', year: 1964, raga: 'Bhairavi', ragaId: 'bhairavi' },
  { title: 'Mann Tadpat Hari', movie: 'Baiju Bawra', year: 1952, raga: 'Darbari Kanada', ragaId: 'darbari-kanada' },
]

const totalSongs = Object.values(RAGA_FILM_SONGS).flat().length

export default function Home() {
  const navigate = useNavigate()
  const [heroSearch, setHeroSearch] = useState('')
  const RAAGA_OF_DAY = useRagaOfDay()

  const surpriseMe = useCallback(() => {
    const raga = ALL_RAGAS[Math.floor(Math.random() * ALL_RAGAS.length)]
    navigate(`/raaga/${raga.id}`)
  }, [navigate])
  const { ragas: nowRagas, prahar } = useNowRagas(4)
  const { recent } = useRecentlyViewed()
  const recentRagas = ALL_RAGAS.filter(r => recent.includes(r.id)).sort((a, b) => recent.indexOf(a.id) - recent.indexOf(b.id))
  const [activeCollection, setActiveCollection] = useState<string | null>(null)

  // Date-seeded rotating trivia
  const trivia = useMemo(() => {
    const daysSinceEpoch = Math.floor(Date.now() / 86400000)
    return RAGA_TRIVIA[daysSinceEpoch % RAGA_TRIVIA.length]
  }, [])

  const collectionRagas = useMemo(() => {
    if (!activeCollection) return []
    const col = RAGA_COLLECTIONS.find(c => c.id === activeCollection)
    if (!col) return []
    return col.ragaIds.map(id => ALL_RAGAS.find(r => r.id === id)).filter(Boolean) as typeof ALL_RAGAS
  }, [activeCollection])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (heroSearch.trim()) navigate(`/library?q=${encodeURIComponent(heroSearch.trim())}`)
  }

  usePageMeta({
    title: 'The Raag Project — Indian Classical Ragas & Bollywood Connections',
    description: 'The most comprehensive guide to Indian classical ragas. Explore 174+ ragas, their musical anatomy, legends, emotional qualities, and connections to Bollywood film songs.',
  })

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center mandala-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background/80" />
        <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary mb-3 tracking-widest uppercase">Welcome to</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-on-background mb-6 leading-tight">
            The Raag<br />
            <span className="text-primary">Project</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Discover the ancient soul of Indian classical music — explore ragas, uncover their Bollywood echoes, and deepen your connection to a living tradition.
          </p>
          <form onSubmit={handleSearch} className="flex items-center gap-2 max-w-md mx-auto mb-6">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
              <input
                type="text"
                value={heroSearch}
                onChange={e => setHeroSearch(e.target.value)}
                placeholder="Search a raga — Yaman, Bhairavi…"
                className="w-full pl-10 pr-4 py-3 rounded-full border border-outline bg-surface/80 backdrop-blur text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-primary text-on-primary rounded-full font-medium text-sm hover:bg-primary-dark transition-colors shadow-lg shrink-0"
            >
              Search
            </button>
          </form>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/library" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">library_music</span>
              Browse all 174 ragas
            </Link>
            <span className="text-on-surface-variant/30">·</span>
            <button onClick={surpriseMe} className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">casino</span>
              Surprise Me
            </button>
            <span className="text-on-surface-variant/30">·</span>
            <Link to="/quiz" className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">quiz</span>
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Raag of the Day */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Daily Feature</p>
            <h2 className="font-serif text-3xl font-semibold text-on-background">Raag of the Day</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="rounded-3xl overflow-hidden h-72 relative"
            style={{
              background: RAAGA_OF_DAY.heroImage
                ? undefined
                : 'linear-gradient(135deg, #944222 0%, #7d5700 100%)',
            }}
          >
            {RAAGA_OF_DAY.heroImage && (
              <img
                src={RAAGA_OF_DAY.heroImage}
                alt={RAAGA_OF_DAY.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-wider opacity-70 mb-1">{RAAGA_OF_DAY.thaat} Thaat</p>
              <h3 className="font-serif text-3xl font-semibold">{RAAGA_OF_DAY.name}</h3>
            </div>
          </div>

          <div className="space-y-4">
            {RAAGA_OF_DAY.tagline && (
              <p className="font-serif text-xl italic text-on-surface-variant">"{RAAGA_OF_DAY.tagline}"</p>
            )}
            <p className="text-on-surface-variant leading-relaxed">
              {RAAGA_OF_DAY.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {RAAGA_OF_DAY.rasa.map(r => (
                <span key={r} className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-sm">
                  {r}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Link
                to={`/raaga/${RAAGA_OF_DAY.id}`}
                className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Explore Raga
              </Link>
              <span className="text-sm text-on-surface-variant">
                {RAAGA_OF_DAY.songCount} film songs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Listen Right Now */}
      {nowRagas.length > 0 && (
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Based on the current time</p>
            <h2 className="font-serif text-2xl font-semibold text-on-background">Listen Right Now</h2>
            <p className="text-sm text-on-surface-variant mt-1">Ragas traditionally played during <span className="font-medium">{prahar}</span></p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nowRagas.map(raga => (
              <Link key={raga.id} to={`/raaga/${raga.id}`}
                className="rounded-2xl border border-outline-variant p-4 hover:bg-surface-container-low transition-colors group">
                <div className="flex items-start justify-between mb-2">
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-xs">{raga.thaat}</span>
                  <FavoriteButton ragaId={raga.id} />
                </div>
                <p className="font-serif font-semibold text-on-surface group-hover:text-primary transition-colors">{raga.name}</p>
                <p className="text-xs text-on-surface-variant mt-1">{raga.rasa.slice(0, 2).join(' · ')}</p>
                {raga.songCount > 0 && (
                  <p className="text-xs text-primary mt-2">{raga.songCount} film songs</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recently Viewed */}
      {recentRagas.length > 0 && (
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold text-on-background">Recently Viewed</h2>
            <Link to="/library" className="text-xs text-primary hover:underline">Browse all</Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {recentRagas.map(raga => (
              <Link key={raga.id} to={`/raaga/${raga.id}`}
                className="shrink-0 rounded-xl border border-outline-variant px-4 py-3 hover:bg-surface-container-low transition-colors min-w-[140px]">
                <p className="font-medium text-on-surface text-sm">{raga.name}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{raga.time}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Curated Collections */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Curated Playlists</p>
          <h2 className="font-serif text-2xl font-semibold text-on-background">Explore by Mood & Season</h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {RAGA_COLLECTIONS.map(col => (
            <button
              key={col.id}
              onClick={() => setActiveCollection(activeCollection === col.id ? null : col.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCollection === col.id
                  ? 'bg-primary text-on-primary border-primary shadow-md'
                  : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{col.icon}</span>
              {col.label}
            </button>
          ))}
        </div>

        {activeCollection && (() => {
          const col = RAGA_COLLECTIONS.find(c => c.id === activeCollection)!
          return (
            <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">
              <p className="text-sm text-on-surface-variant mb-4">{col.description}</p>
              <div className="flex flex-wrap gap-2">
                {collectionRagas.map(r => (
                  <Link
                    key={r.id}
                    to={`/raaga/${r.id}`}
                    className="flex items-center gap-1.5 px-3 py-2 bg-surface rounded-xl border border-outline-variant hover:border-primary hover:text-primary transition-colors text-sm font-medium text-on-surface"
                  >
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">music_note</span>
                    {r.name}
                    {r.songCount > 0 && (
                      <span className="text-xs text-on-surface-variant ml-0.5">·{r.songCount}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}
      </section>

      {/* Did You Know? */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-primary-container/30 border border-primary/20 p-6 md:p-8 flex flex-col md:flex-row items-start gap-5">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[20px]">auto_stories</span>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Did You Know?</p>
            <p className="text-on-surface leading-relaxed text-sm md:text-base">{trivia.fact}</p>
            {trivia.ragaId && (
              <Link
                to={`/raaga/${trivia.ragaId}`}
                className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline font-medium"
              >
                Explore {trivia.raga}
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Ad — between hero feature and Bollywood section */}
      <div className="max-w-4xl mx-auto px-6">
        <AdSlot slotId="4342587145" format="horizontal" />
      </div>

      {/* Bollywood Connections */}
      <section className="py-16 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Heritage Meets Melody</p>
            <h2 className="font-serif text-3xl font-semibold text-on-background">Bollywood Connections</h2>
            <p className="text-on-surface-variant mt-2">Discover how classical ragas live on in iconic film songs</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {BOLLYWOOD_CONNECTIONS.map(item => (
              <div key={item.title} className="glass-card rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-medium">
                    {item.raga}
                  </span>
                  <span className="text-xs text-on-surface-variant">{item.year}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-on-surface mb-1">{item.title}</h3>
                <p className="text-sm text-on-surface-variant mb-4">{item.movie}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={youtubeSongUrl(item.title, item.movie)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <span className="material-symbols-outlined text-[15px]">play_circle</span>
                    YouTube
                  </a>
                  <a
                    href={amazonMusicSongUrl(item.title, item.movie)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#FF9900] hover:underline"
                  >
                    <span className="material-symbols-outlined text-[15px]">music_note</span>
                    Amazon
                  </a>
                  <a
                    href={appleMusicSongUrl(item.title, item.movie)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-[#FC3C44] hover:underline"
                  >
                    <span className="material-symbols-outlined text-[15px]">music_note</span>
                    Apple
                  </a>
                  <Link
                    to={`/raaga/${item.ragaId}`}
                    className="flex items-center gap-1 text-xs text-on-surface-variant hover:text-primary transition-colors ml-auto"
                  >
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Ad — between newsletter and stats */}
      <div className="max-w-4xl mx-auto px-6">
        <AdSlot slotId="9403342136" format="horizontal" />
      </div>

      {/* CTA Stats */}
      <section className="py-20 px-6 mandala-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-on-background mb-4">
            A Living Archive of Indian Music
          </h2>
          <p className="text-on-surface-variant mb-10">
            Explore our growing collection of classical ragas, film song connections, and musical knowledge.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary">{ALL_RAGAS.length}</p>
              <p className="text-sm text-on-surface-variant mt-1">Ragas Documented</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary">{totalSongs}+</p>
              <p className="text-sm text-on-surface-variant mt-1">Film Songs Indexed</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-primary">10</p>
              <p className="text-sm text-on-surface-variant mt-1">Thaats Covered</p>
            </div>
          </div>
          <Link
            to="/library"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">library_music</span>
            Browse the Full Library
          </Link>
        </div>
      </section>
    </div>
  )
}
