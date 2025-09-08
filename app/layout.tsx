import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Kaylee Xiao - Computer Science Student & Developer',
    template: '%s | Kaylee Xiao'
  },
  description: 'Computer science student passionate about building innovative solutions. Explore my projects, experience, and get in touch.',
  keywords: ['Kaylee Xiao', 'Computer Science', 'Developer', 'Portfolio', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Kaylee Xiao' }],
  creator: 'Kaylee Xiao',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Kaylee Xiao - Computer Science Student & Developer',
    description: 'Computer science student passionate about building innovative solutions.',
    siteName: 'Kaylee Xiao Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaylee Xiao - Computer Science Student & Developer',
    description: 'Computer science student passionate about building innovative solutions.',
    creator: '@kaylee_xiao',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
