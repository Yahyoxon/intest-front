/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['cdn.in-test.uz'],
  },
};

module.exports = nextConfig;
