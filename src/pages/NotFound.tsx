import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="2" className="text-primary"/>
          <path d="M40 50 Q60 30 80 50 Q60 70 40 50Z" fill="currentColor" className="text-primary" opacity="0.4"/>
          <circle cx="60" cy="60" r="6" fill="currentColor" className="text-primary"/>
          <line x1="60" y1="60" x2="60" y2="30" stroke="currentColor" strokeWidth="2" className="text-primary"/>
          <line x1="60" y1="60" x2="85" y2="72" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
        </svg>
      </div>
      <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">404</p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-on-background mb-4">
        Raga Not Found
      </h1>
      <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">
        This note doesn't exist in our library. Perhaps the raga you're looking for has a different
        name, or the page has moved.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          to="/library"
          className="px-8 py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg"
        >
          Browse the Library
        </Link>
        <Link
          to="/"
          className="px-8 py-3 border border-outline rounded-full font-medium text-on-surface hover:bg-surface-container-high transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
