import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ALL_RAGAS } from '../data/raagasData'
import { usePageMeta } from '../hooks/usePageMeta'

interface Question {
  question: string
  options: string[]
  answer: number
  ragaId: string
  ragaName: string
}

function generateQuestions(): Question[] {
  const pool = ALL_RAGAS.filter(r => r.rasa.length > 0)
  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 10)

  return shuffled.map(raga => {
    const type = Math.floor(Math.random() * 4)

    if (type === 0) {
      // What thaat does X belong to?
      const wrong = ALL_RAGAS
        .filter(r => r.thaat !== raga.thaat)
        .map(r => r.thaat)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
      const options = [raga.thaat, ...wrong].sort(() => Math.random() - 0.5)
      return { question: `Which thaat does ${raga.name} belong to?`, options, answer: options.indexOf(raga.thaat), ragaId: raga.id, ragaName: raga.name }
    }

    if (type === 1) {
      // What time is X performed?
      const allTimes = ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night', 'Late Night', 'Any Time']
      const wrong = allTimes.filter(t => t !== raga.time).sort(() => Math.random() - 0.5).slice(0, 3)
      const options = [raga.time, ...wrong].sort(() => Math.random() - 0.5)
      return { question: `When is ${raga.name} traditionally performed?`, options, answer: options.indexOf(raga.time), ragaId: raga.id, ragaName: raga.name }
    }

    if (type === 2) {
      // What is the vadi of X?
      const notes = ['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni']
      const wrong = notes.filter(n => n !== raga.vadi).sort(() => Math.random() - 0.5).slice(0, 3)
      const options = [raga.vadi, ...wrong].sort(() => Math.random() - 0.5)
      return { question: `What is the vadi (principal note) of ${raga.name}?`, options, answer: options.indexOf(raga.vadi), ragaId: raga.id, ragaName: raga.name }
    }

    // Which raga belongs to X thaat?
    const sameThaat = ALL_RAGAS.filter(r => r.thaat === raga.thaat && r.id !== raga.id)
    const wrongRagas = ALL_RAGAS.filter(r => r.thaat !== raga.thaat).sort(() => Math.random() - 0.5).slice(0, 3)
    if (sameThaat.length === 0) {
      const wrong2 = notes.filter(n => n !== raga.vadi).sort(() => Math.random() - 0.5).slice(0, 3)
      const opts = [raga.vadi, ...wrong2].sort(() => Math.random() - 0.5)
      return { question: `What is the vadi of ${raga.name}?`, options: opts, answer: opts.indexOf(raga.vadi), ragaId: raga.id, ragaName: raga.name }
    }
    const options2 = [raga.name, ...wrongRagas.map(r => r.name)].sort(() => Math.random() - 0.5)
    return { question: `Which of these ragas belongs to ${raga.thaat} thaat?`, options: options2, answer: options2.indexOf(raga.name), ragaId: raga.id, ragaName: raga.name }
  })
}

const notes = ['Sa', 'Re', 'Ga', 'Ma', 'Pa', 'Dha', 'Ni']

export default function Quiz() {
  const [questions] = useState<Question[]>(() => generateQuestions())
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])

  usePageMeta({
    title: 'Raga Quiz — Test Your Knowledge',
    description: 'Test your knowledge of Indian classical ragas with this 10-question quiz. Questions on thaat, vadi, time of performance, and more.',
  })

  const q = questions[current]

  function handleSelect(i: number) {
    if (selected !== null) return
    setSelected(i)
    const correct = i === q.answer
    if (correct) setScore(s => s + 1)
    setAnswers(a => [...a, correct])
  }

  function next() {
    if (current + 1 >= questions.length) { setDone(true); return }
    setCurrent(c => c + 1)
    setSelected(null)
  }

  const restart = useCallback(() => {
    window.location.reload()
  }, [])

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const grade = pct >= 80 ? 'Maestro' : pct >= 60 ? 'Disciple' : pct >= 40 ? 'Curious Listener' : 'Beginner'
    const gradeColor = pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-primary' : pct >= 40 ? 'text-secondary' : 'text-on-surface-variant'

    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <span className="material-symbols-outlined text-6xl text-primary mb-4 block">emoji_events</span>
        <h1 className="font-serif text-3xl font-semibold text-on-background mb-2">Quiz Complete!</h1>
        <p className={`text-2xl font-bold mt-4 ${gradeColor}`}>{grade}</p>
        <p className="text-4xl font-serif font-bold text-on-background mt-2">{score}/{questions.length}</p>
        <p className="text-on-surface-variant mt-1 mb-8">{pct}% correct</p>

        <div className="space-y-2 mb-8 text-left">
          {questions.map((q, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm ${answers[i] ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <span className="material-symbols-outlined text-[18px]">{answers[i] ? 'check_circle' : 'cancel'}</span>
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium">{q.question}</p>
                {!answers[i] && <p className="text-xs opacity-70">Correct: {q.options[q.answer]}</p>}
              </div>
              <Link to={`/raaga/${q.ragaId}`} className="text-xs hover:underline shrink-0 opacity-70">{q.ragaName}</Link>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={restart} className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
            Play Again
          </button>
          <Link to="/library" className="px-6 py-2.5 border border-outline rounded-full text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
            Browse Library
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link to="/" className="text-sm text-primary hover:underline flex items-center gap-1 mb-4">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Home
        </Link>
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-serif text-2xl font-semibold text-on-background">Raga Quiz</h1>
          <span className="text-sm text-on-surface-variant">{current + 1} / {questions.length}</span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((current) / questions.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">Score: {score}</p>
      </div>

      <div className="bg-surface-container rounded-2xl p-6 mb-6">
        <p className="font-serif text-lg md:text-xl font-medium text-on-background leading-snug">{q.question}</p>
      </div>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => {
          let cls = 'border border-outline-variant hover:bg-surface-container-low'
          if (selected !== null) {
            if (i === q.answer) cls = 'border-2 border-green-500 bg-green-50 text-green-800'
            else if (i === selected && selected !== q.answer) cls = 'border-2 border-red-400 bg-red-50 text-red-800'
            else cls = 'border border-outline-variant opacity-50'
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`w-full text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-colors ${cls}`}
            >
              <span className="mr-3 text-on-surface-variant font-mono">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div className="flex items-center justify-between">
          <p className={`text-sm font-medium ${selected === q.answer ? 'text-green-600' : 'text-red-500'}`}>
            {selected === q.answer ? '✓ Correct!' : `✗ Correct answer: ${q.options[q.answer]}`}
          </p>
          <button
            onClick={next}
            className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            {current + 1 >= questions.length ? 'See Results' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  )
}
