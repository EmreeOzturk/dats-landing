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
          /* {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self';",
          }, */
        ],
      },
     ]
   },
   async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://datsproject.io/*',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: env.NODE_ENV === "production" ? true : false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
