import { Link, useNavigate } from 'react-router-dom'
import SearchAutocomplete from './SearchAutocomplete'
import { useTheme } from '../hooks/useTheme'
import { ALL_RAGAS } from '../data/raagasData'

function surpriseMe(navigate: ReturnType<typeof useNavigate>) {
  const raga = ALL_RAGAS[Math.floor(Math.random() * ALL_RAGAS.length)]
  navigate(`/raaga/${raga.id}`)
}

export default function Header() {
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex sticky top-0 z-50 bg-surface-container/90 backdrop-blur border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center gap-4 h-16">
          <Link to="/" className="flex items-center gap-2 mr-2 shrink-0">
            <span className="text-2xl">🎵</span>
            <span className="font-serif font-semibold text-xl text-primary">The Raag Project</span>
          </Link>

          <nav className="flex items-center gap-1 flex-1">
            <Link to="/library" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Library
            </Link>
            <Link to="/thaats" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Thaats
            </Link>
            <Link to="/compare" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Compare
            </Link>
            <Link to="/quiz" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Quiz
            </Link>
            <Link to="/favorites" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Saved
            </Link>
          </nav>

          <button
            onClick={() => surpriseMe(navigate)}
            title="Surprise Me — random raga"
            className="px-4 py-2 rounded-full border border-outline-variant text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">casino</span>
            Surprise Me
          </button>

          <SearchAutocomplete className="w-48" />

          <button
            onClick={toggle}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full hover:bg-surface-container-high transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-surface-container/95 backdrop-blur border-b border-outline-variant">
        <div className="flex items-center justify-between px-4 h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif font-semibold text-lg text-primary">The Raag Project</span>
          </Link>
          <div className="flex items-center gap-1">
            <button
              onClick={() => surpriseMe(navigate)}
              title="Surprise Me"
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-[22px]">casino</span>
            </button>
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
              title="Toggle theme"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
