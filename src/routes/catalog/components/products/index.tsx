import { Grid, Typography } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import ProductSkeleton from 'components/cards/product-card/product.skeleton';
import { IProduct } from 'components/cards/product-card/product.types';
import { get } from 'lodash';
import React from 'react';

const Products = ({
  data,
  isGrid,
  isFetching,
  isSuccess,
  isMobile,
}: {
  data: any;
  isGrid?: boolean;
  isFetching?: boolean;
  isSuccess?: boolean;
  isMobile: boolean;
}) => (
  <Grid container sx={{ flexGrow: 1 }} spacing={2} padding="30px 0">
    <Grid item xs={12}>
      <Grid
        container
        justifyContent="flex-start"
        spacing={isMobile ? 2 : 3}
        rowSpacing={isMobile ? 2 : 5}
      >
        {!isFetching &&
          isSuccess &&
          get(data, 'data', []).map((product: IProduct) => (
            <Grid
              key={product.name}
              item
              sm={isGrid ? 6 : 12}
              xs={isGrid ? 6 : 12}
              md={isGrid ? 4 : 12}
              lg={isGrid ? 3 : 12}
              sx={{ width: isGrid ? '50%' : '100%' }}
            >
              <ProductCard {...{ product, isGrid }} />
            </Grid>
          ))}
        {isFetching &&
          Array(10)
            .fill('d')
            .map((k, index: number) => (
              <Grid
                key={(k + index).toString()}
                item
                sm={isGrid ? 6 : 12}
                xs={isGrid ? 6 : 12}
                md={isGrid ? 4 : 12}
                lg={isGrid ? 3 : 12}
                sx={{ width: '100%' }}
              >
                <ProductSkeleton isGrid />
              </Grid>
            ))}
        {!isFetching && get(data, 'data.length') === 0 && (
          <Grid item>
            <Typography variant="h6" textAlign="center">
              Ничего не найдено :(
            </Typography>
          </Grid>
        )}
      </Grid>
    </Grid>
  </Grid>
);

export default Products;
