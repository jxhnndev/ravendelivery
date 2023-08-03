import { Footer, Navbar, Banner } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RavenDelivery',
  description: 'RavenDelivery app demo created by RavenHolmDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Banner />
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
