import type { Scores } from '@/interfaces/scores'
import type { Result } from '@/interfaces/result'

export function applyScore(scores: Scores, result: NonNullable<Result>) {
  return Object.fromEntries([
    ...Object.entries(scores),
    result.type === 'tie'
      ? ['ties', scores.ties + 1]
      : [result.winner, scores[result.winner] + 1],
  ])
}
