import Main from 'layouts/main';
import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getAllData } from 'services/get/all';
import { get } from 'lodash';
import axios from 'axios';

const HomeRoute: any = dynamic(() => import('routes/home'));

const Home: NextPage = (props: any) => {
  // const {data} = useQuery("products",() => getAllData("/products?_l=ru" ))
  console.log(props);
  return (
    <Main>
      <Head>
        <title>
          {get(props, 'dehydratedState.queries[0].state.data.data[0].name')}
        </title>
      </Head>
      <HomeRoute />
    </Main>
  );
};
export default Home;

const fetchPokemons = async () => {
  const { data } = await axios.get(
    'http://api.in-test.uz/public/api/v1/products?_l=ru'
  );
  return JSON.parse(JSON.stringify(data));
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('products', fetchPokemons);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking"
//   };
// };
