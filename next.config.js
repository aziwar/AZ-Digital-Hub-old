/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // SYSTEMATIC PATTERN ELIMINATION: Dangerous bypass flags removed
  // Previous configuration caused 58% deployment failure rate
  // Quality gate enforcement now active for all builds
  
  // Performance optimizations for Next.js 15
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@heroicons/react',
      'lucide-react'
    ],
    webpackMemoryOptimizations: true,
  },
  
  // Image optimization for Vercel + OpenAI DALL-E 3
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vpqhbrekfovgkcwegvxn.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://az-digital-hub-ahmed-zewars-projects.vercel.app',
    SITE_NAME: 'AZ Digital Hub - Ahmed Ziwar',
    SITE_DESCRIPTION: 'Ahmed Ziwar - Strategic Digital Marketing Commander | ROI-Driven Solutions for Kuwait & GCC',
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
