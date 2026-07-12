import { MenuItem } from '@autospace/util/types'
import Link from 'next/link'

export interface IMenuItemProps {
  menuItems: MenuItem[]
}

export const Menus = ({ menuItems }: IMenuItemProps) => {
  return (
    <>
      {menuItems.map(({ label, href }) => (
        <Link
          className="relative text-gray-300 hover:text-white font-medium transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-primary after:to-violet after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          key={label}
          href={href}
        >
          {label}
        </Link>
      ))}
    </>
  )
}
