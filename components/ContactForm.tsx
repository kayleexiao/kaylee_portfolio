'use client'

import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters long'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'opening'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = (data: ContactForm) => {
    // Build mailto link
    const subject = encodeURIComponent('Portfolio contact')
    const body = encodeURIComponent(data.message)
    const mailtoLink = `mailto:kayleexiao4@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show helper message
    setSubmitStatus('opening')
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <Card className="p-8 md:p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/80 border border-rose-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 placeholder-ink/50"
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
                Your Message
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/80 border border-rose-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 placeholder-ink/50 resize-none"
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
                size="lg"
                className="min-w-[140px] relative"
              >
                <div className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </div>
              </Button>

              <AnimatePresence>
                {submitStatus === 'opening' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-ink/70 text-sm"
                  >
                    Opening your email app…
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/kayleexiao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-brand-pink-light text-brand-pink rounded-full hover:bg-brand-pink hover:text-white transition-all duration-200 hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kayleexiao/"
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
  )
}
