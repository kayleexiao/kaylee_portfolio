'use client'

import { SHELL } from '@/components/layout/Wide'
import Icon from '@/components/ui/Icon'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy({ 
    ids: ['intro', 'about', 'experience', 'projects', 'contact'],
    rootMargin: '-35% 0px -55% 0px',
    threshold: [0, 0.1]
  })

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setMobileOpen(false)
  }

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    if (mobileOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileOpen])

  return (
    <>
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center rounded-xl px-3 py-2 ring-1 ring-rose-200/70 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
          aria-controls="mobile-nav"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-ink" />
          ) : (
            <Menu className="w-5 h-5 text-ink" />
          )}
        </button>
      </div>
    </nav>

    {/* Mobile Navigation Panel */}
    {mobileOpen && (
      <div
        id="mobile-nav"
        role="menu"
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 ${SHELL}
          md:hidden rounded-2xl ring-1 ring-rose-200/60 shadow-2xl bg-white/90 backdrop-blur
          transition-all duration-200 ease-out origin-top
        `}
      >
        <div className="py-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`
                block px-4 py-3 text-lg font-medium transition-colors hover:bg-rose-50
                ${activeId === item.id ? 'text-rose-500' : 'text-ink'}
              `}
              role="menuitem"
            >
              {item.label}
            </a>
          ))}
          
          {/* Resume Link */}
          <a
            href="/Kaylee_Xiao_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="block px-4 py-3 text-lg font-medium text-ink hover:bg-rose-50 transition-colors"
            role="menuitem"
          >
            resume
          </a>
        </div>
      </div>
    )}
  </>
  )
}
