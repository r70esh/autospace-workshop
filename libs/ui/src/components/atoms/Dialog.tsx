import {
  Dialog as HeadlessUIDialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { IconX } from '@tabler/icons-react'
import { Dispatch, Fragment, ReactNode, SetStateAction } from 'react'

interface IMyDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  title: string
  className?: string
  widthClassName?: string
}

export const Dialog = ({
  open,
  setOpen,
  children,
  title,
  widthClassName = 'max-w-md',
}: IMyDialogProps) => {
  function closeModal() {
    setOpen(false)
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <HeadlessUIDialog
        as="div"
        className="relative z-50"
        onClose={closeModal}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-250"
              enterFrom="opacity-0 scale-95 translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={`w-full p-6 overflow-hidden text-left align-middle transition-all transform rounded-2xl ${widthClassName}`}
                style={{
                  background: 'hsl(222, 28%, 10%)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                }}
              >
                <button
                  type="button"
                  className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-150"
                  onClick={() => setOpen(false)}
                >
                  <IconX className="w-4 h-4" />
                </button>
                <DialogTitle
                  as="h3"
                  className="mb-5 text-lg font-semibold leading-6 gradient-text"
                >
                  {title}
                </DialogTitle>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessUIDialog>
    </Transition>
  )
}
