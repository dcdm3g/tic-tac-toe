import type { ReactNode } from 'react'

interface GameRootProps {
  children: ReactNode
}

export function GameRoot({ children }: GameRootProps) {
  return (
    <main className="m-6 w-full max-w-content md:self-center">{children}</main>
  )
}
