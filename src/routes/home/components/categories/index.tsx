import { Container, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
//  eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import catSvg from 'assets/images/svg/cat.svg';
import Image from 'next/image';
import ArrowIcon from 'components/icons/arrow.icon';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';
import { get } from 'lodash';
import { Paths } from 'config/site-paths';

SwiperCore.use([Navigation, Scrollbar]);

const Categories = () => {
  const { data, isLoading, isFetching, isSuccess } = useQuery(
    'categories',
    () => getAllData('/categories?include=file&_l=ru')
  );

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingTop: '52px' }}>
        <Typography
          variant="h1"
          fontSize="38px"
          fontWeight={600}
          color="#183B56"
          lineHeight="52px"
        >
          Популярная категория
        </Typography>
        <Stack direction="row" justifyContent="space-between" marginTop="10px">
          <Typography variant="subtitle1" fontSize="18px" fontWeight={400}>
            Покупай умнее, живи веселее!
          </Typography>
        </Stack>
      </Container>
      <Box>
        <Swiper
          loop={false}
          effect="fade"
          spaceBetween={50}
          // slidesPerView={5.5}
          breakpoints={{
            300: {
              width: 400,
              slidesPerView: 1.5,
            },
            400: {
              width: 400,
              slidesPerView: 1.5,
            },
            640: {
              width: 640,
              slidesPerView: 2.5,
            },
            1024: {
              width: 1024,
              slidesPerView: 3.5,
            },
            1400: {
              width: 1400,
              slidesPerView: 4.5,
            },
          }}
        >
          {get(data, 'data', []).map((item: any) => (
            <SwiperSlide key={item.id}>
              <Link href={`${Paths.FILTER}?${item.id}`} passHref>
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  padding="40px 24px"
                  margin="60px 0"
                  sx={{
                    backgorundColor: '#fff',
                    borderRadius: '8px',
                    height: '200px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <Image
                    src={get(item, 'file.thumbnails.normal.src')}
                    alt={get(item, 'name_ru')}
                    width={120}
                    height={100}
                    layout="intrinsic"
                  />
                  <Stack
                    width="100%"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <Typography
                      variant="h4"
                      color="#183B56"
                      fontSize="18px"
                      width="80%"
                      fontWeight={600}
                      lineHeight="28px"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {get(item, 'name_ru')}
                    </Typography>

                    <ArrowIcon />
                  </Stack>
                </Stack>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Categories;
