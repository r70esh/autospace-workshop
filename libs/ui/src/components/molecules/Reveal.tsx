'use client'
import { ReactNode, useState } from 'react'
export interface IRevealProps {
  secret: ReactNode
  showIntruction?: boolean
  className?: string
}

export const Reveal = ({
  secret,
  showIntruction = false,
  className,
}: IRevealProps) => {
  const [revealed, setRevealed] = useState(false)

  return (
    <button
      className={`flex flex-col items-center gap-2 ${className}`}
      onClick={() => setRevealed((state) => !state)}
    >
      <span
        className={`text-lg tracking-wider w-full border px-1 ${
          revealed
            ? 'bg-dark-100 text-white shadow-glass border-white/20 '
            : 'bg-checker border-white  text-transparent'
        }`}
      >
        {secret}
      </span>
      {showIntruction ? (
        <span className="text-xs text-gray-600">
          {revealed ? 'Hide' : 'Tap to reveal'}
        </span>
      ) : null}
    </button>
  )
}
