import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
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
        'rounded-lg px-4 pb-[calc(0.875rem_+_8px)] pt-3.5 text-heading-xs text-dark-navy shadow md:px-[1.125rem] md:pb-[calc(1rem_+_8px)] md:pt-4 md:text-heading-sm',
      secondary:
        'rounded px-4 pb-[calc(0.875rem_+_2px)] pt-3.5 text-heading-xs text-dark-navy shadow-sm',
      icon: 'size-10 items-center rounded shadow-sm md:size-13',
    },
  },
  defaultVariants: {
    color: 'silver',
    variant: 'primary',
  },
})

interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'color'>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({
  className,
  color,
  variant,
  asChild = false,
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component className={button({ className, color, variant })} {...rest} />
  )
}
