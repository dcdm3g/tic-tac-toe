import type { Mark } from '@/interfaces/mark'
import type { Board } from '@/interfaces/board'
import type { Result } from '@/interfaces/result'
import { initialBoard } from '@/constants/initial-board'
import { initialScores } from '@/constants/initial-scores'
import { calculateResult } from '@/utils/calculate-result'
import { useState } from 'react'

export function useMultiplayer() {
  const [turn, setTurn] = useState<Mark>('x')
  const [board, setBoard] = useState(initialBoard)
  const [scores, setScores] = useState(initialScores)
  const [result, setResult] = useState<Result>(null)

  function handleRestart() {
    setTurn('x')
    setBoard(initialBoard)
    setScores(initialScores)
    setResult(null)
  }

  function handleMark(index: number) {
    const nextBoard = board.with(index, turn) as Board
    const nextResult = calculateResult(nextBoard, turn)

    if (!nextResult) {
      setTurn((t) => (t === 'x' ? 'o' : 'x'))
    } else {
      setScores((s) =>
        Object.fromEntries([
          ...Object.entries(s),
          nextResult.type === 'tie'
            ? ['ties', s.ties + 1]
            : [turn, s[turn] + 1],
        ]),
      )
    }

    setBoard(nextBoard)
    setResult(nextResult)
  }

  function handleStartNextRound() {
    setTurn('x')
    setBoard(initialBoard)
    setResult(null)
  }

  return {
    turn,
    board,
    scores,
    result,
    handleRestart,
    handleMark,
    handleStartNextRound,
  }
}
