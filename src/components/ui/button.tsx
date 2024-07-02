import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps } from 'react'

const button = tv({
  base: 'inline-flex justify-center text-dark-navy',
  variants: {
    color: {
      yellow:
        'shadow-light-yellow-shadow bg-light-yellow hover:bg-light-yellow-hover',
      blue: 'shadow-light-blue-shadow bg-light-blue hover:bg-light-blue-hover',
      silver: 'shadow-silver-shadow bg-silver hover:bg-silver-hover',
    },
    size: {
      base: 'rounded px-4 py-3.5 text-heading-xs shadow md:px-[1.125rem] md:py-4 md:text-heading-sm',
      sm: 'rounded-sm px-4 py-3.5 text-heading-xs shadow-sm',
      icon: 'size-10 items-center rounded-sm shadow-inner md:size-12',
    },
  },
  defaultVariants: {
    color: 'silver',
    size: 'base',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ className, color, size, ...rest }: ButtonProps) {
  return <button className={button({ className, color, size })} {...rest} />
}
