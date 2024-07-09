import type { Result } from '@/interfaces/result'
import { Button } from '@/components/ui/button'
import { X, XPath } from '@/components/icons/x'
import { O, OPath } from '@/components/icons/o'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'

interface GameResultProps {
  result: Result
  winningMessages: {
    x: string
    o: string
  }
  onStartNextRound: () => void
}

export function GameResult({
  result,
  winningMessages,
  onStartNextRound,
}: GameResultProps) {
  return (
    <Dialog.Root open={!!result}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed inset-x-0 top-1/2 flex h-56 -translate-y-1/2 flex-col items-center justify-center bg-semi-dark-navy md:h-64">
          {result?.type === 'win' ? (
            <>
              <Dialog.Description className="mb-4 text-base font-bold text-silver md:text-lg">
                {winningMessages[result.winner]}
              </Dialog.Description>

              <Dialog.Title
                data-winner={result.winner}
                className="mb-6 flex items-center gap-2 text-2xl data-[winner=o]:text-light-yellow data-[winner=x]:text-light-blue md:gap-6 md:text-3xl"
              >
                {result.winner === 'x' ? (
                  <X className="size-7 md:size-16">
                    <XPath className="fill-light-blue" />
                  </X>
                ) : (
                  <O className="size-7 md:size-16">
                    <OPath className="fill-light-yellow" />
                  </O>
                )}
                TAKES THE ROUND
              </Dialog.Title>
            </>
          ) : (
            <Dialog.Title className="mb-6 text-2xl text-silver md:mb-8 md:text-3xl">
              ROUND TIED
            </Dialog.Title>
          )}

          <div className="flex gap-4">
            <Button variant="secondary" color="silver" asChild>
              <Link href="/">QUIT</Link>
            </Button>

            <Button
              variant="secondary"
              color="yellow"
              onClick={onStartNextRound}
            >
              NEXT ROUND
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
