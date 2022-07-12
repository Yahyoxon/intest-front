import React from 'react';
import { Container } from '@mui/material';
import Banner from './components/banner';
import Title from './components/title';
import Categories from './components/categories';
import Products from './components/products';
import Partners from './components/partners';
import BePartner from './components/bePartner';

const HomeRoute = () => (
  <>
    <Container maxWidth="xl">
      <Title />
      <Banner />
    </Container>
    <Categories />
    <Container maxWidth="xl">
      <Products title="Популярная товары"/>
      <Partners/>
    </Container>
    <BePartner/>
  </>
);

export default HomeRoute;
