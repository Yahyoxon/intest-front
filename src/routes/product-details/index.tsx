import { Container } from '@mui/material';
import { get } from 'lodash';
import React from 'react';
import MainView from './components/product-view-main';
import RelatedProducts from './components/related';
import DetailsTabs from './components/tabs';

const ProductDetailsRoute = ({ state }: { state: any }) => {
  const data = get(state, 'data', []);
  const status = get(state, 'status', '');
  return (
    <Container maxWidth="xl">
      {status === 'success' && (
        <>
          <MainView product={data} />
          <DetailsTabs product={data} />
          <RelatedProducts product={data} />
        </>
      )}
    </Container>
  );
};

export default ProductDetailsRoute;
