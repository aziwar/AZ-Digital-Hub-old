import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmed Ziwar - Digital Marketing Strategist | Kuwait',
  description: 'Transform your business with proven digital marketing strategies. 20+ years experience. 300% average ROI increase.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}