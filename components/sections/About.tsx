'use client'

import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="about-star" className="w-6 h-6 text-rose-500" alt="" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            ABOUT
          </h2>
        </div>
      </div>
      
      <Card className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-ink/80 leading-relaxed">
            I'm a passionate computer science student who loves turning ideas into reality through code. 
            With experience in full-stack development, machine learning, and database design, 
            I'm always excited to take on new challenges and learn cutting-edge technologies.
          </p>
        </motion.div>
      </Card>
    </div>
  )
}
