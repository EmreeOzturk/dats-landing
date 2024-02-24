/** @type {import('next').NextConfig} */
const { env } = require("process");
const nextConfig = {
  async headers() {
     return [
      {
        source: '/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'content-security-policy',
            value:
              'frame-ancestors https://datsproject.io  http://localhost:3002 http://localhost:3000 ',
          },
          {
            key: 'x-xss-protection',
            value: '1; mode=block',
          },
        ],
      },
     ]
   },
  reactStrictMode: true,
  compiler: {
    removeConsole: env.NODE_ENV === "production" ? true : false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
