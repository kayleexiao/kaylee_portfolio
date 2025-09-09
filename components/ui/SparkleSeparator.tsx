import { cn } from '@/lib/cn'
import Icon from './Icon'

interface SparkleSeparatorProps {
  icon?: 'projects-star' | 'intro-star' | 'about-star' | 'contact-star' | 'tech-stack-star'
  className?: string
}

export default function SparkleSeparator({ 
  icon = 'projects-star', 
  className 
}: SparkleSeparatorProps) {
  return (
    <div className={cn('flex items-center justify-center space-x-4', className)}>
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
      <Icon 
        name={icon} 
        className="w-5 h-5 text-rose-400 animate-pulse" 
        alt=""
      />
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
    </div>
  )
}
