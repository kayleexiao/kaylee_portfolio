export default function FancyDivider() {
  return (
    <div className="my-10 md:my-14">
      <div className="flex items-center justify-center gap-3 text-rose-500">
        <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-70">
          <path d="M1 5 L5 1 L9 5 L5 9 Z" fill="currentColor"/>
        </svg>
        <div className="h-[2px] w-40 md:w-64 bg-rose-300/70 rounded-full" />
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" fill="currentColor"/>
        </svg>
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path d="M7 1 L8.5 5.5 L13 7 L8.5 8.5 L7 13 L5.5 8.5 L1 7 L5.5 5.5 Z" fill="currentColor"/>
        </svg>
        <div className="h-[2px] w-40 md:w-64 bg-rose-300/70 rounded-full" />
        <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-70">
          <path d="M1 5 L5 1 L9 5 L5 9 Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}
