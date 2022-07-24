import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import ProductDetailsRoute from 'routes/product-details';
import { get } from 'lodash';
import Main from '../../layouts/main';

const ProductDetails = (props: any) => {
  const data = get(props, 'dehydratedState.queries[0].state.data');
  return (
    <Main>
      <Head>
        <title>{get(data, 'name')}</title>
      </Head>
      <ProductDetailsRoute
        state={get(props, 'dehydratedState.queries[0].state')}
      />
    </Main>
  );
};
const items = [
  { slug: 'elektronnyi-taxeometr-south-n3' },
  { slug: '2' },
  { slug: '3' },
];
const getSingleProduct = async (slug: string) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}?include=file,categories,document&_l=ru`
  );
  return JSON.parse(JSON.stringify(data));
};
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products?_l=ru`
  );
  const paths = items.map((item: { slug: string }) => ({
    params: { slug: get(item, 'slug', '') },
  }));
  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('products', () => getSingleProduct(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ProductDetails;
