import { useState } from 'react'

interface Props {
  title: string
  text: string
  url?: string
  className?: string
  iconSize?: string
}

export default function ShareButton({ title, text, url, className = '', iconSize = '20px' }: Props) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url ?? window.location.href

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl })
      } catch {}
    } else {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      title={copied ? 'Link copied!' : 'Share'}
      className={`p-2 rounded-full hover:bg-surface-container-high transition-colors relative ${className}`}
    >
      <span className={`material-symbols-outlined text-on-surface-variant text-[${iconSize}]`}>
        {copied ? 'check' : 'share'}
      </span>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs px-2 py-1 rounded-full whitespace-nowrap">
          Copied!
        </span>
      )}
    </button>
  )
}
