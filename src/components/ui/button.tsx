import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { tv } from '@/lib/tailwind-variants'

const button = tv({
  base: 'inline-flex justify-center',
  variants: {
    color: {
      yellow:
        'bg-light-yellow shadow-light-yellow-shadow hover:bg-light-yellow-hover',
      blue: 'bg-light-blue shadow-light-blue-shadow hover:bg-light-blue-hover',
      silver: 'bg-silver shadow-silver-shadow hover:bg-silver-hover',
    },
    variant: {
      primary:
        'rounded px-4 py-3.5 text-heading-xs text-dark-navy shadow md:px-[1.125rem] md:py-4 md:text-heading-sm',
      secondary:
        'rounded-sm px-4 py-3.5 text-heading-xs text-dark-navy shadow-sm',
      icon: 'size-10 items-center rounded-sm shadow-inner md:size-12',
    },
  },
  defaultVariants: {
    color: 'silver',
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ className, color, variant, ...rest }: ButtonProps) {
  return <button className={button({ className, color, variant })} {...rest} />
}
