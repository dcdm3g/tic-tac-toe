import type { Mark } from '@/interfaces/mark'
import type { Board } from '@/interfaces/board'
import { initialBoard } from '@/constants/initial-board'
import { initialScores } from '@/constants/initial-scores'
import { useState } from 'react'

export function useSolo() {
  const [turn, setTurn] = useState<Mark>('x')
  const [board, setBoard] = useState(initialBoard)
  const [scores, setScores] = useState(initialScores)

  function handleRestart() {
    setTurn('x')
    setBoard(initialBoard)
    setScores(initialScores)
  }

  function handleMark(index: number) {
    setTurn((t) => (t === 'x' ? 'o' : 'x'))
    setBoard((b) => b.with(index, turn) as Board)
  }

  return { turn, board, scores, handleRestart, handleMark }
}
