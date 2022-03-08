// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: false,
    removeConsole: true,
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
