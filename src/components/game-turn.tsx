import type { Mark } from '@/interfaces/mark'
import { X } from '@/components/icons/x'
import { O } from '@/components/icons/o'

interface GameTurnProps {
  turn: Mark
}

export function GameTurn({ turn }: GameTurnProps) {
  const Mark = turn === 'x' ? X : O

  return (
    <div className="mr-8 flex h-10 items-center justify-center gap-2 rounded-sm bg-semi-dark-navy px-4 pb-[4px] shadow-sm md:mr-5 md:h-13 md:gap-3 md:rounded md:px-8">
      <Mark className="size-4 text-silver md:size-5" />
      <p className="text-base font-bold text-silver md:text-lg">TURN</p>
    </div>
  )
}
