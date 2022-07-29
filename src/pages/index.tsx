import Main from 'layouts/main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { dehydrate, QueryClient, useQuery } from 'react-query';
// import { getAllData } from 'services/get/all';
// import { get } from 'lodash';

const HomeRoute: any = dynamic(() => import('routes/home'));

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <Head>
        <title>{t('title')}</title>
      </Head>
      <HomeRoute />
    </Main>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});

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
