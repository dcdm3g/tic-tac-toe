'use client'

import type { Mark } from '@/interfaces/mark'

import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'

import { initialBoard } from '@/constants/initial-board'
import { useState } from 'react'

interface SoloGameProps {
  mark: Mark
}

export function SoloGame({ mark }: SoloGameProps) {
  const [turn, setTurn] = useState<Mark>('x')
  const [board, setBoard] = useState(initialBoard)
  const [scores] = useState({ x: 0, ties: 0, o: 0 })

  function handleRestart() {
    setBoard(initialBoard)
    setTurn('x')
  }

  return (
    <main className="m-6 w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={turn} />
        <GameRestart onRestart={handleRestart} />
      </GameHeader>

      <GameBoard board={board} />

      <GameScoreboard
        scores={scores}
        players={mark === 'x' ? { x: 'YOU', o: 'CPU' } : { x: 'CPU', o: 'YOU' }}
      />
    </main>
  )
}
