import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { Posts } from '@interfaces/post';
import { getPostsSlugs } from '@utils/get-post-slugs';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import NextLink from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;
  padding: 2.2rem 1.5rem 0 1.5rem;
`;

const PageTitleWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
`;

const PostsWrapper = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
`;

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const page = 'Blog';

  return (
    <>
      <PageHead page={page} />
      <Wrapper>
        <PageTitleWrapper>
          <PageTitle page={page} title="What has Christian wrote?" />
        </PageTitleWrapper>
        <PostsWrapper>
          {posts.map((post) => (
            <NextLink
              key={post.data.id}
              href={`/blog/${post.path}`}
              aria-label={`Navigate internally to blog post: ${post.data.title}`}
            >
              {post.data.title}
            </NextLink>
          ))}
        </PostsWrapper>
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Posts }> = () => {
  return { props: { posts: getPostsSlugs() } };
};

export default Blog;
