import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import ProductSkeleton from 'components/cards/product-card/product.skeleton';
import { IProduct } from 'components/cards/product-card/product.types';
import { get } from 'lodash';
import React from 'react';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';

const Products = ({ title }: { title?: string }) => {
  //  eslint-disable-next-line
  const { data, isLoading, isFetching, isSuccess } = useQuery('products', () =>
    getAllData('/products?include=file&_l=ru')
  );
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Typography
        variant="h1"
        fontSize="38px"
        fontWeight={600}
        color="#183B56"
        lineHeight="52px"
      >
        {title}
      </Typography>
      <Grid container sx={{ flexGrow: 1 }} spacing={2} padding="30px 0">
        <Grid item xs={12} marginTop="50px">
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
                  sm={6}
                  xs={6}
                  md={4}
                  lg={3}
                  sx={{ width: isMobile ? '50%' : '100%' }}
                >
                  <ProductCard {...{ product }} />
                </Grid>
              ))}
            {isFetching &&
              Array(10)
                .fill('d')
                .map((k, index: number) => (
                  <Grid
                    key={(k + index).toString()}
                    item
                    sm={6}
                    xs={6}
                    md={4}
                    lg={3}
                    sx={{ width: isMobile ? '50%' : '100%' }}
                  >
                    <ProductSkeleton isGrid />
                  </Grid>
                ))}
            {!isFetching && get(data, 'data.length') === 0 && (
              <Grid
                item
                sm={6}
                xs={6}
                md={4}
                lg={3}
                sx={{ width: isMobile ? '50%' : '100%' }}
              >
                <Typography variant="h6" textAlign="center">
                  Ничего не найдено :(
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Products;
