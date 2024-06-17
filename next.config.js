const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
      },
      {
        protocol: 'https',
        hostname: 'qiita-user-contents.imgix.net',
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
