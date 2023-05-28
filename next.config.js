/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compress: false,
  image:{
    unoptimized:true
  }
}

module.exports = nextConfig
