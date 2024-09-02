// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '', // Leave empty if not used
        pathname: '/**', // Allow any path
      },
      {
        protocol: 'https',
        hostname: 'sadakatcdn.cyparta.com',
        pathname: '/**',
      },
      
    ],
  },
};

module.exports = nextConfig;
