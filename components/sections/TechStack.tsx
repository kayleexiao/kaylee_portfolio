'use client'

import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'Git', iconName: 'tech-git' as const },
  { name: 'Python', iconName: 'tech-python' as const },
  { name: 'React', iconName: 'tech-react' as const },
  { name: 'JavaScript', iconName: 'tech-js' as const },
  { name: 'HTML', iconName: 'tech-html' as const },
  { name: 'CSS', iconName: 'tech-css' as const },
  { name: 'MySQL', iconName: 'tech-mysql' as const },
  { name: 'Node.js', iconName: 'tech-node' as const }
]

export default function TechStack() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="tech-stack-star" className="w-6 h-6 text-rose-500" alt="" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            EXPERIENCE
          </h2>
        </div>
      </div>
      
      <Card className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-4 rounded-xl bg-rose-200/30 hover:bg-rose-200/50 transition-colors cursor-default"
            >
              <Icon name={tech.iconName} className="w-8 h-8 text-rose-500 mb-2" alt="" />
              <span className="text-sm font-medium text-ink">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  )
}
