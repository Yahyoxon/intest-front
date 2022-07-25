import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const ProductSkeleton = ({ isGrid }: { isGrid?: boolean }) => (
  <Stack direction={isGrid ? 'column' : 'row'}>
    <Skeleton
      variant="rectangular"
      width="100%"
      height={200}
      sx={{ borderRadius: '8px' }}
      animation="wave"
    />
    <Stack width="100%" padding={isGrid ? 0 : 4}>
      <Skeleton width="100%" height={30} />
      <Skeleton width="100%" height={30} />
      <Skeleton width="70%" />
    </Stack>
  </Stack>
);

export default ProductSkeleton;
