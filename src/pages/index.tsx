import Main from 'layouts/main';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { dehydrate, QueryClient, useQuery } from 'react-query';
// import { getAllData } from 'services/get/all';
// import { get } from 'lodash';

const HomeRoute: any = dynamic(() => import('routes/home'));

const Home: NextPage = () => {
  // const data = get(props, 'dehydratedState.queries[0].state.data');
  console.log("first")
  return (
    <Main>
      <Head>
        <title>dwqdqwdwq</title>
      </Head>
      <HomeRoute />
    </Main>
  );
};
export default Home;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery('products', () =>
//     getAllData('/products?_l=ru')
//   );
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
