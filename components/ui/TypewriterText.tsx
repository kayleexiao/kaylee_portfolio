'use client'

import React from 'react'

type Props = {
  text: string
  typingSpeedMs?: number    // per char while typing
  deletingSpeedMs?: number  // per char while deleting
  pauseAtEndMs?: number     // pause when fully typed
  pauseAtStartMs?: number   // pause when fully deleted
  className?: string
}

export default function TypewriterText({
  text,
  typingSpeedMs = 70,
  deletingSpeedMs = 45,
  pauseAtEndMs = 1200,
  pauseAtStartMs = 600,
  className = '',
}: Props) {
  const [display, setDisplay] = React.useState('')
  const [deleting, setDeleting] = React.useState(false)
  const full = text

  // Respect prefers-reduced-motion
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  React.useEffect(() => {
    if (reduced) {
      setDisplay(full)
      return
    }

    let t: number

    if (!deleting) {
      // typing forward
      if (display.length < full.length) {
        t = window.setTimeout(() => {
          setDisplay(full.slice(0, display.length + 1))
        }, typingSpeedMs)
      } else {
        // reached full string → pause → start deleting
        t = window.setTimeout(() => setDeleting(true), pauseAtEndMs)
      }
    } else {
      // deleting backward one char at a time
      if (display.length > 0) {
        t = window.setTimeout(() => {
          setDisplay(full.slice(0, display.length - 1))
        }, deletingSpeedMs)
      } else {
        // fully deleted → pause → start typing again
        t = window.setTimeout(() => setDeleting(false), pauseAtStartMs)
      }
    }

    return () => window.clearTimeout(t)
  }, [display, deleting, full, typingSpeedMs, deletingSpeedMs, pauseAtEndMs, pauseAtStartMs, reduced])

  return (
    <span
      className={`typewriter ${className}`}
      aria-label={full}
      role="text"
      suppressHydrationWarning
    >
      <span className="typewriter__content">{display}</span>
      <span className="typewriter__caret" aria-hidden="true" />
    </span>
  )
}
