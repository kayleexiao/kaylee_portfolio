'use client'

import Wide from '@/components/layout/Wide'
import Reveal from '@/components/motion/Reveal'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import TechCarousel from '@/components/ui/TechCarousel'
import { useEqualHeights } from '@/hooks/useEqualHeights'
import { useRef, useEffect, useState } from 'react'

export default function AboutTech() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  
  const [equalize, setEqualize] = useState(false)

  useEffect(() => {
    const update = () => setEqualize(window.innerWidth >= 1024) // tailwind lg breakpoint
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEqualHeights([aboutRef, techRef], { property: 'minHeight', active: equalize })

  return (
    <Wide id="about" className="scroll-mt-24 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8">
        {/* ABOUT Card */}
  <div className="lg:col-span-5">
          <Reveal>
            <Card ref={aboutRef} className="h-full flex flex-col rounded-3xl px-6 md:px-8 py-6 md:py-8 bg-[var(--rose-500)] text-[var(--surface)] shadow-pink">
              {/* Title row stays top-left */}
              <div className="flex items-center gap-3 shrink-0 md:mb-5">
                <Icon name="about-star" className="h-6 w-6 md:h-7 md:w-7 text-white" alt="" />
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  ABOUT
                </h2>
              </div>

              {/* Paragraph centered in the remaining space */}
              <div className="flex-1 flex items-center">
                <p className="mx-auto text-center leading-relaxed max-w-[42ch] mt-0 mb-0 text-lg md:text-xl text-white/90">
                  Hi! My name is Kaylee, I'm a computer science student at the University of Calgary.
                  I enjoy bringing ideas to life through coding, design, and projects that challenge me to think in new ways. 
                  I've worked on everything from websites to machine learning, and I like finding that balance between creativity and problem solving. 
                  Outside of school, I'm always looking for new ways to learn, grow, and try something different. 
                  The rest of my site has a few more pieces of my story, so feel free to take a look!
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
        
        {/* TECH STACK Card */}
  <div className="lg:col-span-7">
          <Reveal>
            <Card ref={techRef} className="h-full flex flex-col rounded-3xl px-6 md:px-8 py-6 md:py-8 bg-[rgba(255,255,255,0.9)] shadow-pink max-h-[520px] lg:max-h-[460px]">
              <div className="mb-4 md:mb-5 flex items-center gap-3 shrink-0">
                <img 
                  src="/assets/icons/tech-stack-star.svg" 
                  alt="" 
                  className="inline-block align-middle h-8 w-8 md:h-9 md:w-9" 
                />
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#F56B80]">
                  TECH STACK
                </h2>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <TechCarousel />
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Wide>
  )
}