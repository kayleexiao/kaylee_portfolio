import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-transparent py-10">
      <div className="mx-auto flex flex-col items-center gap-4">
        <Image
          src="/assets/logo.png"
          alt="Kaylee Xiao logo"
          width={80}
          height={80}
          className="h-20 w-20 object-contain"
        />
        <p className="text-ink/50 text-sm">
          © {new Date().getFullYear()} Kaylee Xiao. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
