import type { Board } from '@/interfaces/board'
import type { GameState } from '@/interfaces/game-state'
import type { GameStateReducerAction } from '@/interfaces/game-state-reducer-action'
import { initialBoard } from '@/constants/initial-board'
import { initialScores } from '@/constants/initial-scores'

export function multiplayerGameStateReducer(
  gameState: GameState,
  action: GameStateReducerAction,
): GameState {
  switch (action.type) {
    case 'restarted': {
      return {
        turn: 'x',
        board: initialBoard,
        scores: initialScores,
      }
    }

    case 'marked': {
      return {
        ...gameState,
        turn: gameState.turn === 'x' ? 'o' : 'x',
        board: gameState.board.with(action.index, gameState.turn) as Board,
      }
    }
  }
}
