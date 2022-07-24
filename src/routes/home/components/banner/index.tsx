import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//  eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import BannerImage from 'assets/images/banner.jpg';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';
import { get } from 'lodash';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BannerWrapper, TextWrapper } from './banner.style';

SwiperCore.use([Navigation, Scrollbar]);

const Banner = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  //  eslint-disable-next-line
  const { data, isLoading, isFetching, isSuccess } = useQuery('banners', () =>
    getAllData('/banners?_l=ru')
  );
  return (
    <Swiper loop={false} effect="fade" spaceBetween={10} slidesPerView={1}>
      {isSuccess &&
        get(data, 'data').map((item: object) => (
          <SwiperSlide key={get(item, 'title').toString()}>
            <BannerWrapper {...{ isMobile }}>
              <Image
                src={get(item, 'file.thumbnails.normal.src', BannerImage)}
                alt="banner"
                layout="fill"
                // height={500}
                objectFit="cover"
              />
              <TextWrapper {...{ isMobile }}>
                <Typography
                  variant="h2"
                  fontSize="50px"
                  fontWeight={700}
                  color="#fff"
                  lineHeight="60px"
                  sx={{
                    [theme.breakpoints.down('md')]: {
                      fontSize: '30px',
                      lineHeight: '38px',
                    },
                  }}
                >
                  {get(item, 'title')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontSize="28px"
                  fontWeight={400}
                  color="#fff"
                  sx={{
                    [theme.breakpoints.down('md')]: { fontSize: '22px' },
                  }}
                >
                  {get(item, 'content')}
                </Typography>
                {get(item, 'link.length') > 0 && (
                  <Link href={get(item, 'link', '/')} passHref>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        width: isMobile ? 'inherit' : '30%',
                        padding: '20px 30px',
                      }}
                    >
                      {get(item, 'button_text')}
                    </Button>
                  </Link>
                )}
              </TextWrapper>
            </BannerWrapper>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Banner;
