/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  compiler: {
    styledComponents: true,
  },
  i18n,
  swcMinify: true,
  images: {
    domains: ['cdn.in-test.uz']
  },
};

module.exports = nextConfig;
