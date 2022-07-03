import React from 'react';
import { Footer } from 'layouts/footer';
import { Header } from 'layouts/header';

const Main: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Main;
