import React from 'react';
import Default from 'assets/png/default.png';
import Image from 'next/image';
import { Grid, Rating, Stack, Typography } from '@mui/material';
import StarIcon from 'components/icons/star.icon';
import HeadPhoneIcon from 'components/icons/headphone.icon';
import BookmarkIcon from 'components/icons/bookmark.icon';
import { COLORS } from 'config/styles-config';
import StarWhiteIcon from 'components/icons/star-white.icon';
import Link from 'next/link';
import { Paths } from 'config/site-paths';
import {
  ProductCardImage,
  ProductCardInfo,
  ProductCardWrapper,
} from './product-card.styles';
import ProductCharacteristics from './product-characteristics';

interface ProductCardProps {
  horizontal?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ horizontal }) => (
  <Link href={`${Paths.PRODUCT_DETAIL}asdf`} passHref>
    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>
      <ProductCardWrapper horizontal={horizontal}>
        {horizontal ? (
          <Grid container columnSpacing={2}>
            <Grid item xs={3}>
              <ProductCardImage horizontal={horizontal}>
                <Image
                  layout="fill"
                  src={Default}
                  alt="product_image"
                  placeholder="blur"
                />
              </ProductCardImage>
            </Grid>
            <Grid item xs={9}>
              <ProductCardInfo>
                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Typography fontSize="30px" fontWeight={600}>
                      Даниел КИЗ
                    </Typography>
                    <Typography variant="subtitle2" color="primary">
                      SIYOSAT, FANTASTIKA
                    </Typography>
                  </Stack>
                  <Stack gap={1}>
                    <Rating
                      icon={<StarIcon color={COLORS.secondary} />}
                      emptyIcon={<StarWhiteIcon />}
                      defaultValue={4}
                    />
                    <Stack gap={2} alignItems="flex-end" direction="row">
                      <Typography variant="h5" fontWeight={600}>
                        4.0
                      </Typography>
                      <Typography variant="subtitle2" color={COLORS.disabled}>
                        235 Фикрлар
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Stack direction="row" alignItems="center" gap="2rem">
                    <ProductCharacteristics
                      name="Муаллиф"
                      value="Kevin Smiley"
                    />
                    <ProductCharacteristics
                      name="Нашриёт"
                      value="Printarea Studios"
                    />
                    <ProductCharacteristics name="Йил" value="2019" />
                  </Stack>
                  <Stack gap="21px" direction="row">
                    <HeadPhoneIcon />
                    <BookmarkIcon />
                  </Stack>
                </Stack>
              </ProductCardInfo>
            </Grid>
          </Grid>
        ) : (
          <>
            <ProductCardImage>
              <Image
                layout="fill"
                src={Default}
                alt="product_image"
                placeholder="blur"
              />
            </ProductCardImage>
            <Stack>
              <Typography variant="h6" fontWeight={700}>
                Product title
              </Typography>
              <Typography variant="subtitle2" color="primary" fontWeight={300}>
                Product Category
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Stack gap="0.75rem" direction="row">
                <StarIcon color={COLORS.secondary} />
                <Typography color="secondary" fontSize="18px" fontWeight={700}>
                  4.7
                </Typography>
              </Stack>
              <Stack gap="21px" direction="row">
                <HeadPhoneIcon />
                <BookmarkIcon />
              </Stack>
            </Stack>
          </>
        )}
      </ProductCardWrapper>
    </a>
  </Link>
);

export default ProductCard;
