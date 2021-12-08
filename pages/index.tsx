import { Header } from '@components/Header/Header';
import { RecentArticles } from '@components/RecentArticles';
import { Welcome } from '@components/Welcome';
import { Articles } from '@interfaces/article.interface';
import { ARTICLES } from '@stubs/articles.stub';
import dayjs from 'dayjs';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const Content = styled.div`
  padding-top: 2.5rem;
  min-width: 15.625rem;
  overflow-x: hidden;
`;

const WelcomeWrapper = styled.section`
  padding: 0 1.75rem;
`;

const RecentArticlesWrapper = styled.section`
  background: var(--background-light);
  border: solid var(--background-heavy);
  border-width: 0.1rem 0;
  --tt-key: recent-articles-wrapper;

  @keyframes recent-articles-wrapper {
    0%,
    55% {
      margin-top: 3rem;
      padding: 2rem 1.75rem;
    }
    100% {
      margin-top: 8rem;
      padding: 5rem 1.75rem;
    }
  }
`;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <>
      <Head>
        <title>Christian Penrod</title>
        <meta name="description" content="Christian Penrod Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
        <Content>
          <WelcomeWrapper>
            <Welcome />
          </WelcomeWrapper>
          <RecentArticlesWrapper>
            <RecentArticles articles={articles} />
          </RecentArticlesWrapper>
        </Content>
      </main>
    </>
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
