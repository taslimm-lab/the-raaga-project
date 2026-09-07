import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_RAGAS, ALL_THAATS } from '../data/raagasData'
import { usePageMeta } from '../hooks/usePageMeta'
import FavoriteButton from '../components/FavoriteButton'

const THAAT_INFO: Record<string, { desc: string; notes: string; mood: string }> = {
  'Bhairav':  { desc: 'The dawn thaat — komal Re and Dha give it a devotional, meditative quality.', notes: 'S r G M P d N S', mood: 'Devotional · Peaceful' },
  'Bilawal':  { desc: 'The natural scale — all shuddha swaras, bright and joyful.', notes: 'S R G M P D N S', mood: 'Joyful · Pure' },
  'Kalyan':   { desc: 'The evening thaat — teevra Ma gives it a luminous, romantic character.', notes: 'S R G M* P D N S', mood: 'Romantic · Ethereal' },
  'Khamaj':   { desc: 'Komal Ni distinguishes this thaat — light, playful, semi-classical.', notes: 'S R G M P D n S', mood: 'Playful · Light' },
  'Kafi':     { desc: 'Komal Ga and Ni — earthy, expressive, strongly linked to monsoon.', notes: 'S R g M P D n S', mood: 'Earthy · Expressive' },
  'Asavari':  { desc: 'Komal Ga, Dha, and Ni — melancholic, deep, associated with separation.', notes: 'S R g M P d n S', mood: 'Melancholic · Deep' },
  'Bhairavi': { desc: 'All five komal swaras — the most sorrowful and tender thaat.', notes: 'S r g M P d n S', mood: 'Sorrowful · Tender' },
  'Todi':     { desc: 'Komal Re, Ga, Dha with teevra Ma — grave, intense, complex.', notes: 'S r g M* P d N S', mood: 'Intense · Complex' },
  'Purvi':    { desc: 'Komal Re, Dha with both Mas — twilight, contemplative, serious.', notes: 'S r G M M* P d N S', mood: 'Twilight · Serious' },
  'Marwa':    { desc: 'Komal Re, teevra Ma, no Pa — austere, piercing, sunset hour.', notes: 'S r G M* D N S', mood: 'Austere · Piercing' },
}

export default function ThaatExplorer() {
  const [active, setActive] = useState<string>(ALL_THAATS[0])

  usePageMeta({
    title: 'Thaat Explorer — Browse Ragas by Parent Scale',
    description: 'Explore all 10 Hindustani thaats and their ragas. Understand how Indian classical ragas are classified by their parent scale.',
  })

  const ragasInThaat = ALL_RAGAS.filter(r => r.thaat === active)
  const info = THAAT_INFO[active]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link to="/library" className="text-sm text-primary hover:underline flex items-center gap-1 mb-4">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Library
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-on-background mb-2">Thaat Explorer</h1>
        <p className="text-on-surface-variant text-sm">Browse all 10 parent scales and their ragas. The thaat is to Indian music what a key is to Western music.</p>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        {/* Thaat list */}
        <div className="lg:w-56 shrink-0">
          <p className="text-xs font-medium text-on-surface-variant uppercase tracking-wider mb-3">Thaats</p>
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            {ALL_THAATS.map(thaat => (
              <button
                key={thaat}
                onClick={() => setActive(thaat)}
                className={`shrink-0 text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === thaat
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {thaat}
                <span className="ml-2 text-xs opacity-60">
                  {ALL_RAGAS.filter(r => r.thaat === thaat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Thaat detail */}
        <div className="flex-1 min-w-0">
          <div className="bg-surface-container rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-serif text-2xl font-semibold text-on-background">{active} Thaat</h2>
              <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-medium shrink-0">
                {ragasInThaat.length} ragas
              </span>
            </div>
            {info && (
              <>
                <p className="text-on-surface-variant text-sm mb-3">{info.desc}</p>
                <div className="flex flex-wrap gap-4">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Scale</p>
                    <p className="font-mono text-primary font-medium text-sm">{info.notes}</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Character</p>
                    <p className="text-sm text-on-surface">{info.mood}</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ragasInThaat.map(raga => (
              <div key={raga.id} className="flex items-center gap-2 rounded-xl border border-outline-variant p-3 hover:bg-surface-container-low transition-colors">
                <Link to={`/raaga/${raga.id}`} className="flex-1 min-w-0 group">
                  <p className="font-medium text-on-surface group-hover:text-primary transition-colors text-sm truncate">{raga.name}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{raga.time} · {raga.jati}</p>
                  {raga.songCount > 0 && (
                    <p className="text-xs text-secondary mt-0.5">{raga.songCount} songs</p>
                  )}
                </Link>
                <FavoriteButton ragaId={raga.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
