/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
  basePath: '/mern-frontend',
//   env: {
//     NEXTAUTH_URL: 'localhost:3000/mern-frontend'
//  },
} 

module.exports = nextConfig
