'use client'

import ProjectCard from '@/components/ProjectCard'
import Icon from '@/components/ui/Icon'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data) // Show all projects
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 1350) {
        setCardsPerView(1) // Mobile: 1 card
      } else if (window.innerWidth < 1700) {
        setCardsPerView(2) // Tablet/Small Desktop: 2 cards
      } else {
        setCardsPerView(3) // Large Desktop: 3 cards
      }
      setCurrentIndex(0) // Reset to first card when screen size changes
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(projects.length - cardsPerView, prev + 1))
  }

  const canGoPrevious = currentIndex > 0
  const canGoNext = currentIndex < projects.length - cardsPerView

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="rounded-full border-2 border-[#F56B80] bg-white/0 px-12 sm:px-16 md:px-20 py-3 sm:py-4 flex items-center justify-center gap-6 sm:gap-8 w-full mx-auto" style={{ maxWidth: 'min(92vw, 600px)' }}>
              <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#F56B80]">
                PROJECTS
              </h2>
              <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
            </div>
          </div>
          <p className="mt-3 text-ink/70 text-base md:text-lg text-center">
            A collection of my projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-rose-200/30 animate-pulse rounded-2xl h-80"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="rounded-full border-2 border-[#F56B80] bg-white/0 px-12 sm:px-16 md:px-20 py-3 sm:py-4 flex items-center justify-center gap-6 sm:gap-8 w-full mx-auto" style={{ maxWidth: 'min(92vw, 600px)' }}>
            <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#F56B80]">
              PROJECTS
            </h2>
            <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
          </div>
        </div>
        <p className="mt-3 text-ink/70 text-base md:text-lg text-center">
          A collection of my projects.
        </p>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          disabled={!canGoPrevious}
          className="absolute left-2 sm:left-4 2xl:left-0 top-1/2 -translate-y-1/2 2xl:-translate-x-24 z-10 p-2 sm:p-2.5 2xl:p-3 rounded-full border-2 border-rose-300 bg-white hover:bg-rose-50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors shadow-sm"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-rose-400" />
        </button>

        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className="absolute right-2 sm:right-4 2xl:right-0 top-1/2 -translate-y-1/2 2xl:translate-x-24 z-10 p-2 sm:p-2.5 2xl:p-3 rounded-full border-2 border-rose-300 bg-white hover:bg-rose-50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors shadow-sm"
          aria-label="Next project"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-rose-400" />
        </button>

         {/* Carousel Container */}
         <div className="relative px-12 sm:px-16 2xl:-mx-16 2xl:px-16 py-16">
           <div className="overflow-hidden -mx-12 sm:-mx-16 2xl:-mx-16 -my-16">
             <div className="px-12 sm:px-16 2xl:px-16 py-16">
               <div
                 className="flex transition-transform duration-500 ease-in-out items-stretch"
                 style={{
                   transform: cardsPerView === 1
                     ? `translateX(calc(-${currentIndex} * (100% + 128px)))`
                     : cardsPerView === 2
                     ? `translateX(calc(-${currentIndex} * (calc((100% - 32px) / 2) + 32px + 96px)))`
                     : `translateX(calc(-${currentIndex} * (calc((100% - 64px) / 3) + 32px + 96px)))`
                 }}
               >
                 {projects.map((project: any, index: number) => {
                   const isInFocus = index >= currentIndex && index < currentIndex + cardsPerView
                   const isJustAfterFocus = index === currentIndex + cardsPerView
                   
                   // Calculate card width based on cardsPerView
                   const getCardWidth = () => {
                     if (cardsPerView === 1) return '100%'
                     if (cardsPerView === 2) return 'calc((100% - 32px) / 2)'
                     return 'calc((100% - 64px) / 3)'
                   }
                   
                   // Calculate gap based on cardsPerView
                   const getGap = () => {
                     if (cardsPerView === 1) return '0px'
                     return '32px'
                   }
                   
                   return (
                     <div 
                       key={project.slug} 
                       className="flex-shrink-0 transition-all duration-500" 
                       style={{ 
                         width: getCardWidth(),
                         marginRight: isJustAfterFocus ? '0px' : (isInFocus ? getGap() : '128px'),
                         opacity: isInFocus ? 1 : 0,
                         visibility: isInFocus ? 'visible' : 'hidden',
                         transform: cardsPerView === 1 ? 'scale(0.80)' : 'scale(1)'
                       }}
                     >
                       <ProjectCard project={project} index={index} />
                     </div>
                   )
                 })}
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}
