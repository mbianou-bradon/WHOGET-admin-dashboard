/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains: ["firebasestorage.googleapis.com","avatars.githubusercontent.com"]
  }
}

module.exports = nextConfig
