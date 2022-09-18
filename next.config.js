const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 6000000,
  },
});

module.exports = nextConfig;
