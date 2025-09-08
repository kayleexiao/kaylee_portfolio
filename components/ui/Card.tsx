import { cn } from '@/lib/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl card-shadow transition-all duration-300',
        hover && 'hover:card-shadow-hover hover:-translate-y-1',
        className
      )}
      {...props}
    />
  )
}
