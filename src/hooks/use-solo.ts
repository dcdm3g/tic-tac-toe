import type { Mark } from '@/interfaces/mark'
import type { Board } from '@/interfaces/board'
import type { Result } from '@/interfaces/result'
import { initialBoard } from '@/constants/initial-board'
import { initialScores } from '@/constants/initial-scores'
import { getResult } from '@/utils/get-result'
import { applyScore } from '@/utils/apply-score'
import { opponentOf } from '@/utils/opponent-of'
import { markUsingCPU } from '@/utils/mark-using-cpu'
import { useState, useEffect } from 'react'

export function useSolo(mark: Mark) {
  const [board, setBoard] = useState(initialBoard)
  const [scores, setScores] = useState(initialScores)
  const [result, setResult] = useState<Result>(null)

  useEffect(() => {
    if (mark === 'o') {
      setBoard((b) => markUsingCPU(b, 'x'))
    }

    return () => setBoard(initialBoard)
  }, [mark])

  function handleRestart() {
    setBoard(mark === 'o' ? markUsingCPU(initialBoard, 'x') : initialBoard)
    setScores(initialScores)
    setResult(null)
  }

  function handleMark(index: number) {
    const boardAfterPlayerTurn = board.with(index, mark) as Board
    const resultAfterPlayerTurn = getResult(boardAfterPlayerTurn, mark)

    if (resultAfterPlayerTurn) {
      setScores((s) => applyScore(s, resultAfterPlayerTurn))
      setBoard(boardAfterPlayerTurn)
      setResult(resultAfterPlayerTurn)

      return
    }

    const CPUMark = opponentOf(mark)

    const boardAfterCPUTurn = markUsingCPU(boardAfterPlayerTurn, CPUMark)
    const resultAfterCPUTurn = getResult(boardAfterCPUTurn, CPUMark)

    setBoard(boardAfterCPUTurn)
    setResult(resultAfterCPUTurn)

    if (resultAfterCPUTurn) {
      setScores((s) => applyScore(s, resultAfterCPUTurn))
    }
  }

  function handleStartNextRound() {
    setBoard(mark === 'o' ? markUsingCPU(initialBoard, 'x') : initialBoard)
    setResult(null)
  }

  return {
    board,
    scores,
    result,
    handleRestart,
    handleMark,
    handleStartNextRound,
  }
}
