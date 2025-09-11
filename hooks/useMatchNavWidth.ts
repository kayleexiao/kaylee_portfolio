import { useEffect } from 'react'

export function useMatchNavWidth() {
  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null
    let timeoutId: NodeJS.Timeout | null = null

    const syncWidth = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      timeoutId = setTimeout(() => {
        const nav = document.querySelector('[data-shell="nav-pill"]') as HTMLElement
        const hero = document.querySelector('[data-shell="hero-card"]') as HTMLElement
        
        if (nav && hero) {
          const navWidth = nav.getBoundingClientRect().width
          const currentHeroWidth = hero.getBoundingClientRect().width
          const diff = Math.abs(navWidth - currentHeroWidth)
          
          // Only apply if there's a meaningful difference
          if (diff > 1) {
            hero.style.width = `${navWidth}px`
            if (process.env.NODE_ENV === 'development') {
              console.log(`Runtime sync: Set hero width to ${navWidth}px (was ${currentHeroWidth}px, diff: ${diff.toFixed(1)}px)`)
            }
          }
        }
      }, 50) // Debounced to 50ms
    }

    // Initial sync
    syncWidth()

    // Watch for nav element size changes
    const nav = document.querySelector('[data-shell="nav-pill"]')
    if (nav) {
      resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(syncWidth)
      })
      resizeObserver.observe(nav)
    }

    // Listen for window resize
    window.addEventListener('resize', syncWidth)

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      window.removeEventListener('resize', syncWidth)
    }
  }, [])
}
