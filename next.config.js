/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enable React strict mode to help identify potential problems
  output: 'standalone',  // Useful when exporting static pages for better deployment
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint during build to speed up builds
  },
  images: {
    domains: ['your-image-domain.com'], // Specify image domains for Next.js image optimization
    unoptimized: false,  // Disable unoptimized images for better performance
  },
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
