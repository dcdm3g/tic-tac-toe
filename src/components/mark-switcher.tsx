import { Mark } from '@/interfaces/mark'
import { Dispatch, SetStateAction } from 'react'
import { O, OPath } from '@/components/icons/o'
import { X, XPath } from '@/components/icons/x'

interface MarkSwitcherProps {
  mark: Mark
  setMark: Dispatch<SetStateAction<Mark>>
}

export function MarkSwitcher({ mark, setMark }: MarkSwitcherProps) {
  return (
    <div className="flex flex-col items-center rounded bg-semi-dark-navy p-6 shadow">
      <h1 className="text-heading-xs text-silver">PICK PLAYER 1&apos;S MARK</h1>

      <div className="mt-6 flex self-stretch rounded-sm bg-dark-navy px-2 py-2.5">
        <button
          data-selected={mark === 'x'}
          className="group flex-1 rounded-sm py-3 transition-colors hover:bg-silver/5 data-[selected=true]:bg-silver"
          onClick={() => setMark('x')}
        >
          <X className="mx-auto">
            <XPath className="fill-silver transition-colors group-data-[selected=true]:fill-dark-navy" />
          </X>
        </button>

        <button
          data-selected={mark === 'o'}
          className="group flex-1 rounded-sm py-3 transition-colors hover:bg-silver/5 data-[selected=true]:bg-silver"
          onClick={() => setMark('o')}
        >
          <O className="mx-auto">
            <OPath className="fill-silver transition-colors group-data-[selected=true]:fill-dark-navy" />
          </O>
        </button>
      </div>

      <p className="mt-4 text-silver">REMEMBER : X GOES FIRST</p>
    </div>
  )
}
