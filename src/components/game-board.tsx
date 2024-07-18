import type { Board } from '@/interfaces/board'
import type { Mark } from '@/interfaces/mark'
import type { Result } from '@/interfaces/result'
import { XOutline } from '@/components/icons/x-outline'
import { OOutline } from '@/components/icons/o-outline'
import { X } from '@/components/icons/x'
import { O } from '@/components/icons/o'

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
              <XOutline className="size-5/12 text-light-blue opacity-0 transition-opacity group-hover:opacity-100 md:size-16" />
            ) : (
              <OOutline className="size-5/12 text-light-yellow opacity-0 transition-opacity group-hover:opacity-100 md:size-16" />
            )
          ) : m === 'x' ? (
            <X className="size-5/12 text-light-blue group-data-[highlighted=true]:text-semi-dark-navy md:size-16" />
          ) : (
            <O className="size-5/12 text-light-yellow group-data-[highlighted=true]:text-semi-dark-navy md:size-16" />
          )}
        </button>
      ))}
    </div>
  )
}
