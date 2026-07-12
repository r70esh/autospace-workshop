import colors from 'tailwindcss/colors'

// Modern indigo-violet primary brand
const brandHue = 248

const primaryPallete = {
  DEFAULT: `hsl(${brandHue}, 85%, 63%)`,
  25:  `hsl(${brandHue}, 85%, 98%)`,
  50:  `hsl(${brandHue}, 85%, 95%)`,
  100: `hsl(${brandHue}, 85%, 88%)`,
  200: `hsl(${brandHue}, 85%, 78%)`,
  300: `hsl(${brandHue}, 85%, 70%)`,
  400: `hsl(${brandHue}, 85%, 65%)`,
  500: `hsl(${brandHue}, 85%, 58%)`,
  600: `hsl(${brandHue}, 85%, 50%)`,
  700: `hsl(${brandHue}, 85%, 38%)`,
  800: `hsl(${brandHue}, 85%, 24%)`,
  900: `hsl(${brandHue}, 85%, 12%)`,
}

// Cool slate gray (slightly purple-tinted for cohesion)
const grayPallete = {
  DEFAULT: `hsl(220, 12%, 50%)`,
  25:  `hsl(220, 12%, 97%)`,
  50:  `hsl(220, 12%, 94%)`,
  100: `hsl(220, 12%, 87%)`,
  200: `hsl(220, 12%, 74%)`,
  300: `hsl(220, 12%, 60%)`,
  400: `hsl(220, 12%, 48%)`,
  500: `hsl(220, 12%, 36%)`,
  600: `hsl(220, 12%, 26%)`,
  700: `hsl(220, 12%, 16%)`,
  800: `hsl(220, 12%, 10%)`,
  900: `hsl(220, 12%, 5%)`,
}

// Dark surface palette for glassmorphism
const darkPallete = {
  DEFAULT: `hsl(222, 28%, 7%)`,
  50:  `hsl(222, 28%, 11%)`,
  100: `hsl(222, 28%, 14%)`,
  200: `hsl(222, 28%, 18%)`,
  300: `hsl(222, 28%, 23%)`,
  400: `hsl(222, 28%, 28%)`,
  500: `hsl(222, 28%, 7%)`,
  600: `hsl(222, 28%, 5%)`,
  900: `hsl(222, 28%, 3%)`,
}

// Violet accent (secondary brand color for gradients)
const violetPallete = {
  DEFAULT: `hsl(270, 80%, 65%)`,
  50:  `hsl(270, 80%, 96%)`,
  100: `hsl(270, 80%, 88%)`,
  200: `hsl(270, 80%, 76%)`,
  300: `hsl(270, 80%, 68%)`,
  400: `hsl(270, 80%, 63%)`,
  500: `hsl(270, 80%, 58%)`,
  600: `hsl(270, 80%, 50%)`,
  700: `hsl(270, 80%, 38%)`,
  800: `hsl(270, 80%, 24%)`,
  900: `hsl(270, 80%, 10%)`,
}

const greenPallete = {
  DEFAULT: 'hsl(142, 72%, 42%)',
  25:  'hsl(142, 72%, 98%)',
  50:  'hsl(142, 72%, 92%)',
  100: 'hsl(142, 72%, 80%)',
  200: 'hsl(142, 72%, 66%)',
  300: 'hsl(142, 72%, 54%)',
  400: 'hsl(142, 72%, 46%)',
  500: 'hsl(142, 72%, 42%)',
  600: 'hsl(142, 72%, 32%)',
  700: 'hsl(142, 72%, 22%)',
  800: 'hsl(142, 72%, 12%)',
  900: 'hsl(142, 72%, 6%)',
}

const redPallete = {
  DEFAULT: 'hsl(354, 80%, 52%)',
  25:  'hsl(354, 80%, 98%)',
  50:  'hsl(354, 80%, 94%)',
  100: 'hsl(354, 80%, 86%)',
  200: 'hsl(354, 80%, 76%)',
  300: 'hsl(354, 80%, 66%)',
  400: 'hsl(354, 80%, 58%)',
  500: 'hsl(354, 80%, 52%)',
  600: 'hsl(354, 80%, 42%)',
  700: 'hsl(354, 80%, 28%)',
  800: 'hsl(354, 80%, 16%)',
  900: 'hsl(354, 80%, 8%)',
}

export const animationConfig = {
  'spin-reverse': 'reverse-spin 1s linear infinite',
  'spin-slow': 'spin 3s linear infinite',
  'spin-12': 'spin 12s linear infinite',
  'spin-24': 'spin 24s linear infinite',
  'spin-30': 'spin 30s linear infinite',
  wiggle: 'wiggle 1s ease-in-out infinite',
  'wiggle-fade': 'wiggle-fade 1s ease-in-out infinite',
  slide: 'slide 1s ease-in-out infinite',
  'slide-left': 'slide-left 1s ease-in-out infinite',
  'park-car': 'park-car 5s ease-in-out infinite',
  'slide-right': 'slide-right 1s linear infinite',
  blink: 'blink 2s linear infinite',
  breathe: 'breathe 6s ease-in-out infinite',
  'move-right-12': 'move-right 12s ease-in-out infinite',
  'move-right-24': 'move-right 24s ease-in-out infinite',
  'move-right-36': 'move-right 36s ease-in-out infinite',
  'move-right-48': 'move-right 48s ease-in-out infinite',
  'move-right-60': 'move-right 60s ease-in-out infinite',
}
export const keyframesConfig = {
  'reverse-spin': {
    from: {
      transform: 'rotate(360deg)',
    },
  },
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  },
  'wiggle-fade': {
    '0%, 100%': { transform: 'rotate(-3deg)', opacity: '0.4' },
    '50%': { transform: 'rotate(3deg)', opacity: '0.9' },
  },
  blink: {
    '0%, 49%': { opacity: '1' },
    '50%, 100%': { opacity: '0' },
  },

  slide: {
    '0%': { opacity: '1' },
    '100%': { transform: 'translateX(25%)' },
  },
  'move-right': {
    '0%': {
      left: '20%',
      opacity: '0',
    },
    '10%, 90%': {
      opacity: '1',
    },
    '100%': {
      left: '80%',
      opacity: '0',
    },
  },
  'park-car': {
    '0%': {
      transform: ' translateX(-150%) translateY(150%) rotate(90deg)',
    },
    '30%': {
      transform: ' translateY(-10%) rotate(0deg)',
    },
    '40%, 60%': {
      transform: ' translateX(0%) rotate(0deg)',
    },
    '100%': {
      transform: ' translateX(100%) translateY(150%)  rotate(-90deg)',
    },
  },
  'slide-right': {
    '40%,60%': {
      opacity: '1',
    },
    '46%': { transform: 'translateX(25%)', opacity: '0' },
    '54%': {
      transform: 'translateX(-25%)',
      opacity: '0',
    },
  },
  'slide-left': {
    '40%,60%': {
      opacity: '1',
    },
    '46%': { transform: 'translateX(-25%)', opacity: '0' },
    '54%': {
      transform: 'translateX(25%)',
      opacity: '0',
    },
  },
  breathe: {
    '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
    '60%': {
      transform: 'scale(1.5)',
      opacity: '1',
    },
  },
}

const template = {
  DEFAULT: '40%',
  25: '98%',
  50: '95%',
  100: '92%',
  200: '86%',
  300: '78%',
  400: '66%',
  500: '50%',
  600: '36%',
  700: '24%',
  800: '12%',
  900: '04%',
}

export const colorGen = ({ saturation = '100%', hue, lightness = template }) =>
  Object.entries(lightness)
    .map(([key, item]) => ({
      [key]: `hsl(${hue}, ${saturation}, ${item})`,
    }))
    .reduce((obj, item) => Object.assign(obj, item), {})

export const spacingConfig = {
  112: '28rem',
  128: '32rem',
  144: '36rem',
  160: '40rem',
  192: '48rem',
}

export const colorsConfig = {
  transparent: colors.transparent,
  black: colors.black,
  white: colors.white,
  primary: primaryPallete,
  red: redPallete,
  green: greenPallete,
  gray: grayPallete,
  dark: darkPallete,
  violet: violetPallete,
  accent: primaryPallete.DEFAULT,
}
