'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card hover className="p-6 h-full flex flex-col group">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image
              src={project.image}
              alt={`${project.title} logo`}
              fill
              className="object-cover rounded-xl"
              sizes="80px"
            />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-pink transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center text-brand-pink font-medium text-sm group-hover:text-brand-pink-dark transition-colors">
            <span>VIEW</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
