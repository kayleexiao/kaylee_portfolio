'use client'

import { SHELL } from '@/components/layout/Wide'
import Reveal from '@/components/motion/Reveal'
import Card from '@/components/ui/Card'
import IntroDivider from '@/components/ui/IntroDivider'
import TypewriterText from '@/components/ui/TypewriterText'
import { useMatchNavWidth } from '@/hooks/useMatchNavWidth'

export default function Hero() {
  // Runtime width sync hook (ensures pixel-perfect match)
  useMatchNavWidth()

  return (
    <section id="intro" className="hero min-h-[100svh] grid place-items-center pt-[120px] pb-[120px]">
      <div className="flex flex-col items-center gap-8 md:gap-10">
        <Reveal>
          <Card className={`relative rounded-3xl bg-white/85 hero-radial sheen shadow-pink ${SHELL}`} data-shell="hero-card">
              <div className="p-10 md:p-16 text-center space-y-4">
                {/* Small line */}
                <div 
                  className="font-extrabold text-ink/90"
                  style={{ fontSize: 'calc(var(--intro-small) * var(--intro-scale) * var(--intro-fine))' }}
                >
                  hi, i'm
                </div>
                
                {/* Big display name */}
                <div 
                  className="font-extrabold text-[var(--rose-500)] leading-[0.9] whitespace-nowrap max-[900px]:whitespace-normal"
                  style={{ fontSize: 'calc(var(--intro-big) * var(--intro-scale) * var(--intro-fine))' }}
                >
                  kaylee xiao
                </div>
                
                {/* Divider with star */}
                <IntroDivider size="xl" />
                
                {/* Subtitle with typewriter */}
                <div 
                  className="mt-4 text-ink/90"
                  style={{ fontSize: 'calc(var(--intro-role) * var(--intro-scale) * var(--intro-fine))' }}
                >
                  <TypewriterText text="computer science student" />
                </div>
              </div>
            </Card>
          </Reveal>
        
        {/* Welcome + arrow */}
        <div className="flex flex-col items-center">
          <span 
            className="text-ink/70"
            style={{ fontSize: 'calc(var(--welcome) * var(--intro-scale) * var(--intro-fine))' }}
          >
            welcome to my portfolio
          </span>
          <button
            aria-label="Scroll to about"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-2 opacity-80 hover:opacity-100 transition animate-nudge"
          >
            <svg width="32" height="16" viewBox="0 0 36 18">
              <path d="M3 3l15 12L33 3" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}