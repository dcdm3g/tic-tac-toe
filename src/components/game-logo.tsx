import { cnBase as cn } from 'tailwind-variants'
import { X } from '@/components/icons/x'
import { O } from '@/components/icons/o'

interface GameLogoProps {
  className?: string
}

export function GameLogo({ className }: GameLogoProps) {
  return (
    <div className={cn('flex gap-2', className)}>
      <X className="size-8 text-light-blue" />
      <O className="size-8 text-light-yellow" />
    </div>
  )
}
