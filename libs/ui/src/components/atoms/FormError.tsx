import { IconExclamationCircle } from '@tabler/icons-react'

export interface IFormErrorProps {}

export const FormError = ({ error }: { error?: string | undefined }) => {
  if (error) {
    return (
      <div className="flex items-center justify-start gap-1.5 mt-1.5 text-xs text-red-400">
        <IconExclamationCircle className="inline w-3.5 h-3.5 flex-shrink-0" />
        {error}
      </div>
    )
  }
  return null
}
