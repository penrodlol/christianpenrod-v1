import { postsSelector, postsState } from '@atoms/posts';
import { GridBackground } from '@components/GridBackground';
import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { PostCards } from '@components/PostCards';
import { PostsFilter } from '@components/PostsFilter';
import { MAX, SIZE } from '@const/breakpoints';
import { Post, Posts } from '@interfaces/post';
import { supabase } from '@utils/supabase';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

const PostsFilterWrapper = styled.section`
  max-width: ${SIZE.SM};
  margin: var(--size-7) auto;

  ${MAX.LG} {
    max-width: ${SIZE.XS};
  }
`;

const PostsWrapper = styled.section`
  border: solid var(--surface1);
  border-width: 0.1rem 0;
  position: relative;
  z-index: var(--layer-1);
`;

const PostsInnerWrapper = styled.div`
  max-width: ${SIZE.XL};
  margin: 0 auto;

  ${MAX.LG} {
    max-width: ${SIZE.XS};
  }
`;

const Blog: NextPage = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [postsFiltered, setPostsFiltered] = useState<Posts>();
  const { all } = useRecoilValue(postsSelector);

  useEffect(() => {
    if (all) return;

    supabase
      .from<Post>('posts')
      .select('*')
      .order('published', { ascending: false })
      .then(({ data }) => setPosts({ ...posts, all: data }));
  }, [posts, setPosts, all]);

  function handleFilter(filter: string | null) {
    if (!filter) {
      setPostsFiltered(all as Posts);
      return;
    }

    setPostsFiltered(
      all?.filter(
        ({ title, tags }) =>
          title.toLowerCase().includes(filter) ||
          tags.some((tag) => tag.toLowerCase().includes(filter)),
      ),
    );
  }

  return (
    <>
      <PageHead page="Blog" />
      <main>
        <PageTitle page="Blog" title="What has Christian wrote?" />
        <PostsFilterWrapper>
          <PostsFilter onFilter={handleFilter} />
        </PostsFilterWrapper>
        <PostsWrapper>
          <GridBackground>
            <PostsInnerWrapper>
              <PostCards posts={postsFiltered || all} />
            </PostsInnerWrapper>
          </GridBackground>
        </PostsWrapper>
      </main>
    </>
  );
};

export default Blog;
