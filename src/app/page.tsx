import { GameSetup } from '@/components/game-setup'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-content flex-col gap-10 self-center">
      <Image
        className="self-center"
        src="/logo.svg"
        alt="logo"
        width={72}
        height={32}
      />

      <GameSetup />
    </main>
  )
}
