import { Role } from '@autospace/util/types'
import { BrandIcon } from './BrandIcon'

export interface IBrandProps {
  className?: string
  shortForm?: boolean
  type?: Role
}

export const Brand = ({
  shortForm = false,
  className,
  type = undefined,
}: IBrandProps) => {
  return (
    <div className={`grid place-items-center z-50 ${className}`}>
      <div className="text-xl">
        {shortForm ? (
          <div className="flex gap-1 items-center">
            <BrandIcon /> <span className="gradient-text font-bold">A.</span>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 font-medium tracking-tight">
            <BrandIcon />
            <div>
              <div className="flex gap-1.5 items-baseline">
                <span className="gradient-text font-bold text-lg">Autospace</span>
                {type ? (
                  <span className="text-xs text-gray-400 font-normal border border-primary/30 px-1.5 py-0.5 rounded-full bg-primary/5">
                    {type}
                  </span>
                ) : null}
              </div>
              <div className="text-xs text-gray-400 font-normal tracking-widest uppercase">
                Team Rocket
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
