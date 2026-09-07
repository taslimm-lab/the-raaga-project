import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) { setStatus('error'); return }
    // Mailchimp / Resend endpoint — replace ACTION_URL with your form action
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = 'https://formsubmit.co/ajax/your@email.com'
    form.style.display = 'none'
    const emailInput = document.createElement('input')
    emailInput.name = 'email'
    emailInput.value = email
    form.appendChild(emailInput)
    document.body.appendChild(form)

    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
      .finally(() => document.body.removeChild(form))
  }

  return (
    <section className="py-16 px-6 bg-primary-container/20">
      <div className="max-w-xl mx-auto text-center">
        <span className="material-symbols-outlined text-4xl text-primary mb-3 block">mail</span>
        <h2 className="font-serif text-2xl font-semibold text-on-background mb-2">Raag of the Week</h2>
        <p className="text-on-surface-variant text-sm mb-6">
          One raga every Sunday — its story, its songs, and what makes it special. Free, no spam.
        </p>

        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <span className="material-symbols-outlined text-[20px]">check_circle</span>
            You're subscribed! First edition coming Sunday.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setStatus('idle') }}
              placeholder="your@email.com"
              required
              className={`flex-1 px-4 py-2.5 rounded-full border text-sm bg-background text-on-surface outline-none focus:ring-2 focus:ring-primary transition-colors ${status === 'error' ? 'border-error' : 'border-outline-variant'}`}
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-xs text-error mt-2">Please enter a valid email address.</p>
        )}
        <p className="text-xs text-on-surface-variant/50 mt-4">Unsubscribe anytime. No spam, ever.</p>
      </div>
    </section>
  )
}
