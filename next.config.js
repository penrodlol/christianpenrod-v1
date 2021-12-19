/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    formats: ['image/webp'],
  },
};
