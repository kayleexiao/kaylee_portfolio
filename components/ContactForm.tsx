'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Github, Linkedin, Check, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto max-w-3xl px-4">
        <Card className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-pink mb-4">
              CONTACT ME
            </h2>
            <p className="text-gray-600">
              Let's connect — I'd love to hear from you!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-brand-pink-light border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200 placeholder-gray-500"
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 text-sm text-red-600 flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                placeholder="Message"
                className="w-full px-4 py-3 bg-brand-pink-light border border-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200 placeholder-gray-500 resize-none"
                disabled={isSubmitting}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 text-sm text-red-600 flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="min-w-[140px] relative"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </motion.div>
                  ) : submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Message Sent!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              <AnimatePresence>
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-red-600 text-sm flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Failed to send message. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/kaylee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-pink-light text-brand-pink rounded-full hover:bg-brand-pink hover:text-white transition-all duration-200 hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/kaylee-xiao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-pink-light text-brand-pink rounded-full hover:bg-brand-pink hover:text-white transition-all duration-200 hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}
