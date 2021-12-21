import { PageHead } from '@components/PageHead';
import { RecentArticles } from '@components/RecentArticles';
import { Welcome } from '@components/Welcome';
import { Articles } from '@interfaces/article';
import { ARTICLES } from '@stubs/articles.stub';
import { generateGridBackground } from '@utils/generate-grid-background';
import dayjs from 'dayjs';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styled, { css } from 'styled-components';

const Wrapper = styled.main`
  --tt-key: home-wrapper;

  /* prettier-ignore */
  @keyframes home-wrapper {
    0%, 30% { padding-top: 1rem; }
    100% { padding-top: 2.5rem; }
  }
`;

const WelcomeWrapper = styled.section`
  padding: 0 1.75rem;
`;

const RecentArticlesWrapper = styled.section(
  ({ theme }) =>
    css`
      background: ${theme.background.light};
      border: solid ${theme.background.heavy};
      ${generateGridBackground(theme)};
      border-width: 0.1rem 0;
      position: relative;
      z-index: 1;
      --tt-key: profile-wrapper;

      @keyframes profile-wrapper {
        0%,
        40% {
          margin-top: 2rem;
          padding: 1.75rem 1rem;
        }
        100% {
          margin-top: 5rem;
          padding: 3rem 4rem;
        }
      }
    `,
);

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <>
      <PageHead />
      <Wrapper>
        <WelcomeWrapper>
          <Welcome />
        </WelcomeWrapper>
        <RecentArticlesWrapper>
          <RecentArticles articles={articles} />
        </RecentArticlesWrapper>
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ articles: Articles }> =
  async () => {
    const articles = [...ARTICLES]
      .sort((a, b) => (dayjs(a.published) < dayjs(b.published) ? 1 : -1))
      .filter((_, index) => index <= 2);

    return { props: { articles } };
  };

export default Home;
