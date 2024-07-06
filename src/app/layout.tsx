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
      <body
        className={
          outfit.className +
          ' flex min-h-screen justify-center bg-dark-navy p-6 text-body uppercase tracking-tracking'
        }
      >
        {children}
      </body>
    </html>
  )
}
