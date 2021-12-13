import { Article } from '@interfaces/article.interface';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';
import { Svg } from './Svg';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.background.base};
  border-radius: ${({ theme }) => theme.rounded.base};
  box-shadow: ${({ theme }) => theme.shadow.base};
  padding: 1.25rem;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;

const Published = styled.span`
  color: ${({ theme }) => theme.text.faded};
  display: block;
`;

const Tag = styled.div`
  background: ${({ theme }) => theme.secondary.base};
  font-size: 0.8em;
  font-weight: 600;
  width: max-content;
  color: black;
  padding: 0.3rem 0.8rem;
  margin: 0.3rem 0;
  border-radius: 12rem;
`;

const Title = styled.span`
  font-weight: 500;
  letter-spacing: 0.15rem;
  --tt-key: recent-article-title;

  /* prettier-ignore */
  @keyframes recent-article-title {
    0%, 40% { font-size: 1em; }
    100% { font-size: 1.3em; }
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  line-height: 1.5rem;
  min-height: 6rem;
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
      <Wrapper tabIndex={0}>
        <div>
          <Published>{article.published}</Published>
          <Tag>#{article.tag}</Tag>
          <Title>{article.title}</Title>
          <Divider />
        </div>
        <Description>{article.description}</Description>
        <Footer>
          Read More
          <Svg name="arrow-right" width={25} />
        </Footer>
      </Wrapper>
    </Link>
  );
};
