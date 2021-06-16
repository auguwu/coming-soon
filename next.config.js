module.exports = {
  webpack5: true,
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    domains: ['cdn.floofy.dev']
  },
  eslint: {
    // It is already linting in workflow, so this isn't needed
    ignoreDuringBuilds: true
  }
};
