import { useFavorites } from '../hooks/useFavorites'

interface Props {
  ragaId: string
  className?: string
}

export default function FavoriteButton({ ragaId, className = '' }: Props) {
  const { isFavorite, toggle } = useFavorites()
  const fav = isFavorite(ragaId)

  return (
    <button
      onClick={e => { e.preventDefault(); e.stopPropagation(); toggle(ragaId) }}
      title={fav ? 'Remove from favorites' : 'Add to favorites'}
      className={`p-2 rounded-full transition-colors ${fav ? 'text-red-500 hover:bg-red-50' : 'text-on-surface-variant hover:bg-surface-container-high'} ${className}`}
    >
      <span className={`material-symbols-outlined text-[20px] ${fav ? '[font-variation-settings:"FILL"_1]' : ''}`}>
        favorite
      </span>
    </button>
  )
}
