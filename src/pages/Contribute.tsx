import { useState } from 'react'

const CONTRIBUTION_TYPES = [
  { id: 'new-raaga', label: 'New Raag', icon: 'music_note', desc: 'Document a raga not yet in the library' },
  { id: 'regional-variant', label: 'Regional Variant', icon: 'fork_right', desc: 'A regional or school-specific variation' },
  { id: 'archival-recording', label: 'Archival Recording', icon: 'library_music', desc: 'Historical or rare recordings' },
  { id: 'notation-correction', label: 'Notation Correction', icon: 'edit', desc: 'Fix inaccuracies in existing entries' },
]

const GUIDELINES = [
  'All contributions are reviewed by our editorial team before publication.',
  'Please provide credible sources (academic texts, recognized recordings, established musicians).',
  'Regional variants should note the specific gharana or regional tradition.',
  'Film song associations must include the music director and original source.',
  'Respectfully document minority traditions and less-known schools.',
]

export default function Contribute() {
  const [type, setType] = useState<string | null>(null)
  const [form, setForm] = useState({ ragaName: '', thaat: '', description: '', sources: '', contact: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="w-20 h-20 rounded-full bg-tertiary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-tertiary text-4xl">check_circle</span>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold text-on-background mb-2">Thank You!</h2>
          <p className="text-on-surface-variant max-w-md">
            Your contribution has been received. Our editorial team will review it and reach out if we need more information.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setType(null); setForm({ ragaName: '', thaat: '', description: '', sources: '', contact: '' }) }}
          className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          Submit Another
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs text-primary uppercase tracking-wider font-medium mb-1">Grow the Archive</p>
        <h1 className="font-serif text-4xl font-semibold text-on-background mb-3">Contribute</h1>
        <p className="text-on-surface-variant leading-relaxed">
          Help us build the most comprehensive archive of Indian classical ragas. Share your knowledge,
          correct inaccuracies, or document regional traditions.
        </p>
      </div>

      {/* Contribution Type */}
      <div className="mb-8">
        <h2 className="font-medium text-on-surface mb-4">What would you like to contribute?</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {CONTRIBUTION_TYPES.map(ct => (
            <button
              key={ct.id}
              onClick={() => setType(type === ct.id ? null : ct.id)}
              className={`flex items-start gap-3 p-4 rounded-2xl border text-left transition-all ${
                type === ct.id
                  ? 'border-primary bg-primary-container/30'
                  : 'border-outline-variant hover:bg-surface-container'
              }`}
            >
              <div className={`p-2 rounded-xl ${type === ct.id ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <span className="material-symbols-outlined text-[20px]">{ct.icon}</span>
              </div>
              <div>
                <p className={`font-medium text-sm ${type === ct.id ? 'text-primary' : 'text-on-surface'}`}>{ct.label}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">{ct.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      {type && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Raga Name *</label>
            <input
              type="text"
              required
              value={form.ragaName}
              onChange={e => setForm(f => ({ ...f, ragaName: e.target.value }))}
              placeholder="e.g. Bhairavi, Yaman Kalyan…"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Thaat / Parent Scale</label>
            <input
              type="text"
              value={form.thaat}
              onChange={e => setForm(f => ({ ...f, thaat: e.target.value }))}
              placeholder="e.g. Kalyan, Bhairavi…"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Description / Notes *</label>
            <textarea
              required
              rows={5}
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              placeholder="Describe the raga, its characteristics, arohana/avarohana, associated emotions, history…"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm resize-y"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Sources & References</label>
            <textarea
              rows={3}
              value={form.sources}
              onChange={e => setForm(f => ({ ...f, sources: e.target.value }))}
              placeholder="Books, websites, recordings, or names of musicians/teachers who taught you…"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm resize-y"
            />
          </div>

          {/* Media Upload */}
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Media (optional)</label>
            <div className="border-2 border-dashed border-outline-variant rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant/40 mb-2 block">upload_file</span>
              <p className="text-sm text-on-surface-variant">Drop files here or click to upload</p>
              <p className="text-xs text-on-surface-variant/60 mt-1">Notations (PDF), recordings (MP3), images (JPG/PNG)</p>
              <button type="button" className="mt-3 px-4 py-2 border border-outline-variant rounded-full text-xs hover:bg-surface-container-high transition-colors">
                Browse Files
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Your Contact (optional)</label>
            <input
              type="email"
              value={form.contact}
              onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
              placeholder="email@example.com"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
            />
            <p className="text-xs text-on-surface-variant mt-1">We'll only contact you for clarifications, never for marketing.</p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Submit Contribution
          </button>
        </form>
      )}

      {/* Guidelines */}
      <div className="mt-10 bg-surface-container rounded-2xl p-6">
        <h3 className="font-medium text-on-surface mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">info</span>
          Contribution Guidelines
        </h3>
        <ul className="space-y-2">
          {GUIDELINES.map((g, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
              <span className="text-primary mt-0.5 shrink-0">•</span>
              {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
