import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Hero'

const inter = Poppins({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'Chicken Leg Piece - Ulhas Kamathe',
  description: 'Chicken Leg Piece is a one-stop destination for food lovers who are always on the hunt for the latest and greatest food trends.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
