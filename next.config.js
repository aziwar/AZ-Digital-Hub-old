/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Performance optimizations for Next.js 15
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'lucide-react',
      '@radix-ui/react-slot',
      'class-variance-authority'
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
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://az-digital-hub.vercel.app',
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
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
