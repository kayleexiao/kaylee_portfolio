'use client'

import ProjectCard from '@/components/ProjectCard'
import Icon from '@/components/ui/Icon'
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
          <div className="flex justify-center mb-4">
            <div className="rounded-full border-2 border-[#F56B80] bg-white/0 px-12 sm:px-16 md:px-20 py-3 sm:py-4 flex items-center justify-center gap-6 sm:gap-8 w-full mx-auto" style={{ maxWidth: 'min(92vw, 600px)' }}>
              <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#F56B80]">
                PROJECTS
              </h2>
              <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
            </div>
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
        <div className="flex justify-center mb-4">
          <div className="rounded-full border-2 border-[#F56B80] bg-white/0 px-12 sm:px-16 md:px-20 py-3 sm:py-4 flex items-center justify-center gap-6 sm:gap-8 w-full mx-auto" style={{ maxWidth: 'min(92vw, 600px)' }}>
            <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#F56B80]">
              PROJECTS
            </h2>
            <Icon name="projects-star" className="w-10 h-10 text-[#F56B80]" alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any, index: number) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
