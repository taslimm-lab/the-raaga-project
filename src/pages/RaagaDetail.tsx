import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { RAGA_FILM_SONGS } from '../data/ragaFilmSongs'
import { youtubeRagaUrl, youtubeSongUrl, amazonMusicSongUrl, appleMusicSongUrl } from '../data/utils'
import AdSlot from '../components/AdSlot'

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

        {/* Ad — between quiz and film songs */}
        <AdSlot slotId="6585607102" format="horizontal" />

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
                      <a
                        href={amazonMusicSongUrl(song.title, song.movie)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#FF9900]/20 transition-colors"
                        title="Listen on Amazon Music"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.048-.872-1.236-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.927 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095V6.41c0-.677.051-1.475-.344-2.06-.346-.525-1.01-.742-1.594-.742-1.083 0-2.05.556-2.286 1.709-.049.258-.237.511-.494.523l-2.762-.298c-.232-.051-.491-.239-.424-.594C7.688 2.089 10.41 1 12.864 1c1.25 0 2.884.333 3.869 1.279 1.25 1.167 1.13 2.722 1.13 4.415v3.995c0 1.201.499 1.728 .968 2.376.164.23.2.506-.009.676l-1.678 1.054zm3.049 2.877c-2.591 1.92-6.35 2.938-9.585 2.938-4.535 0-8.617-1.678-11.702-4.47-.243-.22-.026-.52.265-.349 3.332 1.941 7.451 3.108 11.704 3.108 2.869 0 6.023-.595 8.927-1.83.438-.185.805.288.391.603z"/>
                        </svg>
                      </a>
                      <a
                        href={appleMusicSongUrl(song.title, song.movie)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#FC3C44]/20 transition-colors"
                        title="Listen on Apple Music"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FC3C44" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a4.98 4.98 0 00-.35 1.49c-.06.5-.087 1-.09 1.5v12.6c.01.52.04 1.04.12 1.55.155 1.01.54 1.93 1.17 2.73.99 1.27 2.29 1.97 3.9 2.16.5.06 1 .09 1.5.09h11.7c.5 0 1-.03 1.5-.09 1.26-.15 2.35-.68 3.22-1.6.83-.88 1.3-1.95 1.43-3.15.06-.55.09-1.1.09-1.65V7.68c-.003-.52-.03-1.04-.08-1.556zM12 17.5c-3.038 0-5.5-2.46-5.5-5.5S8.962 6.5 12 6.5s5.5 2.46 5.5 5.5-2.462 5.5-5.5 5.5zm6.5-9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
                        </svg>
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

        {/* Ad — between film songs and related ragas */}
        <AdSlot slotId="7084300558" format="rectangle" />

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
