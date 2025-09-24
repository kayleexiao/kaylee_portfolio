'use client'

import Wide from '@/components/layout/Wide'
import Reveal from '@/components/motion/Reveal'
import Icon from '@/components/ui/Icon'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const experienceData = [
  {
    role: 'Undergraduate Research Assistant',
    organization: 'GSI Lab - University of Calgary',
    period: 'May 2025 - Present',
    responsibilities: [
      'Designing and training machine learning models on multispectral and high-resolution satellite imagery',
      'Working on an Alberta-focused Sentinel-2 classification project using deep learning architectures (UNet, HRNet)',
      'Developing data pipelines for preprocessing, model training, and validation using Python, PyTorch, and geospatial frameworks (GOAL)',
      'Advancing research in environmental monitoring, sustainable land management, climate resilience, and urban development planning'
    ]
  }
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Wide id="experience" className="scroll-mt-24 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="projects-star" className="w-6 h-6 text-rose-500" alt="" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            EXPERIENCE
          </h2>
        </div>
      </div>
      
      <div className="space-y-4">
        {experienceData.map((exp, index) => (
          <div key={index}>
            <Reveal>
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full rounded-2xl border border-rose-200/60 bg-white/85 shadow-pink p-5 md:p-6 cursor-pointer text-left transition-all duration-200 hover:shadow-pink-hover"
                aria-expanded={expandedIndex === index}
                aria-controls={`experience-content-${index}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-ink mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-ink/70 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base md:text-lg text-ink/60 font-medium">
                      {exp.period}
                    </span>
                    <Icon 
                      name="nav-arrow" 
                      className={`w-5 h-5 text-ink/60 transition-transform duration-200 ${
                        expandedIndex === index ? 'rotate-90' : ''
                      }`} 
                      alt="" 
                    />
                  </div>
                </div>
              </button>
            </Reveal>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <Reveal>
                  <motion.div
                    id={`experience-content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 rounded-xl border border-white/60 bg-white/90 p-5"
                  >
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-ink/80 leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Wide>
  )
}
