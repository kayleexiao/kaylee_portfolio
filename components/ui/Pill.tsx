import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'accent'
}

const Pill = forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full transition-all duration-200',
          {
            'bg-white border border-rose-200 text-ink shadow-insetSoft': variant === 'default',
            'bg-rose-200 text-ink': variant === 'secondary',
            'bg-rose-400 text-white': variant === 'accent',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Pill.displayName = 'Pill'

export default Pill
