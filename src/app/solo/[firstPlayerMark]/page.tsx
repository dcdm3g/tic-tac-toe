import type { Mark } from '@/interfaces/mark'
import { SoloGame } from '@/components/solo-game'

export function generateStaticParams() {
  return [{ firstPlayerMark: 'x' }, { firstPlayerMark: 'o' }]
}

interface SoloProps {
  params: { firstPlayerMark: Mark }
}

export default function Solo({ params }: SoloProps) {
  return <SoloGame mark={params.firstPlayerMark} />
}
