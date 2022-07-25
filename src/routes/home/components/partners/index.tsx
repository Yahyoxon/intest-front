import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { get } from 'lodash';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';
import defaultImage from 'assets/images/banner.jpg';
import { ImageWrapper, PartnersWrapper } from './index.type';

const Partners = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  //  eslint-disable-next-line
  const { data, isLoading, isFetching, isSuccess } = useQuery('partner', () =>
    getAllData('/partner?include=file&_l=ru')
  );

  return (
    <PartnersWrapper>
      <Typography
        variant="h2"
        fontSize={isMobile ? '28px' : '38px'}
        fontWeight={600}
        color="#183B56"
        lineHeight={isMobile ? '42px' : '52px'}
        textAlign="center"
      >
        Наши партнеры
      </Typography>

      <Typography
        variant="subtitle1"
        fontSize="18px"
        fontWeight={400}
        color="#5A7184"
        lineHeight="32px"
        textAlign="center"
        width={isMobile ? '100%' : '60%'}
        margin="24px auto"
      >
        EhyaSpace can be plugged to several services from owner to customer.
        Allowing you to shape it to your workflow.
      </Typography>
      <Stack
        direction="row"
        width="100%"
        flexWrap="wrap"
        rowGap={6}
        justifyContent="center"
        alignItems="center"
        marginTop="35px"
      >
        {isSuccess &&
          get(data, 'data').map((item: any) => (
            <ImageWrapper key={item.id.toString()} {...{ isMobile }}>
              <Image
                src={get(item, 'file.thumbnails.normal.src', defaultImage)}
                height={80}
                width={120}
                alt={get(item, 'name')}
              />
            </ImageWrapper>
          ))}
      </Stack>
    </PartnersWrapper>
  );
};

export default Partners;
