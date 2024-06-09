const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['portfolio.site.ryotanny.com', 'res.cloudinary.com', 'assets.st-note.com'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
