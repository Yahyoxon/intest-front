import React from 'react';
import Default from 'assets/images/banner.jpg';
import Image from 'next/image';
import { Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { get } from 'lodash';
import { Paths } from 'config/site-paths';
import { ProductCardImage, CardWrapper } from './product-card.styles';

const ProductCard = ({ product }: { product?: any }) => (
  <Grid item xs={3} >
    <Link href={`${Paths.PRODUCT_DETAIL}${get(product,'slug')}`} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <CardWrapper before="new">
        <ProductCardImage>
          <Image
            layout="fill"
            src={get(product, 'file.thumbnails.normal.src', Default)}
            alt="product_image"
            height="200px"
            // placeholder="blur"
          />
        </ProductCardImage>
        <Stack padding="6px" sx={{ backgroundColor: "#fff" }}>
          <Typography variant="h3" fontSize="16px" fontWeight={400} color="#183B56" lineHeight="28px">
            {get(product, 'name')}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography color={get(product, 'price') !== null ? "#FF4A4A" : "#183B56"} fontSize="18px" fontWeight={700}>
              {get(product, 'price')} сум
            </Typography>
            {get(product, 'price') !== null &&
              <Typography color="#183B56" fontSize="16px" fontWeight={400}>
                <del>
                  {get(product, 'sale_price')} сум
                </del>
              </Typography>
            }
          </Stack>

        </Stack>
      </CardWrapper>
    </Link>
  </Grid>
);

export default ProductCard;
