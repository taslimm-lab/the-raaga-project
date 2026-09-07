import { Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { usePageMeta } from '../hooks/usePageMeta'

const ERAS = [
  {
    id: 'ancient',
    label: 'Ancient Period',
    range: 'Before 1000 CE',
    icon: 'temple_hindu',
    color: '#7d5700',
    bg: 'bg-amber-950/20',
    border: 'border-amber-700/30',
    description:
      'Ragas rooted in the Gandharva Veda tradition, Natyashastra of Bharata Muni, and early Jatis. These forms predate formal thaat classification and retain the most ancient melodic characteristics.',
    ragas: ['bhairavi', 'bhairav', 'yaman', 'kafi', 'bilawal', 'darbari-kanada'],
  },
  {
    id: 'medieval',
    label: 'Medieval Period',
    range: '1000 – 1500 CE',
    icon: 'fort',
    color: '#4a6741',
    bg: 'bg-green-950/20',
    border: 'border-green-700/30',
    description:
      'The age of the Sangita Ratnakara and early court music. Shahjahan-era compositions began merging Dhrupad with Persian influences, codifying the raga system into recognisable form.',
    ragas: ['bageshri', 'malkaus', 'purvi', 'marwa', 'todi', 'multani'],
  },
  {
    id: 'mughal',
    label: 'Mughal Era',
    range: '1500 – 1700 CE',
    icon: 'architecture',
    color: '#6b21a8',
    bg: 'bg-purple-950/20',
    border: 'border-purple-700/30',
    description:
      'Court patronage under Akbar, Jahangir and Shah Jahan gave rise to Khyal and a flowering of new ragas. Tansen, the legendary vocalist, is credited with creating or popularising many forms of this period.',
    ragas: ['darbari-kanada', 'jaunpuri', 'miyan-ki-malhar', 'bairagi', 'bhupali', 'des'],
  },
  {
    id: 'modern',
    label: 'Modern Era',
    range: '1700 CE – Present',
    icon: 'piano',
    color: '#be185d',
    bg: 'bg-pink-950/20',
    border: 'border-pink-700/30',
    description:
      'The 20th century brought radio, recordings, and Bollywood — exposing ragas to mass audiences. Composers like Ravi Shankar and Vilayat Khan introduced new forms while preserving classical rigour. Film music created hybrid ragas that blend multiple thaats.',
    ragas: ['kirwani', 'pahadi', 'hansadhwani', 'durga', 'shuddha-sarang', 'charukeshi'],
  },
]

export default function Timeline() {
  usePageMeta({
    title: 'Raga Timeline — Historical Eras of Indian Classical Music',
    description:
      'Trace the evolution of Indian classical ragas from ancient Vedic origins through the Mughal era to modern Bollywood. Browse ragas by historical period.',
  })

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-10">
        <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">History of Ragas</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-on-background">Raga Timeline</h1>
        <p className="text-on-surface-variant mt-2 max-w-2xl">
          From the Vedic jatis to Bollywood — trace how Indian classical ragas evolved across millennia of musical tradition.
        </p>
      </div>

      {/* Vertical timeline */}
      <div className="relative">
        {/* Spine */}
        <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant -translate-x-0.5 md:-translate-x-px" />

        {ERAS.map((era, idx) => {
          const ragas = ALL_RAGAS.filter(r => era.ragas.includes(r.id))
          const isRight = idx % 2 === 0

          return (
            <div key={era.id} className={`relative mb-16 md:mb-20 ${isRight ? 'md:pr-[52%]' : 'md:pl-[52%]'} pl-12 md:pl-0`}>
              {/* Dot on spine */}
              <div
                className="absolute left-[10px] md:left-1/2 top-1.5 w-5 h-5 rounded-full border-2 border-outline bg-surface flex items-center justify-center -translate-x-0 md:-translate-x-2.5 shadow"
                style={{ borderColor: era.color }}
              >
                <span
                  className="material-symbols-outlined text-[11px]"
                  style={{ color: era.color }}
                >
                  {era.icon}
                </span>
              </div>

              {/* Card */}
              <div className={`rounded-2xl border ${era.border} ${era.bg} p-5 md:p-6`}>
                <p className="text-xs font-medium uppercase tracking-wider mb-0.5" style={{ color: era.color }}>
                  {era.range}
                </p>
                <h2 className="font-serif text-xl font-semibold text-on-background mb-3">{era.label}</h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-5">{era.description}</p>

                {ragas.length > 0 && (
                  <>
                    <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-3">
                      Representative Ragas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ragas.map(r => (
                        <Link
                          key={r.id}
                          to={`/raaga/${r.id}`}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-surface/70 hover:bg-surface rounded-full text-sm font-medium text-on-surface hover:text-primary transition-colors border border-outline-variant hover:border-primary"
                        >
                          <span className="material-symbols-outlined text-[14px] text-on-surface-variant">music_note</span>
                          {r.name}
                        </Link>
                      ))}
                      <Link
                        to={`/library?thaat=${era.id}`}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-on-surface-variant hover:text-primary transition-colors"
                      >
                        Browse more
                        <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-4 pb-8">
        <Link
          to="/library"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">library_music</span>
          Explore All {ALL_RAGAS.length} Ragas
        </Link>
      </div>
    </div>
  )
}
