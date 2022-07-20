import React from 'react';
import { Container } from '@mui/material';
import Banner from './components/banner';
import Title from './components/title';
import Categories from './components/categories';
import Products from './components/products';
import Partners from './components/partners';
import BePartner from './components/bePartner';
import Search from './components/search';

const HomeRoute = () => (
  <>
    <Container maxWidth="xl">
      <Title />
      <Search />
      <Banner />
    </Container>
    <Categories />
    <Container maxWidth="xl">
      <Products title="Популярная товары" />
      <Partners />
    </Container>
    <BePartner />
  </>
);

export default HomeRoute;
