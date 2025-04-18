/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,  // Enable React strict mode to help identify potential problems
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint during build to speed up builds
  },
  images: {
    domains: ['your-image-domain.com'], // Specify image domains for Next.js image optimization
    unoptimized: true,  // Set to true for static exports
  },
  basePath: '/portfolio',  // Add this line
  assetPrefix: '/portfolio/',  // Add this line
  
  webpack(config, { isServer }) {
    // Only optimize images for client-side builds
    if (!isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }
    return config;
  },
};

module.exports = nextConfig;
