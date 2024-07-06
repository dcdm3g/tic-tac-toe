import { Button } from '@/components/ui/button'
import { Restart, RestartPath } from '@/components/icons/restart'

export function GameRestart() {
  return (
    <Button variant="icon" aria-label="Restart">
      <Restart className="size-4 md:size-5">
        <RestartPath className="fill-semi-dark-navy" />
      </Restart>
    </Button>
  )
}
