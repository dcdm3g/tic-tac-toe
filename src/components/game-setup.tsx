'use client'

import { Mark } from '@/interfaces/mark'
import { useState } from 'react'
import { MarkSwitcher } from '@/components/mark-switcher'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function GameSetup() {
  const [mark, setMark] = useState<Mark>('o')

  return (
    <div className="flex flex-col gap-12">
      <MarkSwitcher {...{ mark, setMark }} />

      <div className="flex flex-col gap-6">
        <Link href={{ pathname: '/solo', query: { m: mark } }}>
          <Button className="w-full" color="yellow">
            NEW GAME (VS CPU)
          </Button>
        </Link>

        <Link href={{ pathname: '/multiplayer', query: { m: mark } }}>
          <Button className="w-full" color="blue">
            NEW GAME (VS PLAYER)
          </Button>
        </Link>
      </div>
    </div>
  )
}
