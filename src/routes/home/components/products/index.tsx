import { Grid, Typography } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import { IProduct } from 'components/cards/product-card/product.types';
import { get } from 'lodash';
import React from 'react';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';


const Products = ({ title }: { title?: string }) => {
  //  eslint-disable-next-line
  const { data, isLoading, isFetching, isSuccess } = useQuery('products', () =>
    getAllData('/products?include=gallery&&include=file&&_l=ru')
  );
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
      <Grid container sx={{ flexGrow: 1 }} spacing={2} padding="30px 0" >
        <Grid item xs={12} marginTop="50px">
          <Grid container justifyContent="flex-start" spacing={3} rowSpacing={5}>
            {get(data, "data",[]).map((product: IProduct) => (
              <ProductCard key={product.name} {...{ product }} />
            ))}
          </Grid>
        </Grid></Grid>
    </>
  )
}
export default Products;
