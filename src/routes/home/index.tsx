import { Container } from '@mui/material';
import React from 'react';
import Banner from './components/banner';
import Title from './components/title';

const HomeRoute = () => (
  <Container maxWidth="xl">
    <Title />
    <Banner />
  </Container>
);

export default HomeRoute;
