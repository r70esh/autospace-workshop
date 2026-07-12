import type { Config } from 'tailwindcss'
import {
  colorsConfig,
  spacingConfig,
  animationConfig,
  keyframesConfig,
} from './src/styles/config'

const config: Config = {
  important: true,
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: colorsConfig,
    fontFamily: {
      sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
      display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      ringColor: {
        DEFAULT: colorsConfig.primary.DEFAULT,
      },
      outlineColor: {
        DEFAULT: colorsConfig.primary.DEFAULT,
      },
      borderRadius: {
        DEFAULT: '0.625rem',
        sm: '0.375rem',
        md: '0.625rem',
        lg: '0.875rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
        none: '0px',
      },
      boxShadow: {
        glow: '0 0 20px -5px hsl(248, 85%, 63% / 0.5)',
        'glow-sm': '0 0 12px -3px hsl(248, 85%, 63% / 0.4)',
        'glow-lg': '0 0 40px -8px hsl(248, 85%, 63% / 0.6)',
        glass: '0 4px 24px -2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-sm': '0 2px 12px -2px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: spacingConfig,
      animation: {
        ...animationConfig,
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        ...keyframesConfig,
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px -3px hsl(248,85%,63%/0.3)' },
          '50%': { boxShadow: '0 0 28px -4px hsl(248,85%,63%/0.7)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

