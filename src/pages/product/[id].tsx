import Main from 'layouts/main';
import Head from 'next/head';
import React from 'react';
import ProductDetailsPage from 'routes/product-detail';

const ProductDetail = () => (
  <Main>
    <Head>
      <title>Product details</title>
    </Head>
    <ProductDetailsPage />
  </Main>
);

export default ProductDetail;
