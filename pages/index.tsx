import { Header } from '@components/Header/Header';
import { Welcome } from '@components/Welcome';
import { Articles } from '@interfaces/article.interface';
import { ARTICLES } from '@stubs/articles.stub';
import dayjs from 'dayjs';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const HomeContent = styled.div`
  padding: 0 1.75rem;
  padding-top: 2.5rem;
  min-width: 15.625rem;
`;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <div>
      <Head>
        <title>Christian Penrod</title>
        <meta name="description" content="Christian Penrod Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
        <HomeContent>
          <Welcome />
          {/* <RecentArticles articles={articles} /> */}
        </HomeContent>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ articles: Articles }> =
  async () => {
    const articles = ARTICLES.sort((a, b) =>
      dayjs(a.published) < dayjs(b.published) ? 1 : -1,
    ).filter((_, index) => index <= 2);

    return { props: { articles } };
  };

export default Home;
