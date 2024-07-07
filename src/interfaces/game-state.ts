import type { Mark } from '@/interfaces/mark'
import type { Board } from '@/interfaces/board'
import type { Scores } from '@/interfaces/scores'

export interface GameState {
  turn: Mark
  board: Board
  scores: Scores
}
