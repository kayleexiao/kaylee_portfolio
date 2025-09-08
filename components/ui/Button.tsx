import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'ghost' | 'pill'
  size?: 'sm' | 'md' | 'lg'
}


type ButtonPropsExtended = ButtonProps & {
  as?: 'button' | 'a'
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsExtended>(
  ({ className, variant = 'solid', size = 'md', as = 'button', ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink disabled:pointer-events-none disabled:opacity-50',
      {
        'bg-brand-pink text-white hover:bg-brand-pink-dark hover:shadow-lg hover:-translate-y-0.5': variant === 'solid',
        'text-brand-pink hover:bg-brand-pink-light': variant === 'ghost',
        'bg-brand-pink-light text-brand-pink hover:bg-brand-pink hover:text-white': variant === 'pill',
        'px-3 py-1.5 text-sm rounded-lg': size === 'sm',
        'px-4 py-2 text-sm rounded-xl': size === 'md',
        'px-6 py-3 text-base rounded-2xl': size === 'lg',
      },
      className
    )
    if (as === 'a') {
      // @ts-expect-error
      return <a className={classes} {...props} />
    }
    return <button className={classes} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export default Button
