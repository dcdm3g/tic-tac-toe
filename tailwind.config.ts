import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/app/**/*.tsx', 'src/components/**/*.tsx'],
  theme: {
    colors: {
      'light-blue': {
        DEFAULT: 'rgb(49, 195, 189)',
        hover: 'rgb(101, 233, 228)',
        shadow: 'rgb(17, 140, 135)',
      },
      'light-yellow': {
        DEFAULT: 'rgb(242, 177, 55)',
        hover: 'rgb(255, 200, 96)',
        shadow: 'rgb(204, 139, 19)',
      },
      silver: {
        DEFAULT: 'rgb(168, 191, 201)',
        hover: 'rgb(219, 232, 237)',
        shadow: 'rgb(107, 137, 151)',
      },
      'dark-navy': 'rgb(26, 42, 51)',
      'semi-dark-navy': 'rgb(31, 54, 65)',
    },
    fontSize: {
      sm: ['0.75rem', { lineHeight: '0.9375rem', fontWeight: 500 }],
      body: ['0.875rem', { lineHeight: '1.125rem', fontWeight: 500 }],
      'heading-xs': ['1rem', { lineHeight: '1.25rem', fontWeight: 700 }],
      'heading-sm': ['1.25rem', { lineHeight: '1.5625rem', fontWeight: 700 }],
      'heading-md': ['1.5rem', { lineHeight: '1.875rem', fontWeight: 700 }],
      'heading-lg': ['2.5rem', { lineHeight: '3.125rem', fontWeight: 700 }],
    },
    letterSpacing: {
      tracking: '0.0625em',
    },
    boxShadow: {
      DEFAULT: 'inset 0 -8px #10212A',
      sm: 'inset 0 -4px #10212A',
    },
    borderRadius: {
      lg: '0.9375rem',
      DEFAULT: '0.625rem',
      sm: '0.3125rem',
    },
    extend: {
      maxWidth: {
        content: '28.75rem',
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}

export default config
