import { ALL_RAGAS } from '../data/raagasData'

export function useRagaOfDay() {
  // Rotate daily using the date as a seed — deterministic for all users on same day
  const now = new Date()
  const daysSinceEpoch = Math.floor(
    (now.getTime() - new Date('2026-01-01').getTime()) / (1000 * 60 * 60 * 24)
  )
  const index = daysSinceEpoch % ALL_RAGAS.length
  return ALL_RAGAS[index]
}
