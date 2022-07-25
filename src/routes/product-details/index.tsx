import { Container, useMediaQuery, useTheme } from '@mui/material';
import PageBreadcrumb from 'components/breadcrumb';
import { get } from 'lodash';
import React from 'react';
import MainView from './components/product-view-main';
import RelatedProducts from './components/related';
import DetailsTabs from './components/tabs';

const ProductDetailsRoute = ({ state }: { state: any }) => {
  const data = get(state, 'data', []);
  const status = get(state, 'status', '');
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container maxWidth="xl">
      <PageBreadcrumb
        pageData={[
          { title: 'Филтьр', link: '/filter' },
          { title: get(data, 'name'), link: '' },
        ]}
      />
      {status === 'success' && (
        <>
          <MainView product={data} {...{ isMobile }} />
          <DetailsTabs product={data} {...{ isMobile }} />
          <RelatedProducts product={data} {...{ isMobile }} />
        </>
      )}
    </Container>
  );
};

export default ProductDetailsRoute;
