import { cn } from '@/lib/cn'
import { forwardRef } from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = 'section', padding = 'lg', ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(
          'container mx-auto px-4',
          {
            'py-8': padding === 'sm',
            'py-12': padding === 'md',
            'py-16': padding === 'lg',
            'py-24': padding === 'xl',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export default Section
