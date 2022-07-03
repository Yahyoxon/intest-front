import { Container } from '@mui/material';
import React from 'react';
import Search from './components/search';
import Title from './components/title';

const HomeRoute = () => (
  <Container maxWidth="xl">
    <Title />
    <Search />
  </Container>
);

export default HomeRoute;
