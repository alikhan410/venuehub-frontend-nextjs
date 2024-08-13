/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { HOST: "http://localhost:8181" },
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
