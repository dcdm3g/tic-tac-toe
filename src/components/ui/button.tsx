import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps } from 'react'

const button = tv({
  base: 'text-dark-navy',
  variants: {
    color: {
      yellow: 'bg-light-yellow shadow-[#CC8B13] hover:bg-light-yellow-hover',
      blue: 'bg-light-blue shadow-[#118C87] hover:bg-light-blue-hover',
      silver: 'bg-silver shadow-[#6B8997] hover:bg-silver-hover',
    },
    size: {
      base: 'rounded-2xl p-5 text-heading-sm shadow-[inset_0_-8px]',
      sm: 'rounded-[0.625rem] p-4 text-heading-xs shadow-[inset_0_-4px]',
      icon: 'rounded-[0.625rem] p-8 shadow-[inset_0_-4px]',
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
