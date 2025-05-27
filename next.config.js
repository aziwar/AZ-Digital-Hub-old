const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  output: 'standalone',
  experimental: {
    appDir: true,
    optimizePackageImports: [
      '@heroicons/react',
      'framer-motion',
      'lucide-react',
    ],
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Image optimization
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://ahmedziwar.com',
    SITE_NAME: 'AZ Digital Hub',
    SITE_DESCRIPTION: 'Ahmed Ziwar - Digital Marketing Manager & IT Consultant',
  },

  // Experimental features
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'framer-motion',
      'lucide-react',
    ],
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Webpack configuration
  webpack: (config, { _dev, _isServer }) => {
    // Add custom webpack configuration here
    
    // Important: return the modified config
    return config
  },

  // Security headers
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
    ]

    // In production, add security headers
    if (process.env.NODE_ENV === 'production') {
      securityHeaders.push({
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      })
    }

    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      // Add any redirects here
      // Example:
      // {
      //   source: '/old-blog/:slug',
      //   destination: '/blog/:slug',
      //   permanent: true,
      // },
    ]
  },

  // Rewrites
  async rewrites() {
    return [
      // Add any rewrites here
    ]
  },
}

// Bundle analyzer configuration
module.exports = withBundleAnalyzer(nextConfig)
