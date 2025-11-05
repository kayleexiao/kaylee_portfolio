'use client'

import Icon from '@/components/ui/Icon'
import { techIcons } from '@/lib/tech'
import { useEffect, useState } from 'react'

interface TechCarouselProps {
  className?: string
}

// Helper function to chunk array into pages
function chunk<T>(array: readonly T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export default function TechCarousel({ className }: TechCarouselProps) {
  const [page, setPage] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [pageSize, setPageSize] = useState(8)
  
  // Display all tech icons
  const pages = chunk(techIcons, pageSize)
  const total = pages.length
  const canPrev = page > 0
  const canNext = page < total - 1

  // Update page size based on screen width
  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < 768) {
        setPageSize(4) // Mobile: 4 icons
      } else if (window.innerWidth < 1280) {
        setPageSize(6) // Tablet/Small Desktop: 6 icons
      } else {
        setPageSize(8) // Large Desktop: 8 icons
      }
      setPage(0) // Reset to first page when size changes
    }

    updatePageSize()
    window.addEventListener('resize', updatePageSize)
    return () => window.removeEventListener('resize', updatePageSize)
  }, [])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const transitionClass = prefersReducedMotion 
    ? "" 
    : "transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] will-change-transform"
  
  // Determine grid layout based on page size
  const getGridClass = () => {
    if (pageSize === 4) return 'grid-cols-2 grid-rows-2' // 2x2 grid for 4 icons
    if (pageSize === 6) return 'grid-cols-3 grid-rows-2' // 3x2 grid for 6 icons
    return 'grid-cols-4 grid-rows-2' // 4x2 grid for 8 icons
  }

  return (
    <div className={`w-full ${className || ''}`}>
      <div className="relative">
        <div className="overflow-hidden" aria-live="polite">
          <div
            className={`flex ${transitionClass}`}
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, i) => (
              <ul
                key={i}
                className={`shrink-0 w-full grid ${getGridClass()} gap-3 md:gap-4 justify-items-center place-items-center`}
              >
                {group.map((tech) => (
                  <li key={tech.name}>
                    <Icon 
                      name={tech.icon} 
                      className="h-16 w-16 md:h-20 md:w-20 text-rose-500" 
                      alt={tech.name} 
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {total > 1 && (
          <div className="mt-4 md:mt-6 flex items-center justify-center gap-6">
            <span className="text-sm text-ink/60 tabular-nums min-w-[60px] text-center">
              {page + 1} / {total}
            </span>
            {canPrev && (
              <button
                type="button"
                aria-label="Previous"
                onClick={() => setPage(p => Math.max(0, p - 1))}
                className="p-2 rounded-full transition-opacity opacity-70 hover:opacity-100"
              >
                <Icon name="nav-arrow" className="w-4 h-4 rotate-180 text-ink" alt="" />
              </button>
            )}
            {canNext && (
              <button
                type="button"
                aria-label="Next"
                onClick={() => setPage(p => Math.min(total - 1, p + 1))}
                className="p-2 rounded-full transition-opacity opacity-70 hover:opacity-100"
              >
                <Icon name="nav-arrow" className="w-4 h-4 text-ink" alt="" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}