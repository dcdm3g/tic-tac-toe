import { Logo } from '@/components/icons/logo'
import { GameSetup } from '@/components/game-setup'

export default function Home() {
  return (
    <main className="flex w-full max-w-content flex-col gap-8 self-center md:gap-10">
      <Logo className="self-center" />
      <GameSetup />
    </main>
  )
}
