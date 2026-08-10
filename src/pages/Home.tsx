import { Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { RAGA_FILM_SONGS } from '../data/ragaFilmSongs'
import { youtubeSongUrl } from '../data/utils'
import AdSlot from '../components/AdSlot'

const RAAGA_OF_DAY = ALL_RAGAS.find(r => r.id === 'yaman')!

const BOLLYWOOD_CONNECTIONS = [
  { title: 'Tujhe Dekha To Yeh Jaana Sanam', movie: 'DDLJ', year: 1995, raga: 'Yaman', ragaId: 'yaman' },
  { title: 'Lag Ja Gale', movie: 'Woh Kaun Thi', year: 1964, raga: 'Bhairavi', ragaId: 'bhairavi' },
  { title: 'Mann Tadpat Hari', movie: 'Baiju Bawra', year: 1952, raga: 'Darbari Kanada', ragaId: 'darbari-kanada' },
]

const totalSongs = Object.values(RAGA_FILM_SONGS).flat().length

export default function Home() {
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
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto mb-10">
            Discover the ancient soul of Indian classical music — explore ragas, uncover their Bollywood echoes, and deepen your connection to a living tradition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/library"
              className="px-8 py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg"
            >
              Explore the Library
            </Link>
            <Link
              to="/raaga/bhairavi"
              className="px-8 py-3 border border-outline rounded-full font-medium text-on-surface hover:bg-surface-container-high transition-colors"
            >
              Featured Raag
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
                <div className="flex items-center gap-3">
                  <a
                    href={youtubeSongUrl(item.title, item.movie)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                  >
                    <span className="material-symbols-outlined text-[16px]">play_circle</span>
                    Listen
                  </a>
                  <Link
                    to={`/raaga/${item.ragaId}`}
                    className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    Explore Raga
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad — between Bollywood section and stats */}
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
