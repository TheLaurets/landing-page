/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  domains: [
    "media.graphassets.com",
    "localhost",
    "github.com",
  ],
  images: {
    domains: ['github.com'],
  },
}

module.exports = nextConfig
