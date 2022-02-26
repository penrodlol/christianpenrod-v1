import { GridSurface } from '@components/GridSurface';
import { PageTitle } from '@components/PageTitle';
import { PostCards } from '@components/PostCards';
import { PostsFilter } from '@components/PostsFilter';
import { MAX } from '@const/breakpoints';
import { Post, Posts } from '@interfaces/post';
import { supabase } from '@utils/supabase';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

const PostsFilterWrapper = styled.section`
  max-width: var(--size-md);
  margin: var(--size-7) auto;

  ${MAX.SM} {
    max-width: var(--size-content-3);
  }

  ${MAX.XS} {
    position: sticky;
    top: var(--size-9);
  }
`;

const PostCardsWrapper = styled.div`
  --tt-key: blog-post-cards-wrapper;

  max-width: var(--size-xl);
  margin: 0 auto;

  @keyframes blog-post-cards-wrapper {
    0%,
    40% {
      padding-top: var(--size-7);
      padding-bottom: var(--size-7);
    }
    100% {
      padding-top: var(--size-9);
      padding-bottom: var(--size-9);
    }
  }
`;

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const [filteredPosts, setFilteredPosts] = useState<Posts>();

  function handleFilter(filter: string | null) {
    if (!filter) {
      setFilteredPosts(undefined);
      return;
    }

    setFilteredPosts(
      posts.filter(
        ({ title, tags }) =>
          title.toLowerCase().includes(filter) ||
          tags.some((tag) => tag.toLowerCase().includes(filter)),
      ),
    );
  }

  return (
    <>
      <PageTitle page="Blog" title="What has Christian wrote?" />
      <PostsFilterWrapper>
        <PostsFilter onFilter={handleFilter} />
      </PostsFilterWrapper>
      <section>
        <GridSurface>
          <PostCardsWrapper>
            <PostCards posts={filteredPosts || posts} />
          </PostCardsWrapper>
        </GridSurface>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Posts }> = async () => {
  const { data, error } = await supabase
    .from<Post>('posts')
    .select('*')
    .order('published', { ascending: false });

  const posts = error || !data ? [] : data;

  return {
    props: { posts },
  };
};

export default Blog;
