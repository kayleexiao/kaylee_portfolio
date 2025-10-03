import { cn } from '@/lib/cn'
import Icon from './Icon'

interface StarDividerProps {
  className?: string
  compact?: boolean
  scale?: number
  lengthPreset?: 'short' | 'full'
}

export default function StarDivider({ className, compact = false, scale = 1, lengthPreset = 'full' }: StarDividerProps) {
  const marginY = compact ? 'my-4' : 'my-8'
  const diamondSize = 8 * scale
  const sideStarSize = 25 * scale  // +20% from 12px
  const centerStarSize = 40 * scale  // +30% from 16px
  const starGap = 10 * scale
  const maxWidth = lengthPreset === 'short' ? 'max-w-3xl' : 'max-w-full'
  
  return (
    <div className={cn('flex items-center justify-center w-full mx-auto', marginY, maxWidth, className)}>
      {/* Left diamond endcap */}
      <div 
        className="shrink-0 bg-rose-400/70 rotate-45"
        style={{ 
          width: `${diamondSize}px`, 
          height: `${diamondSize}px` 
        }}
        aria-hidden="true"
      />
      
      {/* Left hairline */}
      <div className="flex-1 h-[2px] bg-gradient-to-r from-rose-400/70 via-rose-400/50 to-rose-400/30" />
      
      {/* Star cluster */}
      <div className="flex items-center shrink-0" style={{ gap: `${starGap}px` }}>
        {/* Left small star */}
        <Icon 
          name="divider-star" 
          className="text-rose-400/80"
          width={sideStarSize}
          height={sideStarSize}
          alt=""
        />
        
        {/* Center large star */}
        <Icon 
          name="divider-star" 
          className="text-rose-400"
          width={centerStarSize}
          height={centerStarSize}
          alt=""
        />
        
        {/* Right small star */}
        <Icon 
          name="divider-star" 
          className="text-rose-400/80"
          width={sideStarSize}
          height={sideStarSize}
          alt=""
        />
      </div>
      
      {/* Right hairline */}
      <div className="flex-1 h-[2px] bg-gradient-to-l from-rose-400/70 via-rose-400/50 to-rose-400/30" />
      
      {/* Right diamond endcap */}
      <div 
        className="shrink-0 bg-rose-400/70 rotate-45"
        style={{ 
          width: `${diamondSize}px`, 
          height: `${diamondSize}px` 
        }}
        aria-hidden="true"
      />
    </div>
  )
}

