'use client'

import type { Mark } from '@/interfaces/mark'
import { Logo } from '@/components/icons/logo'
import { GameHeader } from '@/components/game-header'
import { GameTurn } from '@/components/game-turn'
import { GameRestart } from '@/components/game-restart'
import { GameBoard } from '@/components/game-board'
import { GameScoreboard } from '@/components/game-scoreboard'
import { GameResult } from '@/components/game-result'
import { useMultiplayer } from '@/hooks/use-multiplayer'

interface MultiplayerGameProps {
  mark: Mark
}

export function MultiplayerGame({ mark }: MultiplayerGameProps) {
  const {
    turn,
    board,
    scores,
    result,
    handleRestart,
    handleMark,
    handleStartNextRound,
  } = useMultiplayer()

  const players = mark === 'x' ? { x: '1', o: '2' } : { x: '2', o: '1' }

  return (
    <main className="m-6 w-full max-w-content md:self-center">
      <GameHeader>
        <Logo />
        <GameTurn turn={turn} />
        <GameRestart onRestart={handleRestart} />
      </GameHeader>

      <GameBoard
        turn={turn}
        board={board}
        result={result}
        onMark={handleMark}
      />

      <GameScoreboard
        scores={scores}
        players={{ x: 'P'.concat(players.x), o: 'P'.concat(players.o) }}
      />

      <GameResult
        result={result}
        winningMessages={{
          x: `PLAYER ${players.x} WINS!`,
          o: `PLAYER ${players.o} WINS!`,
        }}
        onStartNextRound={handleStartNextRound}
      />
    </main>
  )
}
