import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/app/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    colors: {
      'light-blue': 'rgb(49, 195, 189)',
      'light-blue-hover': 'rgb(101, 233, 228)',
      'light-yellow': 'rgb(242, 177, 55)',
      'light-yellow-hover': 'rgb(255, 200, 96)',
      'dark-navy': 'rgb(26, 42, 51)',
      'semi-dark-navy': 'rgb(31, 54, 65)',
      silver: 'rgb(168, 191, 201)',
      'silver-hover': 'rgb(219, 232, 237)',
    },
    fontSize: {
      body: ['0.875rem', { lineHeight: '1.1rem', fontWeight: 500 }],
      'heading-xs': ['1rem', { lineHeight: '1.2625rem', fontWeight: 700 }],
      'heading-sm': ['1.25rem', { lineHeight: '1.575rem', fontWeight: 700 }],
      'heading-md': ['1.5rem', { lineHeight: '1.875rem', fontWeight: 700 }],
      'heading-lg': ['2.5rem', { lineHeight: '3.15rem', fontWeight: 700 }],
    },
    letterSpacing: {
      tracking: '0.0625em',
    },
    extend: {},
  },
  plugins: [],
}

export default config
