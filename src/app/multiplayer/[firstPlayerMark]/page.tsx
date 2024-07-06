import type { Mark } from '@/interfaces/mark'
import { MultiplayerGame } from '@/components/multiplayer-game'

export function generateStaticParams() {
  return [{ firstPlayerMark: 'x' }, { firstPlayerMark: 'o' }]
}

interface MultiplayerProps {
  params: { firstPlayerMark: Mark }
}

export default function Multiplayer({ params }: MultiplayerProps) {
  return <MultiplayerGame firstPlayerMark={params.firstPlayerMark} />
}
