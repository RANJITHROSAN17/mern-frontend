/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
  basePath: '/mern-frontend',
  env: {

  }
} 

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);


module.exports = withNextIntl(nextConfig)
