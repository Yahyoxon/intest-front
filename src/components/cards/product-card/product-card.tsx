import React from 'react';
import Default from 'assets/images/banner.jpg';
import Image from 'next/image';
import { Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { get } from 'lodash';
import { Paths } from 'config/site-paths';
import {
  ProductCardImage,
  CardWrapper,
  CardWrapperList,
  ProductCardImageList,
} from './product-card.styles';

const ProductCard = ({
  product,
  isGrid = true,
}: {
  product?: any;
  isGrid?: boolean;
}) => (
  <Link href={`${Paths.PRODUCT_DETAIL}${get(product, 'slug')}`}>
    {isGrid ? (
      <CardWrapper before="new">
        <ProductCardImage>
          <Image
            layout="fill"
            src={get(product, 'file.thumbnails.normal.src', Default)}
            alt="product_image"
            // height="200px"
          />
        </ProductCardImage>
        <Stack
          padding="6px 6px 15px"
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          sx={{ backgroundColor: '#fff', height: '90px' }}
        >
          <Typography
            variant="h3"
            fontSize="16px"
            fontWeight={400}
            color="#183B56"
            lineHeight="28px"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {get(product, 'name')}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              color={get(product, 'sale_price') === 0 ? '#183B56' : '#FF4A4A'}
              fontSize="18px"
              fontWeight={700}
            >
              {get(product, 'sale_price') === 0
                ? get(product, 'price')
                : get(product, 'sale_price')}{' '}
              $
            </Typography>
            {get(product, 'sale_price') !== 0 && (
              <Typography color="#183B56" fontSize="16px" fontWeight={400}>
                <del>{get(product, 'price')} $</del>
              </Typography>
            )}
          </Stack>
        </Stack>
      </CardWrapper>
    ) : (
      <CardWrapperList before="new">
        <Stack direction="row" justifyContent="flex-start">
          <ProductCardImageList>
            <Image
              src={get(product, 'file.thumbnails.normal.src', Default)}
              alt="product_image"
              height="200px"
              width="200px"
            />
          </ProductCardImageList>
          <Stack padding="20px 30px" width="100%">
            <Typography
              variant="h3"
              fontSize="16px"
              fontWeight={400}
              color="#183B56"
              lineHeight="28px"
            >
              {get(product, 'name')}
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="18px"
              fontWeight={700}
              color="#183B56"
              lineHeight="28px"
            >
              {get(product, 'price')} $
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="14px"
              fontWeight={400}
              color="#81838C"
              lineHeight="28px"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: get(product, 'description', ''),
                }}
              />
            </Typography>
          </Stack>
        </Stack>
      </CardWrapperList>
    )}
  </Link>
);

export default ProductCard;
