// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: false,
    removeConsole: false,
  },
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
