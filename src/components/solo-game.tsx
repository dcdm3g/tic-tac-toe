'use client'

import type { Mark } from '@/interfaces/mark'
import type { Board } from '@/interfaces/board'
import type { Scores } from '@/interfaces/scores'

import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'

import { useState } from 'react'

interface SoloGameProps {
  mark: Mark
}

export function SoloGame({ mark }: SoloGameProps) {
  const [turn] = useState<Mark>('x')
  const [board] = useState(new Array(9).fill(null) as Board)
  const [scores] = useState<Scores>({ x: 0, ties: 0, o: 0 })

  return (
    <main className="w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={turn} />
        <GameRestart />
      </GameHeader>

      <GameBoard board={board} />

      <GameScoreboard
        scores={scores}
        players={mark === 'x' ? { x: 'YOU', o: 'CPU' } : { x: 'CPU', o: 'YOU' }}
      />
    </main>
  )
}
