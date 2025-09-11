import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  sheen?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, sheen = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/80 backdrop-blur-sm border border-rose-200/50 rounded-2xl shadow-pink transition-all duration-300',
          hover && 'hover:shadow-pink-hover hover:-translate-y-1 hover:scale-[1.02]',
          sheen && 'sheen relative overflow-hidden',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export default Card