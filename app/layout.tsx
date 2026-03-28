import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

// Load Archivo as a variable font — supports any weight 100–900 including 350
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'JimsEstate | Find Your Home',
  description:
    'JimsEstate — a boutique real estate agency specializing in handpicked residential properties in the finest neighborhoods.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=75&auto=format"
        />
      </head>
      <body className={`${archivo.className}`}>
        {children}
      </body>
    </html>
  )
}
