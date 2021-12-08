import { Articles } from '@interfaces/article.interface';
import Atropos from 'atropos/react';
import { FC } from 'react';
import styled from 'styled-components';
import { RecentArticle } from './RecentArticle';

const Wrapper = styled.div`
  max-width: var(--xl);
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 2em;
  margin-bottom: 1.4rem;
  margin-left: 1rem;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 5rem;
  justify-content: center;

  @media screen and (max-width: 80em) {
    max-width: var(--md);
    grid-template-columns: repeat(1, minmax(0, 95%));
  }

  @media screen and (max-width: 48em) {
    gap: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .atropos {
    height: 22rem;

    &,
    &-scale,
    &-rotate,
    &-inner {
      border-radius: var(--rounded);
    }

    &:not(:hover) {
      box-shadow: var(--shadow);
    }
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
          <Atropos key={article.id}>
            <RecentArticle article={article} />
          </Atropos>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};
