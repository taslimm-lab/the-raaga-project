import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Replace with your GA4 Measurement ID (format: G-XXXXXXXXXX)
const GA_ID = 'G-5DDNRKK6WD'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

function loadGA() {
  if (document.getElementById('ga-script')) return
  const script = document.createElement('script')
  script.id = 'ga-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args) { window.dataLayer.push(args) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    loadGA()
  }, [])

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
    })
  }, [location])

  return null
}
