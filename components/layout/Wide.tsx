import { cn } from '@/lib/cn';

export const SHELL =
  "w-[92%] sm:w-[86%] lg:w-[70%] max-w-6xl mx-auto";

interface WideProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export default function Wide({ className = "", ...props }: WideProps) {
  return <div className={cn(SHELL, className)} {...props} />
}
