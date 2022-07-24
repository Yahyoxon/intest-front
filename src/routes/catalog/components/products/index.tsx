import { Grid } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import { IProduct } from 'components/cards/product-card/product.types';
import { get } from 'lodash';
import React from 'react';

const Products = ({ data, isGrid }: { data: any; isGrid?: boolean }) => (
  <Grid container sx={{ flexGrow: 1 }} spacing={2} padding="30px 0">
    <Grid item xs={12}>
      <Grid container justifyContent="flex-start" spacing={3} rowSpacing={5}>
        {get(data, 'data', []).map((product: IProduct) => (
          <Grid
            key={product.name}
            item
            sm={isGrid ? 12 : 12}
            md={isGrid ? 4 : 12}
            lg={isGrid ? 3 : 12}
          >
            <ProductCard {...{ product, isGrid }} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default Products;
