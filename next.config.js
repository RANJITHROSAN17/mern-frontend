/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
  basePath: '/mern-frontend',
} 

module.exports = nextConfig
