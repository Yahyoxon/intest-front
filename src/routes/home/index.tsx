import React from 'react';
import { Container } from '@mui/material';
import Banner from './components/banner';
import Title from './components/title';
import Categories from './components/categories';
import Products from './components/products';

const HomeRoute = () => (
  <>
    <Container maxWidth="xl">
      <Title />
      <Banner />
    </Container>
    <Categories />
    <Container maxWidth="xl">
      <Products />
    </Container>
  </>
);

export default HomeRoute;
