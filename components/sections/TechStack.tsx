'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/SectionTitle'
import { 
  GitBranch, 
  Code2, 
  Database,
  Globe,
  Palette,
  Cpu
} from 'lucide-react'

const technologies = [
  { name: 'Git', icon: GitBranch, category: 'Version Control' },
  { name: 'Python', icon: Code2, category: 'Programming' },
  { name: 'React', icon: Code2, category: 'Frontend' },
  { name: 'JavaScript', icon: Code2, category: 'Programming' },
  { name: 'HTML', icon: Globe, category: 'Web' },
  { name: 'CSS', icon: Palette, category: 'Styling' },
  { name: 'MySQL', icon: Database, category: 'Database' },
  { name: 'Node.js', icon: Cpu, category: 'Backend' }
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-brand-pink text-white">
              <SectionTitle 
                title="ABOUT" 
                className="text-white mb-6"
              />
              <p className="text-lg leading-relaxed">
                I'm a computer science student passionate about creating innovative solutions 
                that make a positive impact. With experience in full-stack development, 
                machine learning, and database design, I love bringing ideas to life through code.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <SectionTitle 
                title="TECH STACK" 
                className="mb-6"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-brand-pink-light transition-colors cursor-default"
                  >
                    <tech.icon className="w-8 h-8 text-brand-pink mb-2" />
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
