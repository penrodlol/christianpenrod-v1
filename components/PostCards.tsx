import { MAX } from '@const/breakpoints';
import { Posts } from '@interfaces/post';
import { FC } from 'react';
import styled from 'styled-components';
import { PostCard } from './PostCard';

const Wrapper = styled.div`
  padding-block: var(--size-8);
  margin: 0 auto;
  --tt-key: post-cards-wrapper-2;

  /* prettier-ignore */
  @keyframes post-cards-wrapper-2 {
    0%, 40% { padding-inline: var(--size-3); }
    100% { padding-inline: var(--size-9); }
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  --tt-key: post-cards-inner-wrapper;

  /* prettier-ignore */
  @keyframes post-cards-inner-wrapper {
    0%, 40% { gap: var(--size-8); }
    100% { gap: var(--size-7); }
  }

  ${MAX.LG} {
    grid-auto-flow: row;
    grid-template-columns: none;
  }
`;

export interface PostCardsProps {
  posts: Posts;
}

export const PostCards: FC<PostCardsProps> = ({ posts }) => (
  <Wrapper>
    <InnerWrapper>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </InnerWrapper>
  </Wrapper>
);
