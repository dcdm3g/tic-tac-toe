import type { Scores } from '@/interfaces/scores'

interface GameScoreboardProps {
  scores: Scores
  players: {
    x: string
    o: string
  }
}

export function GameScoreboard({ scores, players }: GameScoreboardProps) {
  return (
    <footer className="mt-5 flex justify-between gap-5">
      {Object.entries(scores).map((entry) => {
        const [title, score] = entry as [keyof typeof scores, number]

        return (
          <div
            key={title}
            className="flex h-16 flex-1 flex-col items-center justify-center rounded text-sm text-dark-navy first:bg-light-blue last:bg-light-yellow even:bg-silver md:h-18 md:rounded-lg"
          >
            <h2 className="text-sm text-dark-navy md:text-base">
              {title}
              {title !== 'ties' ? ` (${players[title]})` : ''}
            </h2>

            <p className="text-xl text-dark-navy md:text-2xl">{score}</p>
          </div>
        )
      })}
    </footer>
  )
}
