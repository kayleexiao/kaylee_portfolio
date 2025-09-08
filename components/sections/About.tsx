'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate computer science student who loves turning ideas into reality through code. 
            With experience in full-stack development, machine learning, and database design, 
            I'm always excited to take on new challenges and learn cutting-edge technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
