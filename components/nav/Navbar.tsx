'use client'

import Icon from '@/components/ui/Icon'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
] as const

export default function Navbar() {
  const activeId = useScrollSpy({ 
    ids: ['about', 'experience', 'projects', 'contact'],
    threshold: 0.55 
  })

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[70%] max-w-6xl">
      <div className="relative sheen overflow-hidden rounded-full border border-white/60 bg-white/75 backdrop-blur-md shadow-pink px-8 md:px-10 py-3.5">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#intro"
            className="flex items-center gap-2 font-semibold tracking-[0.3em] text-xl md:text-2xl text-ink no-underline transition-opacity hover:opacity-80"
          >
            <Icon name="nav-star" className="h-10 w-10 md:h-11 md:w-11 text-rose-500" alt="" />
            kaylee
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  relative text-[19px] md:text-[20px] text-ink transition-opacity hover:opacity-80 no-underline
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full 
                  after:bg-[var(--rose-500)] after:transition-transform after:origin-left
                  ${activeId === item.id 
                    ? 'after:w-full after:scale-x-100' 
                    : 'after:w-full after:scale-x-0'
                  }
                `}
                aria-current={activeId === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
            
            {/* Resume Link */}
            <a
              href="/Kaylee_Xiao_Resume.pdf"
              target="_blank"
              rel="noopener"
              className="text-[19px] md:text-[20px] text-ink transition-opacity hover:opacity-80 flex items-center gap-1 no-underline"
            >
              resume
              <Icon name="nav-arrow" className="w-3 h-3" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
