import { useEffect, useState } from 'react'

interface UseScrollSpyOptions {
  rootMargin?: string
  threshold?: number | number[]
  ids: string[]
}

export function useScrollSpy({ 
  rootMargin = '-35% 0px -55% 0px', 
  threshold = [0, 0.1], 
  ids 
}: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
    
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const intersectingEntries = entries.filter(entry => entry.isIntersecting)
        
        if (intersectingEntries.length > 0) {
          // Sort by intersection ratio (highest first) and then by order in the list
          intersectingEntries.sort((a, b) => {
            if (Math.abs(a.intersectionRatio - b.intersectionRatio) < 0.01) {
              // If ratios are very close, prefer the one that appears earlier in the ids array
              return ids.indexOf(a.target.id) - ids.indexOf(b.target.id)
            }
            return b.intersectionRatio - a.intersectionRatio
          })
          
          const newActiveId = intersectingEntries[0].target.id
          
          // Map intro to about for navbar display
          const displayId = newActiveId === 'intro' ? 'about' : newActiveId
          setActiveId(displayId)
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    elements.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [ids, rootMargin, threshold])

  return activeId
}
