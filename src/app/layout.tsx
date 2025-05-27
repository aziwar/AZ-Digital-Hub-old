import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Ahmed Ziwar | Digital Marketing Manager & IT Consultant',
  description: 'Experienced Digital Marketing Manager and IT Consultant in Kuwait. Specializing in ROI-driven campaigns, e-commerce solutions, and strategic business growth.',
  keywords: ['Digital Marketing', 'IT Consultant', 'Kuwait', 'ROI-driven', 'E-commerce', 'Social Media', 'PPC', 'SEO'],
  authors: [{ name: 'Ahmed Ziwar' }],
  creator: 'Ahmed Ziwar',
  publisher: 'AZ Digital Hub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmedziwar.com',
    title: 'Ahmed Ziwar | Digital Marketing Manager & IT Consultant',
    description: 'Experienced Digital Marketing Manager and IT Consultant in Kuwait. Specializing in ROI-driven campaigns, e-commerce solutions, and strategic business growth.',
    siteName: 'AZ Digital Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ziwar | Digital Marketing Manager & IT Consultant',
    description: 'Experienced Digital Marketing Manager and IT Consultant in Kuwait.',
    creator: '@ahmedziwar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
