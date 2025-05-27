/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'cdn.pixabay.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // For static export, uncomment these lines:
  // output: 'export',
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // Configure base path if deploying to a subdirectory
  // basePath: '/your-subdirectory',
  
  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://ahmedziwar.com',
    SITE_NAME: 'AZ Digital Hub',
    SITE_DESCRIPTION: 'Ahmed Ziwar - Digital Marketing Manager & IT Consultant',
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
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
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
