import Icon from './Icon'

interface IntroDividerProps {
  size?: 'md' | 'xl'
}

export default function IntroDivider({ size = 'md' }: IntroDividerProps) {
  const presets = {
    md: { 
      line: "h-[2px] flex-1 max-w-[clamp(5rem,20vw,7rem)] min-w-[1.25rem]", 
      icon: "h-6 w-6 md:h-7 md:w-7", 
      gap: "gap-5" 
    },
    xl: { 
      line: "h-[3px] flex-1 max-w-[clamp(6rem,28vw,28rem)] min-w-[3rem]", 
      icon: "h-12 w-12 md:h-14 md:w-14", 
      gap: "gap-8" 
    },
  }[size]

  return (
    <div className={`w-full flex items-center ${presets.gap} justify-center`}>
      <div className={`line-thin ${presets.line}`} />
      <Icon name="intro-star" className={`${presets.icon} text-ink/60`} alt="" />
      <div className={`line-thin ${presets.line}`} />
    </div>
  )
}
