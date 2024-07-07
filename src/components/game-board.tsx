import type { Board } from '@/interfaces/board'

interface GameBoardProps {
  board: Board
}

export function GameBoard({ board }: GameBoardProps) {
  return (
    <div className="mt-16 grid aspect-square grid-cols-3 grid-rows-3 gap-5 md:mt-5">
      {board.map((m, i) => (
        <button
          key={i}
          className="rounded bg-semi-dark-navy shadow md:rounded-lg"
          aria-label="Mark"
        />
      ))}
    </div>
  )
}
