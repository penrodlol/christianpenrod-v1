import { Post, Posts } from '@interfaces/post';
import { FC } from 'react';
import styled from 'styled-components';
import { PostCard } from './PostCard';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  --tt-key: recent-articles-inner-wrapper;

  /* prettier-ignore */
  @keyframes recent-articles-inner-wrapper {
    0%, 40% { gap: 1.5rem;}
    100% { gap: 2rem; }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-auto-flow: row;
    grid-template-columns: none;
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  --tt-key: recent-articles-title;

  @keyframes recent-articles-title {
    0%,
    40% {
      font-size: 1.4em;
      margin-left: 1rem;
    }
    100% {
      font-size: 1.7em;
      margin-left: 3rem;
    }
  }
`;

export interface RecentArticlesProps {
  posts: Posts | null;
}

export const RecentArticles: FC<RecentArticlesProps> = ({ posts }) => {
  return (
    <Wrapper>
      <Title>Recent Articles</Title>
      <InnerWrapper>
        {posts?.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};
