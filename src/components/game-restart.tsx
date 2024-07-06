import { Button } from '@/components/ui/button'
import { Restart, RestartPath } from '@/components/icons/restart'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface GameRestartProps {
  onRestart: () => void
}

export function GameRestart({ onRestart }: GameRestartProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="icon" aria-label="Restart">
          <Restart className="size-4 md:size-5">
            <RestartPath className="fill-semi-dark-navy" />
          </Restart>
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />

        <AlertDialog.Content className="fixed inset-x-0 top-1/2 flex h-56 -translate-y-1/2 flex-col items-center justify-center gap-6 bg-semi-dark-navy md:h-64">
          <AlertDialog.Title className="text-heading-md text-silver md:text-heading-lg">
            RESTART GAME?
          </AlertDialog.Title>

          <div className="flex gap-4">
            <AlertDialog.Cancel asChild>
              <Button variant="secondary" color="silver">
                NO, CANCEL
              </Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <Button variant="secondary" color="yellow" onClick={onRestart}>
                YES, RESTART
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
