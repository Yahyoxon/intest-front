import { Box, Typography } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import { get } from 'lodash';
import React from 'react';
import { useQuery } from 'react-query';
import { Iproduct } from 'routes/product-details/product.type';
import { getAllData } from 'services/get/all';
// eslint-disable-next-line
import { Swiper, SwiperSlide } from 'swiper/react';

const RelatedProducts: React.FC<Iproduct> = ({ product }) => {
  const { data, isLoading, isFetching, isSuccess } = useQuery('products', () =>
    getAllData(`/products/related/${get(product, 'id')}?include=file&_l=ru`)
  );
  console.log(get(data, 'data', []));

  return (
    <Box sx={{ margin: '50px 0 80px' }}>
      <Typography
        variant="h2"
        fontSize="38px"
        fontWeight={600}
        color="#183B56"
        lineHeight="52px"
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
        slidesPerView={4.5}
      >
        {get(data, 'data', []).map((item: any) => (
          <SwiperSlide key={get(item, 'id')}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default RelatedProducts;
