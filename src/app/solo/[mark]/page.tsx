import type { Mark } from '@/interfaces/mark'
import { SoloGame } from '@/components/solo-game'

export function generateStaticParams() {
  return [{ mark: 'x' }, { mark: 'o' }]
}

interface SoloProps {
  params: { mark: Mark }
}

export default function Solo({ params }: SoloProps) {
  return <SoloGame mark={params.mark} />
}
