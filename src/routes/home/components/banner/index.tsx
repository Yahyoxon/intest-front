import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BannerImage from 'assets/images/banner.jpg';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';
import { get } from 'lodash';
import { Button, Typography } from '@mui/material';
import { BannerWrapper, TextWrapper } from './banner.style';

const Banner = () => {
  const { data, isLoading, isFetching, isSuccess } = useQuery('banners', () =>
    getAllData('/banners?_l=ru')
  );
  return (
    <BannerWrapper>
      <Image
        src={get(data, 'data[6].file.thumbnails.normal.src', BannerImage)}
        alt="banner"
        layout="fill"
        height={500}
        objectFit="cover"
      />
      <TextWrapper>
        <Typography
          variant="h2"
          fontSize="50px"
          fontWeight={700}
          color="#fff"
          lineHeight="60px"
        >
          {get(data, 'data[6].title')}
        </Typography>
        <Typography
          variant="subtitle1"
          fontSize="28px"
          fontWeight={400}
          color="#fff"
        >
          {get(data, 'data[6].content')}
        </Typography>
        <Link href={get(data, 'data[6].link', '/')}>
          <Button
            variant="contained"
            size="large"
            sx={{ width: 'inherit', padding: '20px 30px' }}
          >
            {get(data, 'data[6].button_text')}
          </Button>
        </Link>
      </TextWrapper>
    </BannerWrapper>
  );
};

export default Banner;
