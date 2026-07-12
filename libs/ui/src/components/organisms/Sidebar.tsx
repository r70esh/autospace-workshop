import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { IconX } from '@tabler/icons-react'

export interface ISidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  children: ReactNode
  blur?: boolean
}

export const Sidebar = ({
  open,
  setOpen,
  children,
  blur = true,
}: ISidebarProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={() => setOpen(false)}
      >
        {blur ? (
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </TransitionChild>
        ) : null}

        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <TransitionChild
            as={Fragment}
            enter="transform transition ease-in-out duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-150"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel
              className="flex flex-col w-screen max-w-sm p-5"
              style={{
                background: 'hsl(222, 28%, 8%)',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '-16px 0 48px rgba(0,0,0,0.5)',
              }}
            >
              <button
                type="button"
                className="absolute top-3 right-3 z-10 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                <IconX className="w-5 h-5" aria-hidden="true" />
              </button>
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}
