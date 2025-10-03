import { cn } from '@/lib/cn'
import Icon from './Icon'

interface StarDividerProps {
  className?: string
  label?: string
}

export default function StarDivider({ className, label }: StarDividerProps) {
  return (
    <div className={cn('flex items-center justify-center gap-3 my-8', className)}>
      {/* Left star */}
      <Icon 
        name="divider-star" 
        className="w-4 h-4 text-rose-400/80" 
        alt=""
      />
      
      {/* Center line with optional label */}
      <div className="flex items-center gap-3">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300/60 to-rose-400/40" />
        {label && (
          <span className="text-xs font-semibold tracking-widest text-rose-400/90 uppercase whitespace-nowrap">
            {label}
          </span>
        )}
        <div className="w-16 h-px bg-gradient-to-l from-transparent via-rose-300/60 to-rose-400/40" />
      </div>
      
      {/* Right star */}
      <Icon 
        name="divider-star" 
        className="w-4 h-4 text-rose-400/80" 
        alt=""
      />
    </div>
  )
}

