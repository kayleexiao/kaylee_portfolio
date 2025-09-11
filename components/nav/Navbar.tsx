'use client'

import { SHELL } from '@/components/layout/Wide'
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
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${SHELL}
        rounded-full border border-white/60 bg-white/80 backdrop-blur-md sheen
        shadow-[0_14px_36px_#F56B80A6,0_4px_12px_rgba(24,26,39,.10)]
      `}
      data-shell="nav-pill"
    >
      <div className="flex items-center justify-between px-7 md:px-9 py-3">
        {/* Brand */}
        <a
          href="#intro"
          className="flex items-center gap-2 font-semibold tracking-[0.3em] text-xl md:text-2xl text-ink no-underline transition-opacity hover:opacity-80 leading-none"
          style={{ fontSize: 'calc(var(--nav-brand-base) * var(--nav-scale))' }}
        >
          <Icon name="nav-star" className="h-10 w-10 md:h-11 md:w-11 text-rose-500 relative top-[0.5px]" alt="" />
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
              style={{ fontSize: 'calc(var(--nav-link-base) * var(--nav-scale))' }}
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
            style={{ fontSize: 'calc(var(--nav-link-base) * var(--nav-scale))' }}
          >
            resume
            <Icon name="nav-arrow" className="w-3 h-3" alt="" />
          </a>
        </div>
      </div>
    </nav>
  )
}
