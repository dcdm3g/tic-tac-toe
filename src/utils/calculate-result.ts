import type { Board } from '@/interfaces/board'
import type { Mark } from '@/interfaces/mark'
import type { Result } from '@/interfaces/result'
import { winningPatterns } from '@/constants/winning-patterns'

export function calculateResult(board: Board, turn: Mark): Result {
  const pattern = winningPatterns.find((w) => w.every((i) => board[i] === turn))

  if (pattern) {
    return { type: 'win', pattern, winner: turn }
  }

  if (board.every((i) => i)) {
    return { type: 'tie' }
  }

  return null
}
