import { GameLogo } from '@/components/game-logo'
import { GameSetup } from '@/components/game-setup'

export default function Home() {
  return (
    <main className="m-6 flex w-full max-w-content flex-col gap-8 self-center md:gap-10">
      <GameLogo className="self-center" />
      <GameSetup />
    </main>
  )
}
