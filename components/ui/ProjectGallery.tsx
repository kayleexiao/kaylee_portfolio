'use client'

import { cn } from '@/lib/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ProjectGalleryProps {
  images: string[]
  alt?: string
  /** Viewport height: default is clamp(320px, 50vw, 520px) for responsive scaling */
  height?: string
  /** Whether to show dot indicators (default: true) */
  showDots?: boolean
  /** Arrow placement offset from card edges (default: -3rem) */
  arrowOffset?: string
  className?: string
}

export default function ProjectGallery({ 
  images, 
  alt = 'Project screenshot',
  height = 'clamp(320px, 50vw, 520px)',
  showDots = true,
  arrowOffset = '-3rem',
  className
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Don't render if no images
  if (!images || images.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [images.length])

  // Touch/swipe handlers
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  const animationDuration = reducedMotion ? 0.05 : 0.4

  return (
    <div className={cn('relative w-full', className)}>
      {/* Main Gallery Container */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Image wrapper with consistent styling */}
            <div className="relative w-full h-full max-w-5xl mx-auto px-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-rose-200/50 shadow-pink">
                <Image
                  src={images[currentIndex]}
                  alt={`${alt} ${currentIndex + 1} of ${images.length}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority={currentIndex === 0}
                  loading={currentIndex === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - positioned outside card edges */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              style={{ left: arrowOffset }}
              className="absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-rose-200/50 shadow-pink hover:shadow-pink-hover hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
              aria-label={`Previous image (${currentIndex === 0 ? images.length : currentIndex} of ${images.length})`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              style={{ right: arrowOffset }}
              className="absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-rose-200/50 shadow-pink hover:shadow-pink-hover hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
              aria-label={`Next image (${currentIndex + 2 > images.length ? 1 : currentIndex + 2} of ${images.length})`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && showDots && (
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Gallery navigation">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1} of ${images.length}`}
              className={cn(
                'w-2.5 h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2',
                index === currentIndex 
                  ? 'bg-rose-500 scale-125 shadow-sm' 
                  : 'bg-rose-200 hover:bg-rose-300 hover:scale-110'
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

