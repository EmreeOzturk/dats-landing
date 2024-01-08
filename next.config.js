/** @type {import('next').NextConfig} */
const { env } = require("process");
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: env.NODE_ENV === "production" ? true : false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
