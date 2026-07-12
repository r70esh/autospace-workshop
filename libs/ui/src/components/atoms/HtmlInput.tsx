import React, { InputHTMLAttributes } from 'react'

export type HtmlInputProps = InputHTMLAttributes<HTMLInputElement>

export const HtmlInput = React.forwardRef<HTMLInputElement, HtmlInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`block w-full px-3.5 py-2.5 rounded-lg bg-dark-100 border border-white/10 text-white placeholder-gray-400 read-only:text-gray-400 read-only:bg-dark-50 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 sm:text-sm transition-all duration-200 ${className}`}
      {...props}
    />
  ),
)
HtmlInput.displayName = 'Input'
