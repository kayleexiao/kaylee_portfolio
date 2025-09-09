import { useEffect, useState } from 'react'

interface UseScrollSpyOptions {
  rootMargin?: string
  threshold?: number
  ids: string[]
}

export function useScrollSpy({ 
  rootMargin = '0px', 
  threshold = 0.55, 
  ids 
}: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
    
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setActiveId(entry.target.id)
          }
        })
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
