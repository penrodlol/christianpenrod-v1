import { ExternalLinkProps } from '@components/ExternalLink';
import { PageHead } from '@components/PageHead';
import { PostHeader } from '@components/PostHeader';
import { SpacerProps } from '@components/Spacer';
import { TableOfContents } from '@components/TableOfContents';
import { MAX, MIN, SIZE } from '@const/breakpoints';
import { Post, PostWithoutSource, Slug, Slugs } from '@interfaces/post';
import { getPostContent } from '@utils/get-post-content';
import { supabase } from '@utils/supabase';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';

const Wrapper = styled.main<{ hasToc: boolean }>(
  ({ hasToc }) => css`
    position: relative;
    padding-inline: var(--size-5);
    padding-top: var(--size-7);

    ${MIN.LG} {
      ${hasToc &&
      `
        max-width: ${SIZE.LG};
        margin: 0 auto;
        display: grid;
        grid-auto-flow: column;
      `}
    }
  `,
);

const ContentWrapper = styled.section`
  max-width: ${SIZE.SM};
  margin: 0 auto;
`;

const Content = styled.article`
  max-width: var(--size-content-3);
  max-inline-size: var(--size-content-3);
  margin: 0 auto;
  letter-spacing: var(--font-letterspacing-3);
  overflow-wrap: break-word;
  --tt-key: blog-content;

  p {
    max-inline-size: unset;
    max-width: unset;
    font-size: var(--font-size-1);
  }

  @keyframes blog-content {
    0%,
    40% {
      padding-block: var(--size-7);
      line-height: var(--font-lineheight-3);
    }
    100% {
      padding-block: var(--size-9);
      line-height: var(--font-lineheight-4);
    }
  }
`;

const TableOfContentsWrapper = styled.section`
  ${MAX.LG} {
    display: none;
  }
`;

// prettier-ignore
const components = {
  h2: dynamic<unknown>(() => import('@components/PostSectionHeader').then((m) => m.PostSectionHeader)),
  Spacer: dynamic<SpacerProps>(() => import('@components/Spacer').then((m) => m.Spacer)),
  FancyText: dynamic<unknown>(() => import('@components/FancyText').then((m) => m.FancyText)),
  Disclaimer: dynamic<unknown>(() => import('@components/Disclaimer').then((m) => m.Disclaimer)),
  ExternalLink: dynamic<ExternalLinkProps>(() => import('@components/ExternalLink').then((m) => m.ExternalLink)),
  Divider: dynamic<unknown>(() => import('@components/Divider').then((m) => m.Divider)),
  CodeSnippet: dynamic<unknown>(() => import('@components/CodeSnippet').then((m) => m.CodeSnippet)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <>
      <PageHead page="Blog" />
      {post && (
        <Wrapper hasToc={!!post.toc}>
          <ContentWrapper>
            <PostHeader post={post} />
            <Content>
              <MDXRemote {...post.source} components={components} />
            </Content>
          </ContentWrapper>
          {post.showToc && (
            <TableOfContentsWrapper>
              <TableOfContents toc={post.toc} />
            </TableOfContentsWrapper>
          )}
        </Wrapper>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await supabase.from<Slug>('posts').select('slug');

  return {
    paths: (data as Slugs).map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const { data } = await supabase
    .from<PostWithoutSource>('posts')
    .select('*, showToc:show_toc')
    .eq('slug', slug)
    .single();
  const { source, toc } = await getPostContent(slug, data?.showToc as boolean);

  return {
    props: {
      post: { ...data, source, toc } as Post,
    },
  };
};

export default Blog;
