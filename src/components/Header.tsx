import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/library?q=${encodeURIComponent(search.trim())}`)
      setSearch('')
    }
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex sticky top-0 z-50 bg-surface-container/90 backdrop-blur border-b border-outline-variant">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center gap-6 h-16">
          <Link to="/" className="flex items-center gap-2 mr-4">
            <span className="text-2xl">🎵</span>
            <span className="font-serif font-semibold text-xl text-primary">The Raaga Project</span>
          </Link>

          <nav className="flex items-center gap-1 flex-1">
            <Link to="/" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Heritage
            </Link>
            <Link to="/library" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Library
            </Link>
            <Link to="/contribute" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Contribute
            </Link>
            <a href="#ragas" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Ragas
            </a>
            <a href="#stories" className="px-3 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">
              Stories
            </a>
          </nav>

          <form onSubmit={handleSearch} className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search ragas…"
              className="pl-9 pr-4 py-2 rounded-full bg-surface-container-high border border-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 w-48"
            />
          </form>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-surface-container/95 backdrop-blur border-b border-outline-variant">
        <div className="flex items-center justify-between px-4 h-16">
          <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">menu</span>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif font-semibold text-lg text-primary">The Raaga Project</span>
          </Link>
          <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
        </div>
      </header>
    </>
  )
}
