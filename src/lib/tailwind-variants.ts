import { cnBase, createTV } from 'tailwind-variants'

export const cn = cnBase

export const tv = createTV({
  twMergeConfig: {
    override: {
      theme: {
        colors: [
          'light-blue',
          'light-blue-hover',
          'light-blue-shadow',
          'light-yellow',
          'light-yellow-hover',
          'light-yellow-shadow',
          'silver',
          'silver-hover',
          'silver-shadow',
          'dark-navy',
          'semi-dark-navy',
        ],
      },
    },
  },
})
