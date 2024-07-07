'use client'

import type { Mark } from '@/interfaces/mark'
import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'
import { useSolo } from '@/hooks/use-solo'

interface SoloGameProps {
  mark: Mark
}

export function SoloGame({ mark }: SoloGameProps) {
  const { turn, board, scores, handleMark, handleRestart } = useSolo()

  return (
    <main className="m-6 w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={turn} />
        <GameRestart onRestart={handleRestart} />
      </GameHeader>

      <GameBoard turn={turn} board={board} onMark={handleMark} />

      <GameScoreboard
        scores={scores}
        players={mark === 'x' ? { x: 'YOU', o: 'CPU' } : { x: 'CPU', o: 'YOU' }}
      />
    </main>
  )
}
