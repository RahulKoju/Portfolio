/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@react-email/render"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
