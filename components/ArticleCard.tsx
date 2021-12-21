import { Article } from '@interfaces/article';
import Link from 'next/link';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Chip } from './Chip';
import { Divider } from './Divider';
import { LineClamp } from './LineClamp';
import { Svg } from './Svg';

const Wrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.background.base};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    padding: 1.25rem;
    cursor: pointer;

    &:hover {
      box-shadow: ${theme.shadow.hover};
    }

    @media screen and (min-width: ${theme.breakpoint.md}) {
      display: grid;
      grid-template-rows: 10rem 1fr 3rem;
      height: 25rem;
    }

    @media screen and (min-width: ${theme.breakpoint.lg}) {
      height: 22.25rem;
      display: grid;
      grid-template-rows: 9rem 1fr 3rem;
    }
  `,
);

const Published = styled.span`
  color: ${({ theme }) => theme.text.faded};
  display: block;
`;

const Title = styled.span`
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
  font-weight: 500;
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
  align-self: end;
`;

export interface ArticleProps {
  article: Article;
}

export const ArticleCard: FC<ArticleProps> = ({ article }) => {
  return (
    <Link href="/" passHref>
      <Wrapper tabIndex={0}>
        <div>
          <Published>{article.published}</Published>
          <Chip>#{article.tag}</Chip>
          <LineClamp maxLines={2}>
            <Title>{article.title}</Title>
          </LineClamp>
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
