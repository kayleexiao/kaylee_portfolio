import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-rose-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-ink mb-3">Project Not Found</h2>
        <p className="text-ink/60 mb-8">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 text-white shadow-pink hover:shadow-pink-hover hover:brightness-110 active:translate-y-0.5 transition-all duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <Home className="w-4 h-4" />
            <span>View All Projects</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-rose-400 text-rose-600 hover:bg-rose-50 active:translate-y-0.5 transition-all duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

