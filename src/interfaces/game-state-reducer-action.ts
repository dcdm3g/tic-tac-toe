export type GameStateReducerAction =
  | {
      type: 'restarted'
    }
  | {
      type: 'marked'
      index: number
    }
