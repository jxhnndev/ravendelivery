import '../globals.css'

export const metadata = {
  title: 'Product delivery',
  description: 'Product delivery admin page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}