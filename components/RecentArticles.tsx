import { Articles } from '@interfaces/article.interface';
import { FC } from 'react';
import styled from 'styled-components';
import { RecentArticle } from './RecentArticle';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  --tt-key: recent-articles-inner-wrapper;

  /* prettier-ignore */
  @keyframes recent-articles-inner-wrapper {
    0%, 40% { gap: 1.5rem;}
    100% { gap: 2rem; }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-auto-flow: row;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  // margin-left: 3rem;
  --tt-key: recent-articles-title;

  /* prettier-ignore */
  @keyframes recent-articles-title {
    0%, 40% { font-size: 1.4em; margin-left: 1rem; }
    100% { font-size: 1.7em; margin-left: 3rem; }
  }
`;

export interface RecentArticlesProps {
  articles: Articles;
}

export const RecentArticles: FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Wrapper>
      <Title>Recent Articles</Title>
      <InnerWrapper>
        {articles.map((article) => (
          <RecentArticle key={article.id} article={article} />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};
