import { BlogPostHeader } from '@components/BlogPostHeader';
import { DividerProps } from '@components/Divider';
import { ExternalLinkProps } from '@components/ExternalLink';
import { PageHead } from '@components/PageHead';
import { SpacerProps } from '@components/Spacer';
import { TableOfContents } from '@components/TableOfContents';
import { Data, Post } from '@interfaces/post';
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

const Wrapper = styled.main<{ data: Data }>(
  ({ theme, data }) => css`
    position: relative;
    padding: 2.2rem 1.5rem 0 1.5rem;
    gap: 5rem;

    ${data.toc &&
    `
      @media screen and (min-width: ${theme.breakpoint.lg}) {
        max-width: calc(${theme.breakpoint.lg} - 5em);
        margin: 0 auto;
        display: grid;
        grid-auto-flow: column;
      }
    `}
  `,
);

const InnerWrapper = styled.article`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
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

const TableOfContentsWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;

// prettier-ignore
const components = {
  h2: dynamic<unknown>(() => import('@components/BlogPostSectionHeader').then((m) => m.BlogPostSectionHeader)),
  Spacer: dynamic<SpacerProps>(() => import('@components/Spacer').then((m) => m.Spacer)),
  FancyText: dynamic<unknown>(() => import('@components/FancyText').then((m) => m.FancyText)),
  Disclaimer: dynamic<unknown>(() => import('@components/Disclaimer').then((m) => m.Disclaimer)),
  ExternalLink: dynamic<ExternalLinkProps>(() => import('@components/ExternalLink').then((m) => m.ExternalLink)),
  Divider: dynamic<DividerProps>(() => import('@components/Divider').then((m) => m.Divider)),
  CodeSnippet: dynamic<unknown>(() => import('@components/CodeSnippet').then((m) => m.CodeSnippet)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <>
      <PageHead page="Blog" />
      <Wrapper data={post.data}>
        <InnerWrapper>
          <BlogPostHeader data={post.data} />
          <BlogPostContent>
            <MDXRemote {...post.source} components={components} />
          </BlogPostContent>
        </InnerWrapper>
        {post.data.toc && (
          <TableOfContentsWrapper>
            <TableOfContents toc={post.data.toc} />
          </TableOfContentsWrapper>
        )}
      </Wrapper>

      <FooterBackground />
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
