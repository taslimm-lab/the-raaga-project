import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchAutocomplete from './SearchAutocomplete'

export default function BottomNav() {
  const { pathname } = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)

  const items = [
    { to: '/', icon: 'home', label: 'Home' },
    { to: '/library', icon: 'library_music', label: 'Library' },
    { to: '/compare', icon: 'compare', label: 'Compare' },
    { to: '/favorites', icon: 'favorite', label: 'Saved' },
  ]

  return (
    <>
      {/* Mobile search overlay */}
      {searchOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur px-4 pt-20">
          <SearchAutocomplete
            placeholder="Search ragas…"
            inputClassName="w-full"
            onSearch={() => setSearchOpen(false)}
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="mt-4 text-sm text-on-surface-variant hover:text-primary flex items-center gap-1 mx-auto"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
            Cancel
          </button>
        </div>
      )}

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container/95 backdrop-blur border-t border-outline-variant">
        <div className="flex items-center justify-around h-16 px-2">
          {items.map(item => {
            const isActive = pathname === item.to
            const cls = isActive ? 'text-primary' : 'text-on-surface-variant'
            return (
              <Link key={item.label} to={item.to} className={`flex flex-col items-center gap-0.5 px-3 py-1 ${cls}`}>
                <span className={`material-symbols-outlined text-[24px] ${isActive ? '[font-variation-settings:"FILL"_1]' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            )
          })}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center gap-0.5 px-3 py-1 text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[24px]">search</span>
            <span className="text-[10px] font-medium">Search</span>
          </button>
        </div>
      </nav>
    </>
  )
}
