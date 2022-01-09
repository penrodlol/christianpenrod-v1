import { Post } from '@interfaces/post';
import dayjs from 'dayjs';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Svg } from './Svg';

const Header = styled.div(
  ({ theme }) => css`
    background: ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    display: grid;
    align-items: center;

    @media screen and (min-width: ${theme.breakpoint.sm}) {
      grid-auto-flow: column;
      gap: 1rem;
    }
  `,
);

const Title = styled.h1`
  font-size: 1.5em;
  --tt-key: blog-title;

  @keyframes blog-title {
    0%,
    40% {
      padding: 1rem 1.5rem;
    }
    100% {
      padding: 2.5rem 3rem;
    }
  }
`;

const Stats = styled.div(
  ({ theme }) => css`
    background: ${theme.background.light};
    border-radius: ${theme.rounded.base};
    padding: 2.5rem 2rem;
    margin: 0.2rem;
    display: grid;
    --tt-key: blog-stats;

    @keyframes blog-stats {
      0%,
      40% {
        padding: 1rem 1.5rem;
        font-size: 0.9em;
        gap: 1em;
      }
      100% {
        padding: 2.5rem 2rem;
        font-size: 1em;
        gap: 1.5em;
      }
    }
  `,
);

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export interface BlogPostHeaderProps {
  post: Post;
}

export const BlogPostHeader: FC<BlogPostHeaderProps> = ({ post }) => {
  return (
    <Header>
      <Title>{post.title}</Title>
      <Stats>
        <StatsItem>
          <Svg name="calendar" width={25} height={25} />{' '}
          {dayjs.utc(post.published).format('MMM Do, YYYY')}
        </StatsItem>
        <StatsItem>
          <Svg name="clock" width={25} height={25} /> {post.readTime} Minute
          Read
        </StatsItem>
      </Stats>
    </Header>
  );
};
