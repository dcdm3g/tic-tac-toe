import type { Board } from '@/interfaces/board'
import type { Mark } from '@/interfaces/mark'
import { XOutline, XOutlinePath } from '@/components/icons/x-outline'
import { OOutline, OOutlinePath } from '@/components/icons/o-outline'
import { X, XPath } from '@/components/icons/x'
import { O, OPath } from '@/components/icons/o'

interface GameBoardProps {
  board: Board
  turn: Mark
  onMark: (index: number) => void
}

export function GameBoard({ board, turn, onMark }: GameBoardProps) {
  return (
    <div className="mt-16 grid aspect-square grid-cols-3 grid-rows-3 gap-5 md:mt-5">
      {board.map((mark, index) => (
        <button
          key={index}
          className="group flex items-center justify-center rounded bg-semi-dark-navy shadow *:size-5/12 disabled:cursor-not-allowed md:rounded-lg md:*:size-16"
          aria-label="Mark"
          disabled={Boolean(mark)}
          onClick={() => onMark(index)}
        >
          {!mark ? (
            turn === 'x' ? (
              <XOutline className="opacity-0 transition-opacity group-hover:opacity-100">
                <XOutlinePath className="stroke-light-blue" />
              </XOutline>
            ) : (
              <OOutline className="opacity-0 transition-opacity group-hover:opacity-100">
                <OOutlinePath className="stroke-light-yellow stroke-2" />
              </OOutline>
            )
          ) : mark === 'x' ? (
            <X>
              <XPath className="fill-light-blue" />
            </X>
          ) : (
            <O>
              <OPath className="fill-light-yellow" />
            </O>
          )}
        </button>
      ))}
    </div>
  )
}
