import Wide from '@/components/layout/Wide'
import Navbar from '@/components/nav/Navbar'
import AboutTech from '@/components/sections/AboutTech'
import Contact from '@/components/sections/Contact'
import Experience from '@/components/sections/Experience'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Hero from '@/components/sections/Hero'
import FancyDivider from '@/components/ui/FancyDivider'
import Section from '@/components/ui/Section'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Kaylee Xiao\'s portfolio - Computer science student passionate about building innovative solutions.',
}

export default async function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutTech />
      <FancyDivider />
      <Experience />
      <Section id="projects" className="scroll-mt-28">
        <Wide>
          <FeaturedProjects />
        </Wide>
      </Section>
      <Contact />
    </>
  )
}
