import React, { HTMLProps } from 'react'
import { FormError } from './FormError'

export type HtmlLabelProps = HTMLProps<HTMLLabelElement> & {
  error?: string | undefined
  optional?: boolean
}

export const HtmlLabel = React.forwardRef<HTMLLabelElement, HtmlLabelProps>(
  ({ children, title, optional, error, className }, ref) => (
    <label ref={ref} className={`text-sm block select-none ${className}`}>
      <div className="flex items-baseline justify-between mb-1.5">
        <div className="font-semibold capitalize text-gray-100 tracking-wide">{title}</div>
        <div className="text-xs text-gray-400 font-normal">
          {optional ? '(optional)' : null}
        </div>
      </div>
      {children}
      <FormError error={error} />
    </label>
  ),
)

HtmlLabel.displayName = 'HtmlLabel'
