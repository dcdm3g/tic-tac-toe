import type { GameState } from '@/interfaces/game-state'
import { initialBoard } from '@/constants/initial-board'
import { initialScores } from '@/constants/initial-scores'

export const initialGameState: GameState = {
  turn: 'x',
  board: initialBoard,
  scores: initialScores,
}
