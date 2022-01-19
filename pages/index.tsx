import { postsSelector, postsState } from '@atoms/posts';
import { GridBackground } from '@components/GridBackground';
import { Hero } from '@components/Hero';
import { PageHead } from '@components/PageHead';
import { PostCards } from '@components/PostCards';
import { MAX, SIZE } from '@const/breakpoints';
import { Post } from '@interfaces/post';
import { supabase } from '@utils/supabase';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  position: relative;
  max-width: calc(${SIZE.XL} + var(--size-13));
  margin: 0 auto;
  padding-left: var(--size-6);
  padding-right: var(--size-6);
  overflow: hidden;
  --tt-key: hero-wrapper;

  @keyframes hero-wrapper {
    0%,
    30% {
      padding-top: var(--size-7);
      padding-bottom: var(--size-7);
    }
    100% {
      padding-top: var(--size-8);
      padding-bottom: var(--size-10);
    }
  }
`;

const RecentPostsWrapper = styled.section`
  border: solid var(--surface1);
  border-width: 0.1rem 0;
  position: relative;
  z-index: var(--layer-1);
`;

const RecentPostsInnerWrapper = styled.div`
  max-width: ${SIZE.XL};
  margin: 0 auto;

  ${MAX.LG} {
    max-width: ${SIZE.XS};
  }
`;

const RecentPostsTitle = styled.h3`
  padding-top: var(--size-7);
  color: var(--text2);
  --tt-key: post-cards-title;

  @keyframes post-cards-title {
    0%,
    40% {
      font-size: var(--font-size-4);
      margin-left: var(--size-5);
    }
    100% {
      font-size: var(--font-size-5);
      margin-left: var(--size-10);
    }
  }
`;

const Home: NextPage = () => {
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
    <>
      <PageHead />
      <main>
        <HeroWrapper>
          <Hero />
        </HeroWrapper>
        <RecentPostsWrapper>
          <GridBackground>
            <RecentPostsInnerWrapper>
              <RecentPostsTitle>Recent Posts</RecentPostsTitle>
              <PostCards posts={recents} />
            </RecentPostsInnerWrapper>
          </GridBackground>
        </RecentPostsWrapper>
      </main>
    </>
  );
};

export default Home;
