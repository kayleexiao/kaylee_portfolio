import Icon from './Icon'

export default function IntroDivider() {
  return (
    <div className="flex items-center gap-5 justify-center">
      <div className="line-thin w-20 md:w-28" />
      <Icon name="intro-star" className="h-6 w-6 md:h-7 md:w-7 text-ink/60" alt="" />
      <div className="line-thin w-20 md:w-28" />
    </div>
  )
}
