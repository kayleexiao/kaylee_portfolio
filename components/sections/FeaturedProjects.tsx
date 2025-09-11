'use client'

import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data.slice(0, 3)) // Show first 3 projects
      } catch (error) {
        console.error('Failed to fetch projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="projects-star" className="w-6 h-6 text-rose-500" alt="" />
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              PROJECTS
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-rose-200/30 animate-pulse rounded-2xl h-80"></div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="projects-star" className="w-6 h-6 text-rose-500" alt="" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            PROJECTS
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project: any, index: number) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href="/projects">
          <Button size="lg" variant="solid">
            View All Projects
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
