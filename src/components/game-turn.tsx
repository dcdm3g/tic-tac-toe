import type { Mark } from '@/interfaces/mark'
import { X, XPath } from '@/components/icons/x'
import { O, OPath } from '@/components/icons/o'

interface GameTurnProps {
  turn: Mark
}

export function GameTurn({ turn }: GameTurnProps) {
  return (
    <div className="mr-8 flex h-10 items-center justify-center gap-2 rounded-sm bg-semi-dark-navy px-4 pb-[4px] shadow-sm md:mr-5 md:h-13 md:gap-3 md:rounded md:px-8">
      {turn === 'x' ? (
        <X className="size-4 md:size-5">
          <XPath className="fill-silver" />
        </X>
      ) : (
        <O className="size-4 md:size-5">
          <OPath className="fill-silver" />
        </O>
      )}

      <p className="text-body font-bold text-silver md:text-heading-xs">TURN</p>
    </div>
  )
}
