/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
      domains: [
          "upload.wikimedia.org",
          "www.uncf.org"
      ],
  },
}

module.exports = nextConfig;
