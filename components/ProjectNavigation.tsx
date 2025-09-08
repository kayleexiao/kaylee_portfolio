'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

interface ProjectNavigationProps {
  prevProject?: { slug: string; title: string } | null
  nextProject?: { slug: string; title: string } | null
}

export default function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`}>
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center text-brand-pink hover:text-brand-pink-dark transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Prev Project</p>
                  <p className="font-medium">{prevProject.title}</p>
                </div>
              </motion.div>
            </Link>
          )}
        </div>

        <Link href="/">
          <motion.div
            whileHover={{ y: -2 }}
            className="mx-8 flex flex-col items-center text-brand-pink hover:text-brand-pink-dark transition-colors"
          >
            <Home className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">HOME</span>
          </motion.div>
        </Link>

        <div className="flex-1 text-right">
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`}>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center justify-end text-brand-pink hover:text-brand-pink-dark transition-colors group"
              >
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Next Project</p>
                  <p className="font-medium">{nextProject.title}</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          )}
        </div>
      </div>
    </Card>
  )
}
