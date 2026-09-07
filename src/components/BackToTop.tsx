import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-24 md:bottom-8 right-4 z-30 p-3 rounded-full bg-surface-container-high shadow-lg border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary transition-all hover:scale-110 active:scale-95"
    >
      <span className="material-symbols-outlined text-[20px]">keyboard_arrow_up</span>
    </button>
  )
}
