'use client'

import Wide from '@/components/layout/Wide'
import Reveal from '@/components/motion/Reveal'
import Icon from '@/components/ui/Icon'
import experienceData from '@/data/experience.json'
import { useEffect, useRef, useState } from 'react'

// experience data is loaded from `data/experience.json`

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return
      
      const isExpanded = expandedIndex === index
      
      if (prefersReducedMotion) {
        // Snap open/closed with no animation
        ref.style.height = isExpanded ? 'auto' : '0'
        ref.style.opacity = isExpanded ? '1' : '0'
        ref.style.overflow = isExpanded ? 'visible' : 'hidden'
        return
      }
      
      if (isExpanded) {
        // Opening animation
        ref.style.height = '0'
        ref.style.opacity = '0'
        ref.style.overflow = 'hidden'
        ref.style.willChange = 'height, opacity'
        ref.style.transition = 'height 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms cubic-bezier(0.22, 1, 0.36, 1)'
        
        // Measure target height
        const targetHeight = ref.scrollHeight
        
        // Use requestAnimationFrame to ensure smooth start
        requestAnimationFrame(() => {
          ref.style.height = `${targetHeight}px`
          ref.style.opacity = '1'
        })
        
        // Set to auto after animation completes
        const handleTransitionEnd = () => {
          ref.style.height = 'auto'
          ref.style.overflow = 'visible'
          ref.style.willChange = 'auto'
          ref.removeEventListener('transitionend', handleTransitionEnd)
        }
        ref.addEventListener('transitionend', handleTransitionEnd)
      } else {
        // Closing animation
        const currentHeight = ref.offsetHeight
        ref.style.height = `${currentHeight}px`
        ref.style.overflow = 'hidden'
        ref.style.willChange = 'height, opacity'
        ref.style.transition = 'height 300ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms cubic-bezier(0.22, 1, 0.36, 1)'
        
        // Force reflow
        ref.getBoundingClientRect()
        
        // Use requestAnimationFrame to ensure smooth start
        requestAnimationFrame(() => {
          ref.style.height = '0'
          ref.style.opacity = '0'
        })
        
        // Clean up after animation - DO NOT set height to auto
        const handleTransitionEnd = () => {
          ref.style.willChange = 'auto'
          // Keep height at 0 to prevent jump
          ref.removeEventListener('transitionend', handleTransitionEnd)
        }
        ref.addEventListener('transitionend', handleTransitionEnd)
      }
    })
  }, [expandedIndex])

  return (
    <Wide id="experience" className="scroll-mt-24 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F56B80]">
            EXPERIENCE
          </h2>
        </div>
        <p className="text-ink/60 text-sm md:text-base mt-2">
          Click a card to read more.
        </p>
      </div>
      
      <div className="space-y-4">
        {experienceData.map((exp, index) => (
          <div key={index}>
            <Reveal>
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full rounded-2xl border border-rose-200/60 bg-white/85 shadow-pink p-5 md:p-6 cursor-pointer text-left transition-all duration-200 hover:shadow-pink-hover"
                aria-expanded={expandedIndex === index}
                aria-controls={`experience-content-${index}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-ink mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-ink/70 font-medium">
                      {exp.organization}
                    </p>
                    {exp.link && (
                      <div className="mt-1">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-rose-600 hover:underline break-all"
                        >
                          {exp.link}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base md:text-lg text-ink/60 font-medium">
                      {exp.period}
                    </span>
                    <Icon 
                      name="nav-arrow" 
                      className={`w-5 h-5 text-ink/60 transition-transform duration-200 ${
                        expandedIndex === index ? 'rotate-90' : ''
                      }`} 
                      alt="" 
                    />
                  </div>
                </div>
              </button>
            </Reveal>
            
            <div
              ref={(el) => { contentRefs.current[index] = el }}
              id={`experience-content-${index}`}
              className="mt-4 rounded-3xl border-2 border-[#F56B80] bg-white p-6 sm:p-8"
              style={{ 
                height: expandedIndex === index ? 'auto' : '0',
                opacity: expandedIndex === index ? '1' : '0',
                overflow: expandedIndex === index ? 'visible' : 'hidden'
              }}
            >
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-ink/80 leading-relaxed">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Wide>
  )
}
