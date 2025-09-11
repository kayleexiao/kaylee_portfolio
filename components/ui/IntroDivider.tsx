import Icon from './Icon'

interface IntroDividerProps {
  size?: 'md' | 'xl'
}

export default function IntroDivider({ size = 'md' }: IntroDividerProps) {
  const presets = {
    md: { 
      line: "w-20 md:w-28 h-[2px]", 
      icon: "h-6 w-6 md:h-7 md:w-7", 
      gap: "gap-5" 
    },
    xl: { 
      line: "w-36 md:w-64 h-[3px]", 
      icon: "h-12 w-12 md:h-14 md:w-14", 
      gap: "gap-8" 
    },
  }[size]

  return (
    <div className={`flex items-center ${presets.gap} justify-center`}>
      <div className={`line-thin ${presets.line}`} />
      <Icon name="intro-star" className={`${presets.icon} text-ink/60`} alt="" />
      <div className={`line-thin ${presets.line}`} />
    </div>
  )
}
