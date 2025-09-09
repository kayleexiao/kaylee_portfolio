import { cn } from '@/lib/cn'

// Icon name mapping to file paths
const iconMap = {
  'about-star': '/assets/icons/about-star.svg',
  'contact-star': '/assets/icons/contact-star.svg',
  'intro-star': '/assets/icons/intro-star.svg',
  'nav-arrow': '/assets/icons/nav-arrow.svg',
  'nav-star': '/assets/icons/nav-star.svg',
  'link-github': '/assets/icons/link-github.svg',
  'link-linkedin': '/assets/icons/link-linkedin.svg',
  'project-calendar': '/assets/icons/project-calendar.svg',
  'project-clock': '/assets/icons/project-clock.svg',
  'project-home': '/assets/icons/project-home.svg',
  'project-next-button': '/assets/icons/project-next-button.svg',
  'project-person': '/assets/icons/project-person.svg',
  'projects-star': '/assets/icons/projects-star.svg',
  'tech-css': '/assets/icons/tech-css.svg',
  'tech-git': '/assets/icons/tech-git.svg',
  'tech-github': '/assets/icons/tech-github.svg',
  'tech-html': '/assets/icons/tech-html.svg',
  'tech-java': '/assets/icons/tech-java.svg',
  'tech-js': '/assets/icons/tech-js.svg',
  'tech-mysql': '/assets/icons/tech-mysql.svg',
  'tech-node': '/assets/icons/tech-node.svg',
  'tech-python': '/assets/icons/tech-python.svg',
  'tech-react': '/assets/icons/tech-react.svg',
  'tech-stack-star': '/assets/icons/tech-stack-star.svg',
} as const

type IconName = keyof typeof iconMap

interface IconProps {
  name: IconName
  className?: string
  alt?: string
  width?: number
  height?: number
}

export default function Icon({ 
  name, 
  className, 
  alt = '', 
  width = 24, 
  height = 24 
}: IconProps) {
  const src = iconMap[name]
  
  if (!src) {
    console.warn(`Icon "${name}" not found in iconMap`)
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('inline-block', className)}
    />
  )
}

// Export the icon names for TypeScript autocomplete
export { iconMap }
export type { IconName }

