'use client'

import type { Mark } from '@/interfaces/mark'
import { Logo } from '@/components/icons/logo'
import { GameRoot } from '@/components/game-root'
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

  const playerIds = mark === 'x' ? { x: '1', o: '2' } : { x: '2', o: '1' }

  return (
    <GameRoot>
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
        players={{ x: 'P' + playerIds.x, o: 'P' + playerIds.o }}
      />

      <GameResult
        result={result}
        winningMessages={{
          x: `PLAYER ${playerIds.x} WINS!`,
          o: `PLAYER ${playerIds.o} WINS!`,
        }}
        onStartNextRound={handleStartNextRound}
      />
    </GameRoot>
  )
}
