import Image from 'next/image';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import ProductSkeleton from 'components/cards/product-card/product.skeleton';
import { IProduct } from 'components/cards/product-card/product.types';
import { get } from 'lodash';
import React from 'react';
import NotFound from 'assets/images/no-product.png';

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
    <Grid item xs={12} width="100%">
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
              <ProductCard {...{ product, isGrid, isMobile }} />
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
                sx={{ width: isGrid ? '50%' : '100%' }}
              >
                <ProductSkeleton {...{ isGrid }} />
              </Grid>
            ))}
        {!isFetching && get(data, 'data.length') === 0 && (
          <Grid item xs={12} sx={{ width: '100%' }}>
            <Stack
              direction="column"
              width="100%"
              sx={{
                background: '#f8f8f8',
                height: isMobile ? '300px' : '700px',
                borderRadius: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={NotFound} width={200} height={200} alt="" />
              <Typography variant="h6" textAlign="center" marginTop={3}>
                Ничего не найдено :(
              </Typography>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Grid>
  </Grid>
);

export default Products;
