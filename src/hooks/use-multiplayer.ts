import type { Mark } from '@/interfaces/mark'
import type { Board } from '@/interfaces/board'
import type { Result } from '@/interfaces/result'
import { initialBoard } from '@/constants/initial-board'
import { initialScores } from '@/constants/initial-scores'
import { getResult } from '@/utils/get-result'
import { opponentOf } from '@/utils/opponent-of'
import { applyScore } from '@/utils/apply-score'
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
    const nextResult = getResult(nextBoard, turn)

    setBoard(nextBoard)
    setResult(nextResult)

    if (nextResult) {
      setScores((s) => applyScore(s, nextResult))
      return
    }

    setTurn((t) => opponentOf(t))
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
