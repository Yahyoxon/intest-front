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

SwiperCore.use([Navigation, Scrollbar]);
const items = [
  'sds',
  'ds',
  'wew',
  'wwewew',
  'wwewew',
  'wew',
  'wwewew',
  'wwewew',
];
const Categories = () => {
  const { data, isLoading, isFetching, isSuccess } = useQuery('categories', () =>
    getAllData('/categories?_l=ru')
  );
  return (<>
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
        <Button>Посмотреть все</Button>
      </Stack>
    </Container>
    <Box>
      <Swiper loop={false} effect="fade" spaceBetween={50} slidesPerView={5.5}>
        {items.map((item, i) => (
          <SwiperSlide key={(item + i).toString()}>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              padding="40px 24px"
              margin="60px 0"
              sx={{
                backgorundColor: '#fff',
                borderRadius: '8px',
                height: '258px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)',
              }}
            >
              <Image src={catSvg} alt="" />
              <Typography
                variant="h4"
                marginTop="50px"
                color="#183B56"
                fontSize="22px"
                fontWeight={600}
              >
                Бетон
              </Typography>
              <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                marginTop="14px"
              >
                <Typography variant="body1" color="#5A7184">
                  128 товаров
                </Typography>
                <Link href={`/${item}`} passHref>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>
                    <ArrowIcon />
                  </a>
                </Link>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </>);
};

export default Categories;


