import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
  image?: string
}

const BASE_URL = 'https://the-raaga-project.vercel.app'
const DEFAULT_IMAGE = `${BASE_URL}/og-default.png`

function setMeta(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
    ?? document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement
  if (!el) {
    el = document.createElement('meta')
    const attr = property.startsWith('og:') || property.startsWith('twitter:') ? 'property' : 'name'
    el.setAttribute(attr, property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function usePageMeta({ title, description, image }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | The Raag Project`
    document.title = fullTitle
    const img = image ?? DEFAULT_IMAGE

    setMeta('og:title', fullTitle)
    setMeta('og:description', description)
    setMeta('og:image', img)
    setMeta('og:type', 'website')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', img)
    setMeta('description', description)
  }, [title, description, image])
}
