import Wide from '@/components/layout/Wide'
import Navbar from '@/components/nav/Navbar'
import AboutTech from '@/components/sections/AboutTech'
import Contact from '@/components/sections/Contact'
import Experience from '@/components/sections/Experience'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Hero from '@/components/sections/Hero'
import ExperienceDivider from '@/components/ui/ExperienceDivider'
import Section from '@/components/ui/Section'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  description: 'Welcome to Kaylee Xiao\'s portfolio - Computer science student passionate about building innovative solutions.',
}

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutTech />
      <ExperienceDivider size="lg" />
      <Experience />
      <Section id="projects" className="scroll-mt-24">
        <Wide>
          <FeaturedProjects />
        </Wide>
      </Section>
      <Contact />
    </>
  )
}
