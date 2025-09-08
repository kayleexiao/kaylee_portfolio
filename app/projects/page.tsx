import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectCard from '@/components/ProjectCard'
import SectionTitle from '@/components/SectionTitle'
import { motion } from 'framer-motion'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my latest projects in web development, machine learning, and more.',
}

async function getProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/projects`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  if (!projects || projects.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <SectionTitle title="PROJECTS" className="text-4xl mb-4" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            machine learning, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
