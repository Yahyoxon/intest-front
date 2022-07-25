/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  localePath: './src/locales',
  swcMinify: true,
  images: {
    domains: ['cdn.in-test.uz']
  },
};

module.exports = nextConfig;
