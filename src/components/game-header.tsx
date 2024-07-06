import type { ReactNode } from 'react'

interface GameHeaderProps {
  children: ReactNode
}

export function GameHeader({ children }: GameHeaderProps) {
  return (
    <header className="flex items-center justify-between">{children}</header>
  )
}
