export function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[''`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function ragaSlug(name: string): string {
  return normalize(name)
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
}

export function ragaFromSlug(slug: string): string {
  return slug.replace(/-/g, ' ')
}

export function compareText(a: string, b: string): boolean {
  return normalize(a) === normalize(b)
}

export function avatarForRaga(ragaName: string): string {
  const colors = [
    '#944222', '#7d5700', '#4a6741', '#6b3a8a', '#1a6b8a',
    '#8a1a3a', '#2d6b3a', '#6b5a1a', '#3a4a8a', '#8a4a2d',
  ]
  let hash = 0
  for (let i = 0; i < ragaName.length; i++) {
    hash = ragaName.charCodeAt(i) + ((hash << 5) - hash)
  }
  const color = colors[Math.abs(hash) % colors.length]
  const initials = ragaName
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${color}"/><text x="40" y="50" text-anchor="middle" font-family="serif" font-size="28" fill="white">${initials}</text></svg>`
  )}`
}

// Replace these with your real affiliate tracking tags once approved
const AMAZON_AFFILIATE_TAG = 'raaproject-20'
const APPLE_AFFILIATE_TOKEN = 'YOUR_APPLE_TOKEN'

export function amazonMusicSongUrl(title: string, movie: string): string {
  const query = `${title} ${movie}`
  return `https://music.amazon.com/search/${encodeURIComponent(query)}?tag=${AMAZON_AFFILIATE_TAG}`
}

export function appleMusicSongUrl(title: string, movie: string): string {
  const query = `${title} ${movie}`
  return `https://music.apple.com/search?term=${encodeURIComponent(query)}&at=${APPLE_AFFILIATE_TOKEN}`
}

export function youtubeRagaUrl(ragaName: string): string {
  const query = `${ragaName} raga classical Indian music`
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
}

export function youtubeSongUrl(title: string, movie: string): string {
  const query = `${title} ${movie} full song`
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
}

export function sourceHost(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}
