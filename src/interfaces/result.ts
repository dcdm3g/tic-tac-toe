import type { Mark } from '@/interfaces/mark'
import { winningPatterns } from '@/constants/winning-patterns'

export type Result =
  | null
  | { type: 'tie' }
  | {
      type: 'win'
      winner: Mark
      pattern: (typeof winningPatterns)[number]
    }
