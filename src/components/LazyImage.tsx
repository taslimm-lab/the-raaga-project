import { useState, useRef, useEffect } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  placeholderColor?: string
}

export default function LazyImage({ src, alt, className = '', placeholderColor = '#2e2320' }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ background: placeholderColor }}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-surface-container-high" />
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  )
}
