import { cn } from '@/lib/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary'
}

export default function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full transition-colors',
        {
          'bg-brand-pink-light text-brand-pink-dark': variant === 'default',
          'bg-gray-100 text-gray-800': variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  )
}
