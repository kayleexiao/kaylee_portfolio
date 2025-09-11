import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import Pill from '@/components/ui/Pill'
import Section from '@/components/ui/Section'
import SparkleSeparator from '@/components/ui/SparkleSeparator'

export default function DevPage() {
  return (
    <div className="min-h-screen py-8">
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-ink">Step 1 Visual Verification</h1>
            <p className="text-lg text-ink/70">Testing UI primitives and design system</p>
          </div>

          {/* Card Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Card Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">Basic Card</h3>
                <p className="text-ink/70">This is a basic card with default styling.</p>
              </Card>
              
              <Card hover className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">Hover Card</h3>
                <p className="text-ink/70">This card has hover effects enabled.</p>
              </Card>
              
              <Card sheen className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">Sheen Card</h3>
                <p className="text-ink/70">This card has a gloss sheen overlay.</p>
              </Card>
              
              <Card hover sheen className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">Hover + Sheen</h3>
                <p className="text-ink/70">This card has both hover effects and sheen.</p>
              </Card>
            </div>
          </div>

          {/* Pill Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Pill Components</h2>
            <div className="flex flex-wrap gap-3">
              <Pill>Default Pill</Pill>
              <Pill variant="secondary">Secondary Pill</Pill>
              <Pill variant="accent">Accent Pill</Pill>
              <Pill className="bg-rose-100 text-rose-700">Custom Pill</Pill>
            </div>
          </div>

          {/* Button Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Button Components</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Solid Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="pill">Pill Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </div>

          {/* Icon Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Icon Components</h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <div className="text-center">
                <Icon name="intro-star" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">intro-star</span>
              </div>
              <div className="text-center">
                <Icon name="projects-star" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">projects-star</span>
              </div>
              <div className="text-center">
                <Icon name="tech-react" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">tech-react</span>
              </div>
              <div className="text-center">
                <Icon name="project-calendar" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">project-calendar</span>
              </div>
              <div className="text-center">
                <Icon name="link-github" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">link-github</span>
              </div>
              <div className="text-center">
                <Icon name="link-linkedin" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">link-linkedin</span>
              </div>
              <div className="text-center">
                <Icon name="nav-arrow" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">nav-arrow</span>
              </div>
              <div className="text-center">
                <Icon name="tech-stack-star" className="w-8 h-8 mx-auto mb-2" />
                <span className="text-sm text-ink/70">tech-stack-star</span>
              </div>
            </div>
          </div>

          {/* SparkleSeparator Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">SparkleSeparator Components</h2>
            <div className="space-y-8">
              <div>
                <p className="text-ink/70 mb-4">Default (projects-star):</p>
                <SparkleSeparator />
              </div>
              <div>
                <p className="text-ink/70 mb-4">Intro star:</p>
                <SparkleSeparator icon="intro-star" />
              </div>
              <div>
                <p className="text-ink/70 mb-4">About star:</p>
                <SparkleSeparator icon="about-star" />
              </div>
            </div>
          </div>

          {/* Typography Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Typography (Cuprum Font)</h2>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-ink">Heading 1 - Bold</h1>
              <h2 className="text-3xl font-semibold text-ink">Heading 2 - Semibold</h2>
              <h3 className="text-2xl font-medium text-ink">Heading 3 - Medium</h3>
              <h4 className="text-xl font-normal text-ink">Heading 4 - Normal</h4>
              <p className="text-lg text-ink/70">Body text - Large with reduced opacity</p>
              <p className="text-base text-ink">Body text - Base size</p>
              <p className="text-sm text-ink/60">Small text - Small size with reduced opacity</p>
            </div>
          </div>

          {/* Color Palette Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-600 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-ink/70">rose-600</span>
                <br />
                <span className="text-xs text-ink/50">#F56B80</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-400 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-ink/70">rose-400</span>
                <br />
                <span className="text-xs text-ink/50">#FAB6C0</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-200 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-ink/70">rose-200</span>
                <br />
                <span className="text-xs text-ink/50">#F6F2ED</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-surface rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-ink/70">surface</span>
                <br />
                <span className="text-xs text-ink/50">#FFF9F1</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ink rounded-lg mx-auto mb-2"></div>
                <span className="text-sm text-white">ink</span>
                <br />
                <span className="text-xs text-white/70">#293949</span>
              </div>
            </div>
          </div>

          {/* Background Testing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-ink">Background Gradient</h2>
            <Card className="p-8">
              <p className="text-ink/70">
                This card should show the layered background gradient effect. 
                The page background should have subtle radial gradients and a linear gradient overlay.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
