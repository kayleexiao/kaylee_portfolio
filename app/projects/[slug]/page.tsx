import { Metadata } from 'next'
import Link from 'next/link'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

function getProjectTitle(slug: string): string {
  const titleMap: Record<string, string> = {
    portfolio: 'Portfolio Website',
    petpals: 'PetPals',
    fitquest: 'FitQuest',
    revrentals: 'RevRentals',
  }
  return titleMap[slug] || 'Project'
}

function getRepoUrl(slug: string): string | null {
  const repoMap: Record<string, string> = {
    portfolio: 'https://github.com/kayleexiao/kaylee_portfolio',
    petpals: 'https://github.com/ryanwoong/PetPals',
    fitquest: 'https://github.com/kayleexiao/FitQuest',
    revrentals: 'https://github.com/aeMyst/RevRentals',
  }
  return repoMap[slug] ?? null
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const title = getProjectTitle(slug)
  return {
    title: `${title} • Projects`,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const title = getProjectTitle(slug)
  const repoUrl = getRepoUrl(slug)

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-ink/70 font-semibold mb-8">
          Coming soon…
        </p>

        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-full border border-ink/10 text-ink hover:bg-ink/[0.03] px-4 py-2 transition-colors"
          >
            ← Back to Projects
          </Link>

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-rose-400 text-rose-500 hover:bg-rose-50 px-4 py-2 transition-colors"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}