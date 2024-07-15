import type { VariantProps } from 'tailwind-variants'
import { type ComponentProps, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center',
  variants: {
    color: {
      yellow:
        'bg-light-yellow shadow-light-yellow-shadow hover:bg-light-yellow-hover',
      blue: 'bg-light-blue shadow-light-blue-shadow hover:bg-light-blue-hover',
      silver: 'bg-silver shadow-silver-shadow hover:bg-silver-hover',
    },
    variant: {
      primary:
        'h-14 rounded-lg pb-[8px] text-lg text-dark-navy shadow md:h-16 md:text-xl',
      secondary: 'h-13 rounded px-4 pb-[2px] text-lg text-dark-navy shadow-sm',
      icon: 'size-10 rounded-sm shadow-sm md:size-13 md:rounded',
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant, asChild = false, ...rest }, ref) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        className={button({ className, color, variant })}
        {...{ ...rest, ref }}
      />
    )
  },
)

Button.displayName = 'Button'
