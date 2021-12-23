import { BlogPostHeader } from '@components/BlogPostHeader';
import { PageHead } from '@components/PageHead';
import { SpacerProps } from '@components/Spacer';
import { Post } from '@interfaces/post';
import { getPostSlug, getPostsSlugs } from '@utils/get-post-slugs';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import styled, { createGlobalStyle, css } from 'styled-components';

const FooterBackground = createGlobalStyle(
  ({ theme }) => css`
    footer {
      background: ${theme.background.light};

      > :first-child {
        padding-top: 1rem;
      }
    }
  `,
);

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  padding: 2.2rem 1.5rem 0 1.5rem;
`;

const BlogPostContent = styled.div`
  max-width: 60ch;
  margin: 0 auto;
  letter-spacing: 0.1em;
  --tt-key: blog-post-content;

  @keyframes blog-post-content {
    0%,
    40% {
      font-size: 0.9em;
      line-height: 1.75rem;
      padding: 2rem 0;
    }
    100% {
      font-size: 1.125rem;
      line-height: 2rem;
      padding: 4rem 0;
    }
  }
`;

// prettier-ignore
const components = {
  Spacer: dynamic<SpacerProps>(() => import('@components/Spacer').then((m) => m.Spacer)),
  FancyText: dynamic<unknown>(() => import('@components/FancyText').then((m) => m.FancyText)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <>
      <PageHead page="Blog" />
      <FooterBackground />
      <Wrapper>
        <BlogPostHeader data={post.data} />
        <BlogPostContent>
          <MDXRemote {...post.source} components={components} />
        </BlogPostContent>
      </Wrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostsSlugs().map(({ path }) => ({ params: { slug: path } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = async (ctx) => {
  return {
    props: { post: (await getPostSlug(ctx.params?.slug as string)) as Post },
  };
};

export default Blog;
