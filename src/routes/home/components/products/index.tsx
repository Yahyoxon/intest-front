import { Grid, Typography } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import React from 'react';

const data = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const Products = () => (
  <Grid container sx={{ flexGrow: 1 }} spacing={2} paddingTop="30px" >
    <Typography
      variant="h1"
      fontSize="38px"
      fontWeight={600}
      color="#183B56"
      lineHeight="52px"
    >
      Популярная товары
    </Typography>
    <Grid item xs={12} marginTop="50px">
      <Grid container justifyContent="flex-start" spacing={2}>
        {data.map((item, i) => (
          <ProductCard key={(item + i).toString()} />
        ))}
      </Grid>
    </Grid></Grid>
);

export default Products;
