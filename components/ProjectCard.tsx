'use client'

import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
          <div className="h-16 w-16 rounded-xl overflow-hidden bg-white/80 mx-auto mb-4 flex items-center justify-center">
            <Image
              src={project.image}
              alt={`${project.title} logo`}
              width={64}
              height={64}
              className="object-contain"
              unoptimized
            />
          </div>
          
          <h3 className="text-xl font-bold text-ink mb-2 group-hover:text-rose-500 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-1">
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
