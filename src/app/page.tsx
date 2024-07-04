import { GameSetup } from '@/components/game-setup'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-content flex-col gap-8 self-center md:gap-10">
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
