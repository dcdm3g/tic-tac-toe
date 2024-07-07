'use client'

import type { Mark } from '@/interfaces/mark'

import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'

import { multiplayerGameStateReducer } from '@/reducers/multiplayer-game-state-reducer'
import { initialGameState } from '@/constants/initial-game-state'
import { useReducer } from 'react'

interface MultiplayerGameProps {
  firstPlayerMark: Mark
}

export function MultiplayerGame({ firstPlayerMark }: MultiplayerGameProps) {
  const [{ board, turn, scores }, dispatch] = useReducer(
    multiplayerGameStateReducer,
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
        board={board}
        turn={turn}
        onMark={(index) => dispatch({ type: 'marked', index })}
      />

      <GameScoreboard
        scores={scores}
        players={
          firstPlayerMark === 'x' ? { x: 'P1', o: 'P2' } : { x: 'P2', o: 'P1' }
        }
      />
    </main>
  )
}
