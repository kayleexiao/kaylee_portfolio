'use client'

import Wide from '@/components/layout/Wide'
import Reveal from '@/components/motion/Reveal'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'

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
    <Wide id="about" className="scroll-mt-24 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ABOUT Card */}
        <Reveal>
          <Card className="rounded-2xl p-8 md:p-10 bg-[var(--rose-500)] text-[var(--surface)] shadow-pink">
            <div className="mb-6 flex items-center gap-3">
              <Icon name="about-star" className="h-6 w-6 md:h-7 md:w-7 text-white" alt="" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                ABOUT
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              I'm a passionate computer science student who loves turning ideas into reality through code. 
              With experience in full-stack development, machine learning, and database design, 
              I'm always excited to take on new challenges and learn cutting-edge technologies.
            </p>
          </Card>
        </Reveal>
        
        {/* TECH STACK Card */}
        <Reveal>
          <Card className="rounded-2xl p-8 md:p-10 bg-[rgba(255,255,255,0.9)] text-rose-600 shadow-pink">
            <div className="mb-6 flex items-center gap-3">
              <Icon name="projects-star" className="h-6 w-6 md:h-7 md:w-7 text-rose-600" alt="" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-rose-600">
                TECH STACK
              </h2>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 place-items-center">
              {technologies.map((tech) => (
                <Icon key={tech.name} name={tech.iconName} className="h-18 w-18 md:h-20 md:w-20 text-rose-500" alt="" />
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Wide>
  )
}