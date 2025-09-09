'use client'

import Wide from '@/components/layout/Wide'
import Reveal from '@/components/motion/Reveal'
import Card from '@/components/ui/Card'
import IntroDivider from '@/components/ui/IntroDivider'

export default function Hero() {
  return (
    <section id="intro" className="min-h-[calc(100svh-96px)] flex items-center">
      <Wide>
        <div className="flex flex-col items-center">
          <Reveal>
            <Card className="relative rounded-3xl p-10 md:p-16 bg-white/85 hero-radial sheen shadow-pink w-full">
              <div className="text-center space-y-4">
                {/* Small line */}
                <div className="text-5xl md:text-6xl font-extrabold text-ink/90">
                  hi, i'm
                </div>
                
                {/* Big display name */}
                <div className="text-7xl md:text-[112px] font-extrabold text-[var(--rose-500)] leading-[0.9]">
                  kaylee xiao
                </div>
                
                {/* Divider with star */}
                <IntroDivider />
                
                {/* Subtitle */}
                <div className="mt-4 text-3xl md:text-4xl text-ink/90">
                  computer science student
                </div>
              </div>
            </Card>
          </Reveal>
          
          {/* Footnote with scroll arrow */}
          <Reveal className="mt-10 flex flex-col items-center gap-2 text-ink/70">
            <span className="text-sm md:text-base">welcome to my portfolio</span>
            <button 
              aria-label="Scroll to about" 
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} 
              className="mt-3 opacity-70 hover:opacity-100 transition"
            >
              <svg width="36" height="18" viewBox="0 0 36 18">
                <path d="M3 3l15 12L33 3" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </Reveal>
        </div>
      </Wide>
    </section>
  )
}