'use client'

import { RefObject, useEffect } from 'react'

interface UseEqualHeightsOptions {
  property?: 'minHeight' | 'height'
}

export function useEqualHeights(
  refs: RefObject<HTMLElement | null>[],
  options: UseEqualHeightsOptions = {}
) {
  const { property = 'minHeight' } = options

  useEffect(() => {
    const elements = refs.map(ref => ref.current).filter(Boolean) as HTMLElement[]
    
    if (elements.length === 0) return

    let resizeObserver: ResizeObserver | null = null

    const syncHeights = () => {
      if (elements.length === 0) return

      // Get all heights
      const heights = elements.map(el => el.getBoundingClientRect().height)
      const maxHeight = Math.max(...heights)

      // Apply max height to all elements
      elements.forEach(el => {
        if (el.style) {
          el.style[property] = `${maxHeight}px`
        }
      })
    }

    // Initial sync
    setTimeout(syncHeights, 0)

    // Watch for size changes
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(syncHeights)
      })

      elements.forEach(el => {
        if (resizeObserver) {
          resizeObserver.observe(el)
        }
      })
    }

    // Fallback window resize listener
    const handleResize = () => {
      requestAnimationFrame(syncHeights)
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      // Clean up observers
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      window.removeEventListener('resize', handleResize)

      // Reset styles for SSR safety
      elements.forEach(el => {
        if (el.style) {
          el.style[property] = ''
        }
      })
    }
  }, [refs, property])
}
