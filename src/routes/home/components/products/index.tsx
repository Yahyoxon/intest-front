import { Grid } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import React from 'react';

const data = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const Products = () => (
  <Grid container gap="18px" margin="-8px" width="calc(100%+16px)">
    {data.map((item, i) => (
      <ProductCard key={(item + i).toString()} />
    ))}
  </Grid>
);

export default Products;
