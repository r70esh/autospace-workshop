'use client'
import dynamic from 'next/dynamic'
import { RotatingCamera } from '@autospace/3d/src/components/camera/Rotating'
import { IconArrowBack } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { BrandIcon } from '../atoms/BrandIcon'
import { GoogleButton } from './GoogleButton'

// WebGL (Three.js) must never run on the server — disable SSR for this component
const CarScene = dynamic(
  () => import('@autospace/3d/src/scenes/CarScene').then((m) => m.CarScene),
  { ssr: false, loading: () => <div className="w-full h-full" style={{ background: 'hsl(222,28%,7%)' }} /> },
)

export interface IAuthLayoutProps {
  children: ReactNode
  title: string
}

export const AuthLayout = ({ title, children }: IAuthLayoutProps) => {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <CarScene
        orbitControls={false}
        camera={<RotatingCamera />}
        hideAllComments
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark/70 to-dark-900/90" />

      <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0">
        <div className="w-full max-w-md mx-auto px-4">
          {/* Glass card */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(10, 10, 28, 0.75)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(248,85%,63%,0.08)',
            }}
          >
            <h1 className="flex items-center gap-2.5 mb-6 text-2xl font-bold">
              <BrandIcon />
              <span className="gradient-text">{title}</span>
            </h1>
            {children}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-gray-500">Or continue with</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <GoogleButton />
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors duration-150"
              >
                <IconArrowBack className="w-4 h-4" /> Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
