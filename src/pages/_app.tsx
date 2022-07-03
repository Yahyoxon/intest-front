/* eslint-disable import/no-unresolved */
import theme from 'config/mui-config';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'lib/i18next';
import { GlobalStyle } from 'config/styles-config';
import 'config/font.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Liber</title>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
