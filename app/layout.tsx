import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmed Ziwar | Digital Marketing Manager',
  description: 'Experienced Digital Marketing Manager and IT Consultant in Kuwait. Specializing in ROI-driven campaigns, e-commerce solutions, and strategic business growth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}