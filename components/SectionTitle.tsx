interface SectionTitleProps {
  title: string
  className?: string
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2 className={`text-2xl font-bold tracking-tight uppercase ${className || ''}`}>
      {title}
    </h2>
  )
}
