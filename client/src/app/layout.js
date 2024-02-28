
import { Inter } from 'next/font/google'

import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'car-4-you',
  description: 'car rental website',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
