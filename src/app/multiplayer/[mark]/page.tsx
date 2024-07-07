import type { Mark } from '@/interfaces/mark'
import { MultiplayerGame } from '@/components/multiplayer-game'

export function generateStaticParams() {
  return [{ mark: 'x' }, { mark: 'o' }]
}

interface MultiplayerProps {
  params: { mark: Mark }
}

export default function Multiplayer({ params }: MultiplayerProps) {
  return <MultiplayerGame mark={params.mark} />
}
