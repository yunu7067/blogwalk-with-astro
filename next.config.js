// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: false,
    removeConsole: false,
  },
  redirects: async () => {
    return [
      {
        source: '/page/1/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  swcMinify: false,
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
