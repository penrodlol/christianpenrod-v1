import { GridSurface } from '@components/GridSurface';
import { Hero } from '@components/Hero/Hero';
import { PageHead } from '@components/PageHead';
import { PostCards } from '@components/PostCards';
import { SectionTitle } from '@components/SectionTitle';
import { MAX } from '@const/breakpoints';
import { Post, Posts } from '@models/post';
import { supabase } from '@utils/supabase';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  --tt-key: hero-wrapper;

  max-width: var(--size-xl);
  margin: 0 auto;

  @keyframes hero-wrapper {
    0%,
    20% {
      padding: var(--size-4) var(--size-5);
      margin-bottom: 0;
    }
    100% {
      padding-top: var(--size-9);
      padding-left: var(--size-10);
      padding-right: var(--size-10);
      margin-bottom: var(--size-10);
    }
  }
`;

const RecentPostsWrapper = styled.div`
  max-width: var(--size-xl);
  margin: 0 auto;
  padding-bottom: var(--size-10);

  ${MAX.LG} {
    max-width: var(--size-content-3);
  }
`;

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <>
      <PageHead />
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <GridSurface>
        <RecentPostsWrapper>
          <SectionTitle>Recently Published</SectionTitle>
          <PostCards posts={posts} />
        </RecentPostsWrapper>
      </GridSurface>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Posts }> = async () => {
  const { data, error } = await supabase
    .from<Post>('posts')
    .select('*')
    .order('published', { ascending: false })
    .limit(3);

  const posts = error || !data ? [] : data;

  return {
    props: { posts },
  };
};

export default Home;
