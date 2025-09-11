import { useEffect } from 'react'

interface UseRevealOptions {
  threshold?: number
  rootMargin?: string
}

export function useReveal({ 
  threshold = 0.2, 
  rootMargin = "0px 0px -10% 0px" 
}: UseRevealOptions = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [threshold, rootMargin])
}
