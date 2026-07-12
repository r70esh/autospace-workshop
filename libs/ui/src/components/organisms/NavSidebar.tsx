'use client'
import { IconMenu2 } from '@tabler/icons-react'
import Link from 'next/link'
import { Sidebar } from './Sidebar'
import { useDialogState } from '@autospace/util/hooks/dialog'

import { MenuItem } from '@autospace/util/types'
import { LogoutButton } from '../molecules/LogoutButton'
import { UserInfo } from '../molecules/UserInfo'
import { Menus } from './Menus'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export const NavSidebar = ({ menuItems }: INavSidebarProps) => {
  const [open, setOpen] = useDialogState()

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-150"
        aria-label="Open main menu"
      >
        <IconMenu2 className="w-5 h-5" />
      </button>
      <Sidebar open={open} setOpen={setOpen}>
        <div className="flex flex-col items-start space-y-1 pt-8">
          <UserInfo className="mb-6 px-1" />
          <Menus menuItems={menuItems} />
        </div>
        <div className="mt-auto pt-4 border-t border-white/10">
          <LogoutButton />
        </div>
      </Sidebar>
    </>
  )
}
