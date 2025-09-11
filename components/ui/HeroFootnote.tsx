export default function HeroFootnote() {
  return (
    <div className="mt-10 flex flex-col items-center gap-2 text-ink/70">
      <span className="text-sm md:text-base">welcome to my portfolio</span>
      <svg width="60" height="20" viewBox="0 0 60 20" aria-hidden="true">
        <path 
          d="M0,10 L25,10 L30,18 L35,10 L60,10" 
          fill="none" 
          stroke="currentColor" 
          strokeOpacity=".45" 
          strokeWidth="1.5" 
        />
      </svg>
    </div>
  )
}
