import { BaseComponent } from '@autospace/util/types'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export const UserInfo = ({ children, className }: BaseComponent) => {
  const session = useSession()
  const image = session.data?.user?.image
  const name = session.data?.user?.name
  const uid = session.data?.user?.uid
  return (
    <div className={`flex gap-3 ${className}`}>
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary/40 ring-offset-2 ring-offset-dark">
          <Image
            src={image || '/user.png'}
            alt=""
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green rounded-full border-2 border-dark" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-semibold text-white text-sm">{name}</div>
        <div className="text-xs text-gray-400 font-mono mt-0.5 truncate max-w-[140px]">{uid}</div>
      </div>
      {children}
    </div>
  )
}
