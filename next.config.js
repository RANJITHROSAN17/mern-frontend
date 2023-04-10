/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
  basePath: '/UI',
}

module.exports = nextConfig
