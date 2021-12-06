import { Article } from '@interfaces/article.interface';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';
import { Svg } from './Svg';

const Wrapper = styled.div`
  height: 20.25rem;
  background: var(--text-8);
  border-radius: var(--rounded-1);
  padding: 1.25rem;
  cursor: pointer;
`;

const Header = styled.div`
  height: 5rem;
`;

const Published = styled.span`
  font-size: 0.85em;
  color: var(--text-3);
  display: block;
`;

const Title = styled.h3`
  font-size: var(--font-size-sm);
  display: block;
`;

const Description = styled.p`
  height: 8rem;
`;

const Footer = styled.div`
  height: 4rem;
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: end;
  padding: 0 1rem;
`;

const ReadMore = styled.button`
  background: transparent;
  border: none;
  color: var(--secondary-8);
  font-weight: bold;
  cursor: pointer;
`;

export interface RecentArticleProps {
  article: Article;
}

export const RecentArticle: FC<RecentArticleProps> = ({ article }) => {
  return (
    <Wrapper>
      <Header>
        <Published>{article.published}</Published>
        <Title>{article.title}</Title>
      </Header>
      <Divider />
      <Description>
        Are you working with GraphQL and want to manage your local state? If so,
        please join me as I show how to approach local state with Apollo Angular
        and NgRx ComponentStore.
      </Description>
      <Footer>
        <ReadMore>Read More</ReadMore>
        <Svg name="arrow-right" width="1.7rem" fill="var(--secondary-8)" />
      </Footer>
    </Wrapper>
  );
};
