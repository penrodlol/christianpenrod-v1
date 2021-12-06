import { Articles } from '@interfaces/article.interface';
import Atropos from 'atropos/react';
import { FC } from 'react';
import styled from 'styled-components';
import { RecentArticle } from './RecentArticle';

const Wrapper = styled.div`
  max-width: var(--xl);
  margin: 0 auto;
  display: grid;
  gap: 5rem;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  .atropos {
    height: 20.25rem;
  }
`;

export interface RecentArticlesProps {
  articles: Articles;
}

export const RecentArticles: FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Wrapper>
      {articles.map((article) => (
        <Atropos key={article.id}>
          <RecentArticle article={article} />
        </Atropos>
      ))}
    </Wrapper>
  );
};
