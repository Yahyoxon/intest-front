import React from 'react';
import Default from 'assets/images/banner.jpg';
import Image from 'next/image';
import { Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Paths } from 'config/site-paths';
import { ProductCardImage, ProductCardWrapper } from './product-card.styles';

const ProductCard = () => (
  <Grid xs={3} margin="0 -8px">
    <Link href={`${Paths.PRODUCT_DETAIL}asdf`} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <ProductCardImage>
          <Image
            layout="fill"
            src={Default}
            alt="product_image"
            placeholder="blur"
          />
        </ProductCardImage>
        <Stack>
          <Typography variant="h3" fontSize="16px" fontWeight={400}>
            Product title
          </Typography>
          <Typography color="#183B56" fontSize="18px" fontWeight={700}>
            2 345 000 сум
          </Typography>
        </Stack>
      </a>
    </Link>
  </Grid>
);

export default ProductCard;
