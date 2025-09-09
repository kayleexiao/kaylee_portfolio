'use client'

import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: React.ReactNode
  className?: string
  slow?: boolean
}

export default function Reveal({ children, className, slow = false }: RevealProps) {
  useReveal()

  return (
    <div className={cn('reveal', slow && 'reveal-slow', className)}>
      {children}
    </div>
  )
}
