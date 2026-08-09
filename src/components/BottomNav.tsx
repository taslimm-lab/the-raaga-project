import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const { pathname } = useLocation()

  const items = [
    { to: '/', icon: 'home', label: 'Home' },
    { to: '/library', icon: 'library_music', label: 'Library' },
    { to: null, icon: 'search', label: 'Search' },
    { to: '/contribute', icon: 'add_circle', label: 'Contribute' },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container/95 backdrop-blur border-t border-outline-variant">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map(item => {
          const isActive = item.to ? pathname === item.to : false
          const cls = isActive ? 'text-primary' : 'text-on-surface-variant'

          if (!item.to) {
            return (
              <button key={item.label} className={`flex flex-col items-center gap-0.5 px-3 py-1 ${cls}`}>
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            )
          }

          return (
            <Link key={item.label} to={item.to} className={`flex flex-col items-center gap-0.5 px-3 py-1 ${cls}`}>
              <span className={`material-symbols-outlined text-[24px] ${isActive ? '[font-variation-settings:"FILL"_1]' : ''}`}>{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
