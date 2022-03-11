// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: false,
    removeConsole: false,
  },
  swcMinify: true,
  reactStrictMode: true,
  // @ts-ignore
  exportPathMap: async (defaultPathMap, {dev, dir, outDir, distDir, buildId}) => {
    return {
      '/': {page: '/'},
    };
  },
};

module.exports = nextConfig;
