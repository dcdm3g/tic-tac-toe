'use client'

import type { Mark } from '@/interfaces/mark'
import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'
import { GameResult } from '@/components/game-result'
import { useSolo } from '@/hooks/use-solo'

const messages = { victory: 'YOU WON!', defeat: 'OH NO, YOU LOST...' }

interface SoloGameProps {
  mark: Mark
}

export function SoloGame({ mark }: SoloGameProps) {
  const {
    board,
    scores,
    result,
    handleMark,
    handleRestart,
    handleStartNextRound,
  } = useSolo(mark)

  return (
    <main className="m-6 w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={mark} />
        <GameRestart onRestart={handleRestart} />
      </GameHeader>

      <GameBoard
        turn={mark}
        board={board}
        onMark={handleMark}
        result={result}
      />

      <GameScoreboard
        scores={scores}
        players={mark === 'x' ? { x: 'YOU', o: 'CPU' } : { x: 'CPU', o: 'YOU' }}
      />

      <GameResult
        result={result}
        winningMessages={
          mark === 'x'
            ? { x: messages.victory, o: messages.defeat }
            : { x: messages.defeat, o: messages.victory }
        }
        onStartNextRound={handleStartNextRound}
      />
    </main>
  )
}
