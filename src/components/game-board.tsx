import type { Board } from '@/interfaces/board'
import type { Mark } from '@/interfaces/mark'
import type { Result } from '@/interfaces/result'
import { XOutline, XOutlinePath } from '@/components/icons/x-outline'
import { OOutline, OOutlinePath } from '@/components/icons/o-outline'
import { X, XPath } from '@/components/icons/x'
import { O, OPath } from '@/components/icons/o'

interface GameBoardProps {
  board: Board
  turn: Mark
  result: Result
  onMark: (index: number) => void
}

export function GameBoard({ board, turn, result, onMark }: GameBoardProps) {
  return (
    <div className="mt-16 grid aspect-square grid-cols-3 grid-rows-3 gap-5 md:mt-5">
      {board.map((m, i) => (
        <button
          key={i}
          data-mark={m}
          data-highlighted={
            result?.type === 'win' && result.pattern.includes(i)
          }
          className="group flex items-center justify-center rounded bg-semi-dark-navy shadow disabled:cursor-not-allowed data-[mark=o]:data-[highlighted=true]:bg-light-yellow data-[mark=x]:data-[highlighted=true]:bg-light-blue md:rounded-lg"
          aria-label="Mark"
          disabled={!!m}
          onClick={() => onMark(i)}
        >
          {!m ? (
            turn === 'x' ? (
              <XOutline className="size-5/12 opacity-0 transition-opacity group-hover:opacity-100 md:size-16">
                <XOutlinePath className="stroke-light-blue" />
              </XOutline>
            ) : (
              <OOutline className="size-5/12 opacity-0 transition-opacity group-hover:opacity-100 md:size-16">
                <OOutlinePath className="stroke-light-yellow" />
              </OOutline>
            )
          ) : m === 'x' ? (
            <X className="size-5/12 md:size-16">
              <XPath className="fill-light-blue group-data-[highlighted=true]:fill-semi-dark-navy" />
            </X>
          ) : (
            <O className="size-5/12 md:size-16">
              <OPath className="fill-light-yellow group-data-[highlighted=true]:fill-semi-dark-navy" />
            </O>
          )}
        </button>
      ))}
    </div>
  )
}
