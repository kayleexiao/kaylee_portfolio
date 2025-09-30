'use client'

import { SHELL } from '@/components/layout/Wide'
import Card from '@/components/ui/Card'
import IntroDivider from '@/components/ui/IntroDivider'
import TypewriterText from '@/components/ui/TypewriterText'

export default function Hero() {

  return (
    <section id="intro" className="scroll-mt-28">
      <div className={SHELL}>
        <div className="hero min-h-[100svh] grid place-items-center pt-[120px] pb-[120px]">
          <div className="flex flex-col items-center gap-8 md:gap-10 w-full">
            <Card className="w-full rounded-3xl bg-white/85 hero-radial sheen shadow-pink overflow-hidden">
               <div className="px-6 sm:px-10 md:px-12 py-14 sm:py-20 md:py-24 overflow-hidden">
                {/* Scaled content wrapper */}
                <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 sm:gap-6 origin-center will-change-transform scale-[1.15] sm:scale-[1.18] md:scale-[1.2]">
                  {/* Grouped greeting and name */}
                  <div className="flex flex-col items-center gap-2 md:gap-3">
                    {/* Small line */}
                    <div 
                      className="m-0 font-extrabold text-ink/90 leading-tight tracking-normal text-[clamp(28px,4.0vw,45px)]"
                    >
                      hi, i'm
                    </div>
                    
                     {/* Big display name - with slow fade-in */}
                     <div 
                       className="m-0 font-extrabold text-[var(--rose-500)] leading-tight tracking-normal whitespace-nowrap max-[900px]:whitespace-normal hero-name-fade-slow text-[clamp(48px,8.4vw,78px)]"
                     >
                       kaylee xiao
                     </div>
                  </div>
                  
                  {/* Divider with star */}
                  <div className="m-0 flex items-center justify-center gap-4 w-full">
                    <IntroDivider size="xl" />
                  </div>
                  
                  {/* Subtitle with typewriter */}
                  <div 
                    className="m-0 text-ink/90 leading-tight tracking-normal text-[clamp(20px,3.6vw,30px)]"
                  >
                    <TypewriterText text="computer science student" />
                  </div>
                </div>
              </div>
            </Card>
            
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
        </div>
      </div>
    </section>
  )
}