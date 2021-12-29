import { Post } from '@interfaces/post';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Chip } from './Chip';
import { Divider } from './Divider';
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
  `,
);

const Header = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    height: 8rem;
  }
`;

const Published = styled.span`
  color: ${({ theme }) => theme.text.faded};
  display: block;
`;

const TagsWrapper = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.4rem;
  margin: 0.15rem 0;
`;

const Title = styled.span`
  letter-spacing: 0.15rem;
  --tt-key: recent-article-title;

  /* prettier-ignore */
  @keyframes recent-article-title {
    0%, 60% { font-size: 1em; }
    100% { font-size: 1.3em; }
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0.5rem;
  --tt-key: recent-article-description;

  /* prettier-ignore */
  @keyframes recent-article-description {
    0%, 50% { min-height: 6rem; }
    100% { min-height: 10rem; }
  }
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
  post: Post;
}

export const ArticleCard: FC<ArticleProps> = ({ post }) => {
  return (
    <NextLink
      href={`/blog/${post.path}`}
      passHref
      aria-label={`Navigate internally to blog post: ${post.data.title}`}
    >
      <Wrapper tabIndex={0}>
        <Header>
          <Published>
            {dayjs(post.data.publishedOn).format('YYYY-MM-DD')}
          </Published>
          <TagsWrapper>
            {post.data.tags?.map((tag) => (
              <Chip key={tag}>#{tag}</Chip>
            ))}
          </TagsWrapper>
          <Title>{post.data.title}</Title>
        </Header>
        <Divider />
        <Description>{post.data.description}</Description>
        <Footer>
          Read More
          <Svg name="arrow-right" width={25} />
        </Footer>
      </Wrapper>
    </NextLink>
  );
};
