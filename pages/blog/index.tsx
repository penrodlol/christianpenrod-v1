import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { PostCard } from '@components/PostCard';
import { PostsFilter } from '@components/PostsFilter';
import { Post, Posts } from '@interfaces/post';
import { generateGridBackground } from '@utils/generate-grid-background';
import { supabase } from '@utils/supabase';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const PageTitleWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 2.2rem auto;
`;

const PostCardsWrapper = styled.div(
  ({ theme }) => css`
    border: solid ${theme.background.heavy};
    ${generateGridBackground()};
    border-width: 0.1rem 0;
    --tt-key: post-cards-wrapper;

    @keyframes post-cards-wrapper {
      0%,
      40% {
        margin: 2rem 0;
        padding: 1.5rem 1.25rem 2.5rem 1.25rem;
      }
      100% {
        margin: 3rem 0;
        padding: 1.5rem 4rem 2.5rem 4rem;
      }
    }
  `,
);

const PostCardsInnerWrapper = styled.div(
  ({ theme }) => css`
    max-width: ${theme.breakpoint.lg};
    margin: 0 auto;

    @media screen and (max-width: ${theme.breakpoint.lg}) {
      max-width: ${theme.breakpoint.xs};
    }
  `,
);

const PostCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  --tt-key: post-cards-grid;

  @keyframes post-cards-grid {
    0%,
    40% {
      gap: 1.5rem;
    }
    100% {
      gap: 2rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-auto-flow: row;
    grid-template-columns: none;
  }
`;

const NoPosts = styled.div(
  ({ theme }) => css`
    background: ${theme.background.base};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    padding: 9.25rem 1.25rem;
    margin: 0 auto;
    text-align: center;
  `,
);

const NoHitsTitle = styled.h4`
  font-size: 1.5em;
`;

const NoHitsDescription = styled.p`
  color: ${({ theme }) => theme.text.faded};
  max-width: 30ch;
  margin: 0 auto;
  padding-top: 0.5rem;
`;

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const page = 'Blog';
  const [filteredPosts, setFilteredPosts] = useState<Posts | null>(posts);

  function filterPosts(filter: string | null) {
    if (!filteredPosts) return;

    if (!filter) {
      setFilteredPosts(posts);
      return;
    }

    setFilteredPosts(
      filteredPosts?.filter(
        ({ title, tags }) =>
          title.toLowerCase().includes(filter) ||
          tags.some((tag) => tag.toLowerCase().includes(filter)),
      ),
    );
  }

  return (
    <>
      <PageHead page={page} />
      <main>
        <PageTitleWrapper>
          <PageTitle page={page} title="What has Christian wrote?" />
        </PageTitleWrapper>
        <PostsFilter onFilter={filterPosts} />
        <PostCardsWrapper>
          <PostCardsInnerWrapper>
            <PostCardsGrid>
              {filteredPosts?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </PostCardsGrid>
            {!filteredPosts?.length && (
              <NoPosts>
                <NoHitsTitle>No Post(s) Found!</NoHitsTitle>
                <NoHitsDescription>
                  Try adjusting your filter to find what you&apos;re looking
                  for.
                </NoHitsDescription>
              </NoPosts>
            )}
          </PostCardsInnerWrapper>
        </PostCardsWrapper>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: Posts | null;
}> = async () => {
  const { data } = await supabase.from<Post>('posts').select('*');

  return { props: { posts: data } };
};

export default Blog;
