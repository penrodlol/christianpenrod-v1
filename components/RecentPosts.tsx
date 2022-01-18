import { postsSelector, postsState } from '@atoms/posts';
import { MAX, SIZE } from '@const/breakpoints';
import { Post } from '@interfaces/post';
import { supabase } from '@utils/supabase';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { PostCard } from './PostCard';

const Wrapper = styled.div`
  max-width: ${SIZE.XL};
  margin: 0 auto;
  --tt-key: recent-posts-wrapper-2;

  /* prettier-ignore */
  @keyframes recent-posts-wrapper-2 {
    0%, 40% { padding: var(--size-6) var(--size-3); }
    100% { padding: var(--size-8) var(--size-9); }
  }

  ${MAX.LG} {
    max-width: ${SIZE.XS};
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  --tt-key: recent-posts-inner-wrapper;

  /* prettier-ignore */
  @keyframes recent-posts-inner-wrapper {
    0%, 40% { gap: var(--size-8); }
    100% { gap: var(--size-7); }
  }

  ${MAX.LG} {
    grid-auto-flow: row;
    grid-template-columns: none;
  }
`;

const Title = styled.h3`
  margin-bottom: var(--size-7);
  color: var(--text2);
  --tt-key: recent-posts-title;

  @keyframes recent-posts-title {
    0%,
    40% {
      font-size: var(--font-size-4);
      margin-left: var(--size-3);
    }
    100% {
      font-size: var(--font-size-5);
      margin-left: var(--size-8);
    }
  }
`;

export const RecentPosts = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const { recents } = useRecoilValue(postsSelector);

  useEffect(() => {
    if (recents) return;

    supabase
      .from<Post>('posts')
      .select('*')
      .order('published', { ascending: false })
      .limit(3)
      .then(({ data }) => setPosts({ ...posts, recents: data }));
  }, [posts, setPosts, recents]);

  return (
    <Wrapper>
      <Title>Recent Posts</Title>
      <InnerWrapper>
        {recents?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};
