import { Container } from '@mui/material';
import React from 'react';
import MainView from './components/product-view-main';
import RelatedProducts from './components/related';
import DetailsTabs from './components/tabs';

const ProductDetailsRoute = ({ state }: { state: any }) => {
  const { data, status } = state;
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
