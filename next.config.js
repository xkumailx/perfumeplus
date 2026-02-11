/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.animaapp.com",
      },
      {
        protocol: "https",
        hostname: "perfumesplusinternational.com",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
