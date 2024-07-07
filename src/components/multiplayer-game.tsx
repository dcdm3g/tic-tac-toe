'use client'

import type { Mark } from '@/interfaces/mark'
import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'
import { useMultiplayer } from '@/hooks/use-multiplayer'

interface MultiplayerGameProps {
  mark: Mark
}

export function MultiplayerGame({ mark }: MultiplayerGameProps) {
  const { turn, board, scores, handleRestart, handleMark } = useMultiplayer()

  return (
    <main className="m-6 w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={turn} />
        <GameRestart onRestart={handleRestart} />
      </GameHeader>

      <GameBoard board={board} turn={turn} onMark={handleMark} />

      <GameScoreboard
        scores={scores}
        players={mark === 'x' ? { x: 'P1', o: 'P2' } : { x: 'P2', o: 'P1' }}
      />
    </main>
  )
}
