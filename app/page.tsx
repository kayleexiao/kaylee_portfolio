import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Kaylee Xiao\'s portfolio - Computer science student passionate about building innovative solutions.',
}

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
    </>
  )
}
