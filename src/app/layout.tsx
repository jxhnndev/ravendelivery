import { Footer, Navbar, Banner } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RavenDelivery',
  description: 'RavenDelivery app demo created by RavenHolmDev',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div>
            <Banner />
            <Navbar />
            {children}
            <Footer/>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
