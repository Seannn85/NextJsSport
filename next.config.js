/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      env: {
        PUBLISHABLE_TOKEN_IEX: process.env.PUBLISHABLE_TOKEN_IEX,
        SECRET_TOKEN_IEX:process.env.SECRET_TOKEN_IEX
      },
      images: {
        domains: ['cdn.sportmonks.com'],
      },
}

module.exports = nextConfig
