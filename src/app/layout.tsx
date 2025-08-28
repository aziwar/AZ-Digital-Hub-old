import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmed Zewar | Digital Marketing Manager',
  description: 'Experienced Digital Marketing Manager and IT Consultant in Kuwait. Specializing in ROI-driven campaigns, e-commerce solutions, and strategic business growth.',
  keywords: 'digital marketing, kuwait, roi campaigns, e-commerce, business growth, marketing consultant',
  authors: [{ name: 'Ahmed Zewar', url: 'https://az-digital-hub.vercel.app' }],
  creator: 'Ahmed Zewar',
  publisher: 'AZ Digital Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AZ Digital Hub',
  },
  applicationName: 'AZ Digital Hub',
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e293b' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}