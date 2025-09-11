import ProjectNavigation from '@/components/ProjectNavigation'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Carousel from '@/components/ui/Carousel'
import { Calendar, Clock, ExternalLink, Figma, Github, User } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

async function getProject(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/projects`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }
    
    const projects = await response.json()
    return projects.find((p: any) => p.slug === slug)
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

async function getAllProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/projects`, {
      cache: 'no-store'
    })
    return await response.json()
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Kaylee Xiao`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [project, allProjects] = await Promise.all([
    getProject(slug),
    getAllProjects()
  ])

  if (!project) {
    notFound()
  }

  const currentIndex = allProjects.findIndex((p: any) => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
            <div className="relative w-24 h-24 mx-auto md:mx-0 mb-6 md:mb-0 flex-shrink-0">
              <Image
                src={project.image}
                alt={`${project.title} logo`}
                fill
                className="object-cover rounded-xl"
                sizes="96px"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {project.duration}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {project.role}
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {project.technologies.map((tech: string) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Features */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FEATURES</h2>
          <ul className="space-y-3">
            {project.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-brand-pink rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Action Buttons */}
        <Card className="p-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {project.links.github && (
              <Button
                as="a"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="solid"
                className="flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            )}
            {project.links.demo && (
              <Button
                as="a"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
            {project.links.devpost && (
              <Button
                as="a"
                href={project.links.devpost}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="flex items-center"
              >
                DevPost
              </Button>
            )}
            {project.links.figma && (
              <Button
                as="a"
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="flex items-center"
              >
                <Figma className="w-4 h-4 mr-2" />
                Figma
              </Button>
            )}
          </div>
        </Card>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              PROJECT GALLERY
            </h2>
            <Carousel images={project.gallery} />
          </Card>
        )}

        {/* Project Goal */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">PROJECT GOAL</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.goal}
          </p>
        </Card>

        {/* Navigation */}
        <ProjectNavigation 
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </div>
    </div>
  )
}
