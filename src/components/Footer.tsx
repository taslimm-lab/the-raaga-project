import { Link } from 'react-router-dom'
import ShareButton from './ShareButton'

export default function Footer() {
  return (
    <footer className="hidden md:flex bg-surface-container border-t border-outline-variant">
      <div className="max-w-7xl mx-auto w-full px-6 py-8">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl">🎵</span>
              <span className="font-serif font-semibold text-lg text-primary">The Raag Project</span>
            </Link>
            <p className="text-sm text-on-surface-variant mt-1">Where Heritage Meets Melody</p>
            <p className="text-xs text-on-surface-variant/60 mt-1">© {new Date().getFullYear()} The Raag Project. All rights reserved.</p>
            <p className="text-xs text-on-surface-variant/40 mt-0.5">All content, data, and code are proprietary and may not be reproduced without permission.</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
            <Link to="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            <Link to="/library" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Library</Link>
            <Link to="/thaats" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Thaat Explorer</Link>
            <Link to="/compare" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Compare Ragas</Link>
            <Link to="/quiz" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Raga Quiz</Link>
            <Link to="/favorites" className="text-sm text-on-surface-variant hover:text-primary transition-colors">My Saved Ragas</Link>
            <Link to="/contribute" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Contribute</Link>
            <Link to="/privacy" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>

          <div className="flex items-center gap-2">
            <ShareButton
              title="The Raag Project"
              text="Discover Indian classical ragas and their Bollywood connections"
              url="https://the-raaga-project.vercel.app"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
