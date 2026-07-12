'use client'
import dynamic from 'next/dynamic'
import { IconSearch } from '@tabler/icons-react'
import Link from 'next/link'

// WebGL (Three.js) must never run on the server — disable SSR for this component
const CarScene = dynamic(
  () => import('@autospace/3d/src/scenes/CarScene').then((m) => m.CarScene),
  { ssr: false, loading: () => <div className="w-full h-full bg-dark-900" /> },
)

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)]">
      <div className="absolute top-16 bottom-0 left-0 right-0">
        <CarScene />
      </div>
      {/* Gradient overlay for readability */}
      <div
        className="absolute top-16 bottom-0 left-0 right-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, hsl(222,28%,7%,0.85) 0%, hsl(222,28%,7%,0.5) 50%, transparent 100%)',
        }}
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-2xl px-6 space-y-4">
        <div className="space-y-2">
          <div
            className="text-7xl font-black leading-none tracking-tighter"
            style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
          >
            <div
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, hsl(248,85%,72%) 0%, hsl(270,80%,72%) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Need
            </div>
          </div>
          <div
            className="text-7xl font-black leading-none tracking-tighter text-white"
            style={{ fontFamily: 'Outfit, Inter, sans-serif' }}
          >
            parking?
          </div>
        </div>
        <p className="text-gray-300 text-lg max-w-sm leading-relaxed">
          Find, book, and manage parking spaces in seconds. Premium spots, guaranteed.
        </p>
        <Link
          href="/search"
          className="group flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold text-base transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, hsl(248,85%,58%), hsl(270,80%,60%))',
            boxShadow: '0 0 24px -4px hsl(248,85%,63%,0.5)',
          }}
        >
          <IconSearch className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          Search now
        </Link>
      </div>
    </main>
  )
}
