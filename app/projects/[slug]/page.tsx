import ProjectNavbar from '@/components/nav/ProjectNavbar'
import Icon from '@/components/ui/Icon'
import Pill from '@/components/ui/Pill'
import ProjectGallery from '@/components/ui/ProjectGallery'
import StarDivider from '@/components/ui/StarDivider'
import projectsData from '@/data/projects.json'
import { getBaseUrl } from '@/lib/baseUrl'
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

interface Project {
  slug: string
  title: string
  description: string
  image: string
  date: string
  duration: string
  role: string
  technologies: string[]
  features: string[]
  links: {
    github?: string
    demo?: string
    devpost?: string
    figma?: string
    report?: string
  }
  gallery?: string[]
  goal?: string
}

function getProject(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}

function getAdjacentProjects(slug: string) {
  const currentIndex = projectsData.findIndex((p) => p.slug === slug)
  if (currentIndex === -1) return { prev: null, next: null }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null

  return { prev: prevProject, next: nextProject }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const baseUrl = await getBaseUrl()
  const ogImage = project.gallery?.[0] || project.image
  const fullUrl = `${baseUrl}/projects/${slug}`

  return {
    title: `${project.title} • Projects`,
    description: project.description.replace(/🌟|⭐/g, '').trim(),
    openGraph: {
      title: project.title,
      description: project.description.replace(/🌟|⭐/g, '').trim(),
      url: fullUrl,
      type: 'article',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description.replace(/🌟|⭐/g, '').trim(),
      images: [`${baseUrl}${ogImage}`],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <>
      <ProjectNavbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8" style={{ paddingTop: 'clamp(7rem, 11vh, 8.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50/80 via-white to-rose-50/50 border border-rose-200/40 shadow-pink p-6 sm:p-8 md:p-10">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-rose-100/20 pointer-events-none" />
            
            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
              {/* Left: Project Logo - Increased by 1.15×, reduced padding */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] rounded-2xl overflow-hidden shadow-pink border border-rose-200/50">
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain p-1"
                    priority
                    sizes="(max-width: 640px) 150px, 185px"
                    unoptimized={project.image.endsWith('.gif')}
                  />
                </div>
              </div>

              {/* Right: Project Info - All fonts increased by 1.3× */}
              <div className="flex-1 space-y-6">
                {/* Title & Description */}
                <div>
                  <h1 className="text-[2.44rem] sm:text-[3.25rem] md:text-[4.06rem] font-bold text-ink mb-3 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-[0.9rem] sm:text-[1.3rem] text-ink/70 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-3">
                  <Pill className="gap-2 text-[1.024rem] px-4 py-1.5">
                    <Icon name="project-calendar" className="w-[1.5rem] h-[1.5rem]" alt="" />
                    <span>{project.date}</span>
                  </Pill>
                  <Pill className="gap-2 text-[1.024rem] px-4 py-1.5">
                    <Icon name="project-clock" className="w-[1.4rem] h-[1.4rem]" alt="" />
                    <span>{project.duration}</span>
                  </Pill>
                  <Pill className="gap-2 text-[1.024rem] px-4 py-1.5">
                    <Icon name="project-person" className="w-[1.3rem] h-[1.3rem]" alt="" />
                    <span>{project.role}</span>
                  </Pill>
                </div>

                {/* Tech Stack - TECH-STACK filled pill + outline pills */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Filled TECH-STACK label pill */}
                    <Pill variant="accent" className="text-[1.024rem] px-4 py-1.5 font-bold tracking-wide mr-1">
                      TECH-STACK
                    </Pill>
                    {/* White outline pills for each technology */}
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-4 py-1.5 text-[1.024rem] font-medium rounded-full transition-all duration-200 bg-white border-2 border-rose-500 text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-[1.4rem] font-bold tracking-widest text-rose-500 uppercase mb-3">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-ink/80 text-[1.1rem]">
                        <span className="text-rose-400 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white shadow-pink hover:shadow-pink-hover hover:brightness-110 active:translate-y-0.5 transition-all duration-200 font-medium text-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-rose-400 text-rose-600 hover:bg-rose-50 active:translate-y-0.5 transition-all duration-200 font-medium text-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <Icon name="live" className="w-4 h-4" alt="" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.links.devpost && (
                    <a
                      href={project.links.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-rose-400 text-rose-600 hover:bg-rose-50 active:translate-y-0.5 transition-all duration-200 font-medium text-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <Icon name="devpost" className="w-4 h-4" alt="" />
                      <span>DevPost</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.links.figma && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-rose-400 text-rose-600 hover:bg-rose-50 active:translate-y-0.5 transition-all duration-200 font-medium text-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <Icon name="figma" className="w-5 h-5" alt="" />
                      <span>Figma</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.links.report && (
                    <a
                      href={project.links.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-rose-400 text-rose-600 hover:bg-rose-50 active:translate-y-0.5 transition-all duration-200 font-medium text-[1rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Report</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <StarDivider />
            <h2 className="text-[1.95rem] sm:text-[2.44rem] font-bold text-center text-ink mb-8 mt-6">
              PROJECT GALLERY
            </h2>
            <ProjectGallery 
              images={project.gallery} 
              alt={project.title}
            />
          </div>
        </section>
      )}

      {/* Project Goal */}
      {project.goal && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <StarDivider />
            <h2 className="text-[1.95rem] sm:text-[2.44rem] font-bold text-center text-ink mb-8 mt-6">
              PROJECT GOAL
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[1.04rem] sm:text-[1.46rem] text-ink/80 leading-relaxed text-center whitespace-pre-wrap">
                {project.goal}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Previous Project */}
            <div className="text-left">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 rounded-lg p-2"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div className="hidden sm:block">
                    <p className="text-xs text-ink/50 uppercase tracking-wide">Prev</p>
                    <p className="font-medium text-sm">{prev.title}</p>
                  </div>
                  <span className="sm:hidden text-sm font-medium">Prev</span>
                </Link>
              ) : (
                <div className="opacity-0 pointer-events-none">-</div>
              )}
            </div>

            {/* Home */}
            <div className="flex justify-center">
              <Link
                href="/#projects"
                className="group inline-flex flex-col items-center gap-1 text-rose-600 hover:text-rose-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 rounded-lg p-2"
              >
                <Icon name="project-home" className="w-6 h-6 group-hover:scale-110 transition-transform" alt="" />
                <span className="text-xs font-semibold tracking-wider">HOME</span>
              </Link>
            </div>

            {/* Next Project */}
            <div className="text-right">
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 rounded-lg p-2"
                >
                  <span className="sm:hidden text-sm font-medium">Next</span>
                  <div className="hidden sm:block">
                    <p className="text-xs text-ink/50 uppercase tracking-wide">Next</p>
                    <p className="font-medium text-sm">{next.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="opacity-0 pointer-events-none">-</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}