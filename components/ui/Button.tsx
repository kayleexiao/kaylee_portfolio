import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

type ButtonProps = {
  variant?: 'solid' | 'ghost' | 'pill'
  size?: 'sm' | 'md' | 'lg'
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' })
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', size = 'md', as = 'button', ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-gradient-to-r from-rose-400 to-rose-600 text-white shadow-pink hover:brightness-110 active:translate-y-0.5': variant === 'solid',
        'text-rose-600 hover:bg-rose-200/50': variant === 'ghost',
        'bg-rose-200 text-ink hover:bg-rose-300': variant === 'pill',
      },
      {
        'px-3 py-1.5 text-sm rounded-full': size === 'sm',
        'px-4 py-2 text-sm rounded-full': size === 'md',
        'px-6 py-3 text-base rounded-full': size === 'lg',
      },
      className
    )

    if (as === 'a') {
      return <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button