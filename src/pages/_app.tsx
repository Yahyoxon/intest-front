/* eslint-disable import/no-unresolved */
import theme from 'config/mui-config';
import type { AppProps } from 'next/app';

import 'lib/i18next';
import { GlobalStyle } from 'config/styles-config';
import 'config/font.css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { MyGlobalContext } from 'context/filter';
import { useMemo, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps | any) => {
  const queryClient = new QueryClient();
  const [filterCat, setFilterCat] = useState<any>();
  const memoizedValue = useMemo(
    () => ({
      setFilterCat,
      filterCat,
    }),
    [setFilterCat, filterCat]
  );
  return (
    <MyGlobalContext.Provider value={memoizedValue}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </MyGlobalContext.Provider>
  );
};

export default MyApp;
