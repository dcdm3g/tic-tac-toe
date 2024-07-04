'use client'

import { Mark } from '@/interfaces/mark'
import { useState } from 'react'
import { MarkSwitcher } from '@/components/mark-switcher'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function GameSetup() {
  const [mark, setMark] = useState<Mark>('o')

  return (
    <div className="flex flex-col gap-10">
      <MarkSwitcher {...{ mark, setMark }} />

      <div className="flex flex-col gap-4">
        <Button color="yellow" asChild>
          <Link
            href={{ pathname: '/solo', query: { m: mark } }}
            prefetch={false}
          >
            NEW GAME (VS CPU)
          </Link>
        </Button>

        <Button color="blue" asChild>
          <Link
            href={{ pathname: '/multiplayer', query: { m: mark } }}
            prefetch={false}
          >
            NEW GAME (VS PLAYER)
          </Link>
        </Button>
      </div>
    </div>
  )
}
