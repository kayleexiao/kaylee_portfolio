interface ExperienceDividerProps {
  size?: 'default' | 'lg'
}

export default function ExperienceDivider({ size = 'default' }: ExperienceDividerProps) {
  const isLarge = size === 'lg'
  
  return (
    <div className="my-10 md:my-14">
      <div className={`flex items-center justify-center text-rose-500 ${isLarge ? 'gap-4' : 'gap-3'}`}>
        <svg 
          width={isLarge ? "15" : "10"} 
          height={isLarge ? "15" : "10"} 
          viewBox="0 0 10 10" 
          className="opacity-70"
        >
          <path d="M1 5 L5 1 L9 5 L5 9 Z" fill="currentColor"/>
        </svg>
        <div className={`bg-rose-300/70 rounded-full ${isLarge ? 'h-[3px] w-60 md:w-96' : 'h-[2px] w-40 md:w-64'}`} />
        <svg 
          width={isLarge ? "30" : "20"} 
          height={isLarge ? "30" : "20"} 
          viewBox="0 0 20 20"
        >
          <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" fill="currentColor"/>
        </svg>
        <svg 
          width={isLarge ? "21" : "14"} 
          height={isLarge ? "21" : "14"} 
          viewBox="0 0 14 14"
        >
          <path d="M7 1 L8.5 5.5 L13 7 L8.5 8.5 L7 13 L5.5 8.5 L1 7 L5.5 5.5 Z" fill="currentColor"/>
        </svg>
        <div className={`bg-rose-300/70 rounded-full ${isLarge ? 'h-[3px] w-60 md:w-96' : 'h-[2px] w-40 md:w-64'}`} />
        <svg 
          width={isLarge ? "15" : "10"} 
          height={isLarge ? "15" : "10"} 
          viewBox="0 0 10 10" 
          className="opacity-70"
        >
          <path d="M1 5 L5 1 L9 5 L5 9 Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}
