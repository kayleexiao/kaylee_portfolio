import Footer from '@/components/Footer'
import ScrollToTop from '@/components/util/ScrollToTop'
import { getBaseUrl } from '@/lib/baseUrl'
import { Metadata } from 'next'
import { Cuprum } from 'next/font/google'
import './globals.css'

const cuprum = Cuprum({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cuprum',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(await getBaseUrl()),
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cuprum.variable}>
      <body className={`${cuprum.className} antialiased min-h-screen flex flex-col`}>
        <ScrollToTop />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
