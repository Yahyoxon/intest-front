import { Rating, RatingProps } from '@mui/material';
import StarWhiteIcon from 'components/icons/star-white.icon';
import StarIcon from 'components/icons/star.icon';
import { COLORS } from 'config/styles-config';
import React from 'react';

const CustomRating: React.FC<RatingProps> = (props) => (
  <Rating
    icon={<StarIcon color={COLORS.secondary} />}
    emptyIcon={<StarWhiteIcon />}
    {...props}
  />
);

export default CustomRating;
