import type { Board } from '@/interfaces/board'
import type { Mark } from '@/interfaces/mark'

export function markUsingCPU(board: Board, turn: Mark) {
  const possibilities = board.reduce<number[]>(
    (acc, cur, idx) => (!cur ? [...acc, idx] : acc),
    [],
  )

  const index =
    possibilities[Math.floor(Math.random() * (possibilities.length - 1))]

  return board.with(index, turn) as Board
}
