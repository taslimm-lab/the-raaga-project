import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { RAGA_FILM_SONGS } from '../data/ragaFilmSongs'
import { youtubeRagaUrl, youtubeSongUrl } from '../data/utils'

export default function RaagaDetail() {
  const { id } = useParams<{ id: string }>()
  const raga = ALL_RAGAS.find(r => r.id === id)
  const songs = id ? (RAGA_FILM_SONGS[id] ?? []) : []

  const [activeGlossary, setActiveGlossary] = useState<string | null>(null)
  const [quizAnswered, setQuizAnswered] = useState<Record<number, number>>({})
  const [isPlaying, setIsPlaying] = useState(false)
  const [miniPlayerSong, setMiniPlayerSong] = useState<{ title: string; movie: string } | null>(null)

  if (!raga) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-on-surface-variant">
        <span className="material-symbols-outlined text-6xl opacity-30">music_off</span>
        <p className="text-lg">Raga not found</p>
        <Link to="/library" className="text-primary hover:underline">Back to Library</Link>
      </div>
    )
  }

  const related = ALL_RAGAS
    .filter(r => r.id !== raga.id && (r.thaat === raga.thaat || r.rasa.some(rs => raga.rasa.includes(rs))))
    .slice(0, 4)

  return (
    <div className="pb-32">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        {raga.heroImage ? (
          <img src={raga.heroImage} alt={raga.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #944222 0%, #7d5700 50%, #4a6741 100%)' }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {raga.rasa.map(r => (
                <span key={r} className="px-3 py-1 bg-white/20 backdrop-blur text-white rounded-full text-xs">{r}</span>
              ))}
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-2">{raga.name}</h1>
            {raga.tagline && <p className="text-white/70 italic font-serif text-lg">{raga.tagline}</p>}
          </div>
        </div>
        <Link to="/library" className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur rounded-full text-white hover:bg-black/50 transition-colors">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Musical Anatomy */}
        <section className="py-10">
          <h2 className="font-serif text-2xl font-semibold text-on-background mb-6">Musical Anatomy</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Thaat', value: raga.thaat },
              { label: 'Jati', value: raga.jati },
              { label: 'Time', value: raga.time },
              { label: 'Vadi', value: raga.vadi },
              { label: 'Samvadi', value: raga.samvadi },
              { label: 'Nature', value: raga.nature },
            ].map(item => (
              <div key={item.label} className="bg-surface-container rounded-2xl p-4">
                <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-medium text-on-surface">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {[
              { label: 'Arohana (Ascent)', value: raga.arohana },
              { label: 'Avarohana (Descent)', value: raga.avarohana },
              { label: 'Pakad (Characteristic Phrase)', value: raga.pakad },
            ].map(item => (
              <div key={item.label} className="bg-surface-container rounded-2xl p-4">
                <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-mono text-primary font-medium tracking-wide">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        {raga.description && (
          <section className="py-6 border-t border-outline-variant">
            <p className="text-on-surface-variant leading-relaxed text-base">{raga.description}</p>
          </section>
        )}

        {/* Legend & Lore */}
        {raga.legend && (
          <section className="py-8 border-t border-outline-variant">
            <h2 className="font-serif text-2xl font-semibold text-on-background mb-4">Legend & Lore</h2>
            <div className="bg-primary-container/30 border-l-4 border-primary rounded-r-2xl p-6">
              <p className="text-on-surface-variant leading-relaxed">{raga.legend}</p>
            </div>
          </section>
        )}

        {/* Deep Dive Glossary */}
        {raga.deepDive && raga.deepDive.length > 0 && (
          <section className="py-8 border-t border-outline-variant">
            <h2 className="font-serif text-2xl font-semibold text-on-background mb-4">Knowledge Deep-Dive</h2>
            <div className="space-y-3">
              {raga.deepDive.map(item => (
                <div key={item.term} className="rounded-2xl border border-outline-variant overflow-hidden">
                  <button
                    onClick={() => setActiveGlossary(activeGlossary === item.term ? null : item.term)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-low transition-colors"
                  >
                    <span className="font-medium text-on-surface">{item.term}</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px] transition-transform"
                      style={{ transform: activeGlossary === item.term ? 'rotate(180deg)' : '' }}>
                      expand_more
                    </span>
                  </button>
                  {activeGlossary === item.term && (
                    <div className="px-4 pb-4 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant bg-surface-container-low">
                      <p className="pt-3">{item.definition}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quiz */}
        {raga.quiz && raga.quiz.length > 0 && (
          <section className="py-8 border-t border-outline-variant">
            <h2 className="font-serif text-2xl font-semibold text-on-background mb-4">Test Your Knowledge</h2>
            <div className="space-y-6">
              {raga.quiz.map((q, qi) => (
                <div key={qi} className="bg-surface-container rounded-2xl p-5">
                  <p className="font-medium text-on-surface mb-4">{qi + 1}. {q.question}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oi) => {
                      const answered = quizAnswered[qi] !== undefined
                      const isSelected = quizAnswered[qi] === oi
                      const isCorrect = oi === q.answer
                      let cls = 'p-3 rounded-xl text-sm text-left border transition-all '
                      if (!answered) {
                        cls += 'border-outline-variant hover:bg-surface-container-high cursor-pointer'
                      } else if (isCorrect) {
                        cls += 'border-tertiary bg-tertiary-container text-on-tertiary-container'
                      } else if (isSelected) {
                        cls += 'border-error bg-error-container text-on-error-container'
                      } else {
                        cls += 'border-outline-variant opacity-50'
                      }
                      return (
                        <button
                          key={oi}
                          className={cls}
                          onClick={() => !answered && setQuizAnswered(prev => ({ ...prev, [qi]: oi }))}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>
                  {quizAnswered[qi] !== undefined && (
                    <p className={`mt-3 text-sm font-medium ${quizAnswered[qi] === q.answer ? 'text-tertiary' : 'text-error'}`}>
                      {quizAnswered[qi] === q.answer ? '✓ Correct!' : `✗ The answer is: ${q.options[q.answer]}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cinematic Echoes — Film Songs */}
        {songs.length > 0 && (
          <section className="py-8 border-t border-outline-variant">
            <h2 className="font-serif text-2xl font-semibold text-on-background mb-2">Cinematic Echoes</h2>
            <p className="text-on-surface-variant text-sm mb-6">{songs.length} Bollywood songs rooted in {raga.name}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {songs.map((song, i) => (
                <div key={i} className="glass-card rounded-2xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-on-surface truncate">{song.title}</p>
                      <p className="text-sm text-on-surface-variant">{song.movie} ({song.year})</p>
                      <p className="text-xs text-on-surface-variant mt-1">{song.musicDirector}</p>
                      {song.singers.length > 0 && (
                        <p className="text-xs text-on-surface-variant/70 mt-0.5">{song.singers.join(', ')}</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 shrink-0">
                      <a
                        href={youtubeSongUrl(song.title, song.movie)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-primary-container transition-colors"
                        title="Search on YouTube"
                      >
                        <span className="material-symbols-outlined text-primary text-[20px]">play_circle</span>
                      </a>
                      <button
                        onClick={() => { setMiniPlayerSong({ title: song.title, movie: song.movie }); setIsPlaying(true) }}
                        className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
                        title="Add to mini player"
                      >
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">queue_music</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Ragas */}
        {related.length > 0 && (
          <section className="py-8 border-t border-outline-variant">
            <h2 className="font-serif text-2xl font-semibold text-on-background mb-4">Related Ragas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(r => (
                <Link
                  key={r.id}
                  to={`/raaga/${r.id}`}
                  className="rounded-2xl p-4 border border-outline-variant hover:bg-surface-container transition-colors"
                >
                  <p className="font-medium text-on-surface">{r.name}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{r.thaat} · {r.time}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mini Player Dock */}
      {miniPlayerSong && (
        <div className="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-40">
          <div className="glass-card rounded-2xl p-4 shadow-xl flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-primary text-on-primary shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-on-surface truncate">{miniPlayerSong.title}</p>
              <p className="text-xs text-on-surface-variant">{miniPlayerSong.movie}</p>
            </div>
            <a
              href={youtubeSongUrl(miniPlayerSong.title, miniPlayerSong.movie)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">open_in_new</span>
            </a>
            <button
              onClick={() => setMiniPlayerSong(null)}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">close</span>
            </button>
          </div>
        </div>
      )}

      {/* YouTube search link */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pb-8">
        <a
          href={youtubeRagaUrl(raga.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          Search "{raga.name}" classical performances on YouTube
        </a>
      </div>
    </div>
  )
}
