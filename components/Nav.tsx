'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const navigation = [
  { name: 'about', href: '/' },
  { name: 'experience', href: '/experience' },
  { name: 'projects', href: '/projects' },
  { name: 'contact', href: '/contact' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-brand-pink hover:text-brand-pink-dark transition-colors"
          >
            kaylee
          </Link>
          
          <div className="flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 px-1 text-sm font-medium transition-colors hover:text-brand-pink ${
                    isActive ? 'text-brand-pink' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-pink rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-brand-pink transition-colors"
            >
              <span>resume</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
