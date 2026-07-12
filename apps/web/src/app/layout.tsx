import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '@autospace/ui/src/app/globals.css'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import { SessionProvider } from '@autospace/ui/src/components/molecules/SessionProvider'
import { Header } from '@autospace/ui/src/components/organisms/Header'
import { ToastContainer } from '@autospace/ui/src/components/molecules/Toast'
import { MenuItem } from '@autospace/util/types'
import { Container } from '@autospace/ui/src/components/atoms/Container'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Autospace — Find & Book Parking',
  description: 'Find, book and manage parking spaces near you with Autospace.',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body className={`${inter.variable} ${outfit.variable} font-sans`} style={{ background: 'hsl(222,28%,7%)' }}>
            <Header menuItems={MENUITEMS} />
            <Container>{children}</Container>
            <ToastContainer />
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}
