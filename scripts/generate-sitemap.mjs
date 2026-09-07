import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Must match the slug logic in src/data/utils.ts
function normalize(str) {
  return str.toLowerCase().replace(/[''`]/g, '').replace(/\s+/g, ' ').trim()
}
function ragaSlug(name) {
  return normalize(name).replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')
}

// Dynamically import raga details via a small inline re-parse
// (avoids needing ts-node; reads the TS file and extracts names with regex)
import { readFileSync } from 'fs'

const detailsPath = resolve(__dirname, '../src/data/ragaDetails.ts')
const content = readFileSync(detailsPath, 'utf-8')

const nameMatches = [...content.matchAll(/name:\s*'([^']+)'/g)]
const ragaNames = nameMatches.map(m => m[1])

const BASE_URL = 'https://the-raaga-project.vercel.app'
const today = new Date().toISOString().split('T')[0]

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/library', priority: '0.9', changefreq: 'weekly' },
  { path: '/thaats', priority: '0.8', changefreq: 'monthly' },
  { path: '/compare', priority: '0.7', changefreq: 'monthly' },
  { path: '/quiz', priority: '0.7', changefreq: 'monthly' },
  { path: '/favorites', priority: '0.4', changefreq: 'monthly' },
  { path: '/contribute', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
]

const ragaRoutes = ragaNames.map(name => ({
  path: `/raaga/${ragaSlug(name)}`,
  priority: '0.7',
  changefreq: 'monthly',
}))

const allRoutes = [...staticRoutes, ...ragaRoutes]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`Sitemap written: ${outPath} (${allRoutes.length} URLs)`)
