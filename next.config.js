/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { HOST: "https://venuehub-gateway.onrender.com" },
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
