import { Article } from '@interfaces/article.interface';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';
import { Svg } from './Svg';

const Wrapper = styled.div`
  background: var(--background);
  border-radius: var(--rounded);
  height: 22rem;
  display: grid;
  grid-template-rows: auto 8rem auto;
  padding: 1.25rem;
  cursor: pointer;
`;

const Header = styled.div``;

const Published = styled.span`
  color: var(--text-faded);
`;

const Tag = styled.div`
  background: var(--secondary);
  font-size: 0.8em;
  font-weight: 600;
  width: max-content;
  color: black;
  padding: 0.3rem 0.8rem;
  margin: 0.3rem 0;
  border-radius: 12rem;
`;

const Title = styled.span`
  font-size: 1.3em;
  font-weight: 500;
  letter-spacing: 0.15rem;
`;

const Description = styled.p`
  font-size: 0.9em;
  line-height: 1.5rem;
  padding: 0.5rem 0.5rem;
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: end;
`;

export interface RecentArticleProps {
  article: Article;
}

export const RecentArticle: FC<RecentArticleProps> = ({ article }) => {
  return (
    <Link href="/" passHref>
      <Wrapper>
        <Header>
          <Published>{article.published}</Published>
          <Tag>#{article.tag}</Tag>
          <Title>{article.title}</Title>
          <Divider />
        </Header>
        <Description>{article.description}</Description>
        <Footer>
          Read More
          <Svg name="arrow-right" width={25} />
        </Footer>
      </Wrapper>
    </Link>
  );
};
