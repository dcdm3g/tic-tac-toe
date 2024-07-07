'use client'

import type { Mark } from '@/interfaces/mark'

import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'

import { soloGameStateReducer } from '@/reducers/solo-game-state-reducer'
import { initialGameState } from '@/constants/initial-game-state'
import { useReducer } from 'react'

interface SoloGameProps {
  mark: Mark
}

export function SoloGame({ mark }: SoloGameProps) {
  const [{ turn, board, scores }, dispatch] = useReducer(
    soloGameStateReducer,
    initialGameState,
  )

  return (
    <main className="m-6 w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={turn} />
        <GameRestart onRestart={() => dispatch({ type: 'restarted' })} />
      </GameHeader>

      <GameBoard
        turn={turn}
        board={board}
        onMark={(index) => dispatch({ type: 'marked', index })}
      />

      <GameScoreboard
        scores={scores}
        players={mark === 'x' ? { x: 'YOU', o: 'CPU' } : { x: 'CPU', o: 'YOU' }}
      />
    </main>
  )
}
