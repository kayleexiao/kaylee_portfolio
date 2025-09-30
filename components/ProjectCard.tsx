'use client'

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
      <Link href={`/projects/${project.slug}`} prefetch={false}>
        <Card hover className="p-6 h-full flex flex-col group">
          <div className="h-64 w-64 rounded-xl overflow-hidden bg-white/80 mx-auto mb-4 flex items-center justify-center">
            <Image
              src={project.image}
              alt={`${project.title} logo`}
              width={256}
              height={256}
              className="object-contain"
              unoptimized
            />
          </div>
          
          <h3 className="text-2xl font-bold text-ink mb-2 group-hover:text-rose-500 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-ink/70 text-base leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-transparent border border-[#F56B80] text-[#F56B80] rounded-full px-3 py-1 text-base leading-none"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex justify-end">
            <div className="flex items-center text-brand-pink font-medium text-base group-hover:text-brand-pink-dark transition-colors">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
