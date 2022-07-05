import { Stack, Typography } from '@mui/material';
import React from 'react';

const Title = () => (
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    paddingTop="70px"
  >
    <Typography
      variant="h1"
      width="750px"
      fontSize="56px"
      fontWeight={600}
      lineHeight="68px"
      color="#183B56"
      textAlign="center"
    >
      Каждая Покупка Будет Сделано с удовольствием
    </Typography>
    <Typography
      variant="subtitle1"
      width="850px"
      fontSize="20px"
      fontWeight={500}
      lineHeight="36px"
      textAlign="center"
      color="#5A7184"
      marginTop="20px"
    >
      Мы работаем с мировыми брендами и создали для вас приложение для
      совершения покупок,
    </Typography>
  </Stack>
);
export default Title;
