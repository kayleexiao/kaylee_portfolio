'use client'

import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import { motion } from 'framer-motion'

const technologies = [
  { name: 'tech-git', iconName: 'tech-git' as const },
  { name: 'tech-python', iconName: 'tech-python' as const },
  { name: 'tech-react', iconName: 'tech-react' as const },
  { name: 'tech-js', iconName: 'tech-js' as const },
  { name: 'tech-html', iconName: 'tech-html' as const },
  { name: 'tech-css', iconName: 'tech-css' as const },
  { name: 'tech-mysql', iconName: 'tech-mysql' as const },
  { name: 'tech-node', iconName: 'tech-node' as const }
]

export default function AboutTech() {
  return (
    <section id="about" className="scroll-mt-28 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* ABOUT Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="rounded-2xl p-8 md:p-10 shadow-pink bg-[var(--rose-500)] text-[var(--surface)]">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Icon name="about-star" className="w-6 h-6 text-white" alt="" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    ABOUT
                  </h2>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                I'm a passionate computer science student who loves turning ideas into reality through code. 
                With experience in full-stack development, machine learning, and database design, 
                I'm always excited to take on new challenges and learn cutting-edge technologies.
              </p>
            </Card>
          </motion.div>
          
          {/* TECH STACK Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="rounded-2xl p-8 md:p-10 shadow-pink bg-white/85">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Icon name="tech-stack-star" className="w-6 h-6 text-[var(--rose-600)]" alt="" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--rose-600)]">
                    TECH STACK
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex items-center justify-center"
                  >
                    <Icon name={tech.iconName} className="h-10 w-10 md:h-12 md:w-12 text-rose-500" alt="" />
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
