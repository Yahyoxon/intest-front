
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react'
import { dehydrate, QueryClient } from 'react-query';

const ProductDetails = (props: any) => {
  console.log(props);
  return (
    <div>[slug]</div>
  )
}

const fetchPokemon = async (slug: string) => {
  const data = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}?_l=ru`)
  return JSON.parse(JSON.stringify([data]));
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products",
    () => fetchPokemon(slug)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { slug: "gnss-priemnik-south-s680-imu" } }],
  fallback: false
});


export default ProductDetails