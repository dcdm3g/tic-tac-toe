import { Mark } from '@/interfaces/mark'

export function opponentOf(mark: Mark) {
  return mark === 'x' ? 'o' : 'x'
}
