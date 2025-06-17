/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Simplified experimental features for stable deployment
  experimental: {
    optimizeCss: true,
  },
  
  // Image optimization for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 1 week
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://ahmedziwar.vercel.app',
    SITE_NAME: 'AZ Digital Hub - ENTJ Commander',
    SITE_DESCRIPTION: 'Ahmed Ziwar - Strategic Digital Marketing Commander | ROI-Driven Solutions for Kuwait & GCC',
  },

  // Essential security headers only
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
        ],
      },
    ]
  },
}

module.exports = nextConfig