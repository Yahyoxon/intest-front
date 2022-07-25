import { Box, Typography } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import { get } from 'lodash';
import React from 'react';
import { useQuery } from 'react-query';
import { Iproduct } from 'routes/product-details/product.type';
import { getAllData } from 'services/get/all';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';

const RelatedProducts: React.FC<Iproduct> = ({ product, isMobile }) => {
  const { data, isFetching, isSuccess } = useQuery('products', () =>
    getAllData(`/products/related/${get(product, 'id')}?include=file&_l=ru`)
  );
  return (
    <Box sx={{ margin: '50px 0 80px' }}>
      {get(data, 'data.length') > 0 && (
        <>
          <Typography
            variant="h2"
            fontSize={isMobile ? '28px' : '38px'}
            fontWeight={600}
            color="#183B56"
            lineHeight={isMobile ? '42px' : '52px'}
            textAlign="left"
          >
            Похожие товары
          </Typography>
          <br />
          <Swiper
            loop={false}
            effect="fade"
            spaceBetween={30}
            style={{ padding: '10px', borderRadius: '5px' }}
            breakpoints={{
              300: {
                width: 300,
                slidesPerView: 1.3,
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
              <SwiperSlide key={get(item, 'id')}>
                <ProductCard product={item} {...{ isMobile }} />
              </SwiperSlide>
            ))}
          </Swiper>{' '}
        </>
      )}
    </Box>
  );
};

export default RelatedProducts;
