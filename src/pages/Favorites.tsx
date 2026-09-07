import { Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { useFavorites } from '../hooks/useFavorites'
import FavoriteButton from '../components/FavoriteButton'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Favorites() {
  const { favorites } = useFavorites()
  const ragas = ALL_RAGAS.filter(r => favorites.includes(r.id))

  usePageMeta({
    title: 'My Saved Ragas',
    description: 'Your personally saved collection of Indian classical ragas.',
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-2">My Saved Ragas</h1>
        <p className="text-on-surface-variant text-sm">
          {ragas.length > 0 ? `${ragas.length} raga${ragas.length === 1 ? '' : 's'} saved` : 'Tap the ♡ on any raga to save it here'}
        </p>
      </div>

      {ragas.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl opacity-20 block mb-4">favorite</span>
          <p className="text-on-surface-variant mb-6">You haven't saved any ragas yet.</p>
          <Link to="/library" className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
            Browse the Library
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {ragas.map(raga => (
            <div key={raga.id} className="flex items-center gap-4 p-4 rounded-2xl border border-outline-variant hover:bg-surface-container-low transition-colors">
              <div className="flex-1 min-w-0">
                <Link to={`/raaga/${raga.id}`} className="font-serif font-medium text-on-surface hover:text-primary transition-colors">
                  {raga.name}
                </Link>
                <p className="text-xs text-on-surface-variant mt-0.5">{raga.thaat} · {raga.time}</p>
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {raga.rasa.map(r => (
                    <span key={r} className="px-2 py-0.5 bg-primary-container text-on-primary-container rounded-full text-[10px]">{r}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {raga.songCount > 0 && (
                  <span className="text-xs text-on-surface-variant">{raga.songCount} songs</span>
                )}
                <FavoriteButton ragaId={raga.id} />
                <Link to={`/raaga/${raga.id}`} className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
