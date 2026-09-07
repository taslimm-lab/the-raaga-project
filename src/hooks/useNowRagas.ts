import { ALL_RAGAS } from '../data/raagasData'
import type { RaagaRow } from '../data/raagasData'

function getCurrentPrahar(): string[] {
  const hour = new Date().getHours()
  if (hour >= 4 && hour < 7)  return ['Early Morning']
  if (hour >= 7 && hour < 12) return ['Morning']
  if (hour >= 12 && hour < 16) return ['Afternoon']
  if (hour >= 16 && hour < 19) return ['Evening']
  if (hour >= 19 && hour < 22) return ['Night']
  return ['Late Night']
}

export function useNowRagas(count = 4): { ragas: RaagaRow[]; prahar: string } {
  const times = getCurrentPrahar()
  const ragas = ALL_RAGAS.filter(r => times.includes(r.time)).slice(0, count)
  return { ragas, prahar: times[0] }
}
