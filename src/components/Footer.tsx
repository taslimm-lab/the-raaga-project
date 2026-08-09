import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="hidden md:flex bg-surface-container border-t border-outline-variant">
      <div className="max-w-7xl mx-auto w-full px-6 py-8">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl">🎵</span>
              <span className="font-serif font-semibold text-lg text-primary">The Raaga Project</span>
            </Link>
            <p className="text-sm text-on-surface-variant mt-1">Where Heritage Meets Melody</p>
            <p className="text-xs text-on-surface-variant/60 mt-2">© {new Date().getFullYear()} The Raaga Project. All rights reserved.</p>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            <Link to="/library" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Library</Link>
            <Link to="/contribute" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contribute</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors" title="Share">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">share</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors" title="Language">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">language</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
