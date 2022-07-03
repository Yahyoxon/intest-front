import { Typography } from '@mui/material';
import React from 'react';
import Placeholder from 'assets/png/placeholder.png';
import Image from 'next/image';
import { CategoryCardWrapper, CategoryTitle } from './category-card.styles';

const CategoryCard = () => (
  <CategoryCardWrapper>
    <Image src={Placeholder} alt="categoryimage" layout="fill" />
    <CategoryTitle>
      <Typography
        fontWeight={600}
        color="white"
        variant="subtitle1"
        fontSize="18px"
      >
        Жахон адабиёти
      </Typography>
    </CategoryTitle>
  </CategoryCardWrapper>
);

export default CategoryCard;
