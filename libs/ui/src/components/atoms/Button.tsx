import { IconRotateClockwise2 } from '@tabler/icons-react'

type ButtonSizes = 'none' | 'sm' | 'md' | 'lg' | 'xl'

export type IButtonProps = {
  size?: ButtonSizes
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'success' | 'error' | 'white' | 'black'
  fullWidth?: boolean
  loading?: boolean
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const variantColor = {
  contained: {
    primary:
      'bg-gradient-to-r from-primary-600 to-violet-600 text-white border-0 enabled:hover:from-primary-500 enabled:hover:to-violet-500 enabled:hover:shadow-glow transition-all duration-200',
    white:
      'text-dark bg-white border-0 enabled:hover:bg-gray-50 transition-colors duration-200',
    black:
      'text-white bg-dark-100 border border-white/10 enabled:hover:bg-dark-200 enabled:hover:border-white/20 transition-all duration-200',
    success:
      'text-white bg-gradient-to-r from-green-500 to-green-600 border-0 enabled:hover:from-green-400 enabled:hover:to-green-500 transition-all duration-200',
    error:
      'text-white bg-gradient-to-r from-red-500 to-red-600 border-0 enabled:hover:from-red-400 enabled:hover:to-red-500 transition-all duration-200',
  },

  outlined: {
    primary:
      'border border-primary/40 text-primary bg-primary/5 enabled:hover:bg-primary/10 enabled:hover:border-primary/70 enabled:hover:shadow-glow-sm transition-all duration-200',
    white:
      'border border-white/30 text-white bg-white/5 enabled:hover:bg-white/10 enabled:hover:border-white/50 transition-all duration-200',
    black:
      'border border-gray-600 text-gray-200 bg-transparent enabled:hover:bg-white/5 enabled:hover:border-gray-400 transition-all duration-200',
    success:
      'border border-green/40 text-green bg-green/5 enabled:hover:bg-green/10 transition-all duration-200',
    error:
      'border border-red/40 text-red bg-red/5 enabled:hover:bg-red/10 transition-all duration-200',
  },
  text: {
    primary:
      'text-primary enabled:hover:text-primary-300 enabled:hover:underline underline-offset-4 transition-colors duration-150',
    white: 'text-white enabled:hover:text-gray-200 transition-colors duration-150',
    black: 'text-gray-300 enabled:hover:text-white transition-colors duration-150',
    success: 'text-green enabled:hover:text-green-300 transition-colors duration-150',
    error: 'text-red enabled:hover:text-red-300 transition-colors duration-150',
  },
}

const sizes: { [key in ButtonSizes]: string } = {
  none: 'text-xs',
  sm: 'px-3 py-1.5 text-xs font-medium',
  md: 'px-4 py-2 text-sm font-medium',
  lg: 'px-5 py-2.5 text-base font-medium',
  xl: 'px-8 py-3 text-lg font-semibold',
}

export const Button = ({
  size = 'md',
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  children,
  className,
  loading = false,
  type = 'button',
  ...props
}: IButtonProps) => {
  const variantCls = variantColor[variant][color]
  const sizeCls = sizes[size]
  const fwCls = fullWidth && 'w-full'
  const disCls = (disabled || loading) && 'opacity-50 cursor-not-allowed'

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`rounded-lg relative font-medium tracking-wide ${sizeCls} ${fwCls} ${variantCls} ${disCls} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <IconRotateClockwise2 className="w-4 h-4 animate-spin text-current" />
          </div>
          <div className="opacity-0">{children}</div>
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}
