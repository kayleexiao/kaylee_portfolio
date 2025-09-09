import Card from '@/components/ui/Card'
import HeroFootnote from '@/components/ui/HeroFootnote'
import IntroDivider from '@/components/ui/IntroDivider'

export default function Hero() {
  return (
    <section className="min-h-[82vh] md:min-h-[88vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Card className="relative mx-auto max-w-5xl rounded-3xl p-10 md:p-16 bg-white/80 hero-radial sheen w-full">
            <div className="text-center space-y-4">
              {/* Small line */}
              <div className="text-4xl md:text-5xl font-extrabold text-ink/90">
                hi, i'm
              </div>
              
              {/* Big display name */}
              <div className="text-6xl md:text-[100px] font-extrabold text-[var(--rose-500)] leading-none">
                kaylee xiao
              </div>
              
              {/* Divider with star */}
              <IntroDivider />
              
              {/* Subtitle */}
              <div className="mt-4 text-2xl md:text-3xl text-ink/90">
                computer science student
              </div>
            </div>
          </Card>
          
          {/* Footnote */}
          <HeroFootnote />
        </div>
      </div>
    </section>
  )
}