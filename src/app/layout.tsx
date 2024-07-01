import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
  description: 'Play tic-tac-toe solo or with a friend!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={outfit.className + ' text-body tracking-tracking'}>
        {children}
      </body>
    </html>
  )
}
