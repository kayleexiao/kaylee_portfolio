'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800">
              hi, i'm
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-pink">
              kaylee xiao
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="w-12 h-px bg-gray-300"></div>
            <Heart className="w-5 h-5 text-brand-pink" />
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          
          <h3 className="text-xl md:text-2xl text-gray-700 font-medium">
            computer science student
          </h3>
          
          <p className="text-gray-600 text-lg">
            welcome to my portfolio
          </p>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
