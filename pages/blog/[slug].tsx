import { Divider } from '@components/Divider';
import { Media } from '@components/Media';
import { PostHeader } from '@components/PostHeader';
import { PostsPaginator } from '@components/PostsPaginator';
import { TableOfContents } from '@components/TableOfContents';
import { MIN } from '@const/breakpoints';
import { Post, Slug } from '@interfaces/post';
import { supabase } from '@utils/supabase';
import matter from 'gray-matter';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import prism from 'remark-prism';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ toc: boolean }>(({ toc }) => {
  const tocStyles = css`
    max-width: var(--size-xl);
    gap: var(--size-2);
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
  `;

  return css`
    position: relative;
    padding-left: var(--size-5);
    padding-right: var(--size-5);

    ${MIN.XL} {
      ${toc && tocStyles}
    }
  `;
});

const ContentWrapper = styled.section`
  max-width: var(--size-md);
  margin: 0 auto;
`;

const Content = styled.article`
  --tt-key: blog-content;

  max-width: var(--size-content-3);
  margin: 0 auto;
  font-size: var(--font-size-2);
  overflow-wrap: break-word;

  @keyframes blog-content {
    0%,
    50% {
      padding-top: var(--size-7);
      padding-bottom: var(--size-7);
      line-height: var(--font-lineheight-3);
    }
    100% {
      padding-top: var(--size-9);
      padding-bottom: var(--size-9);
      line-height: var(--font-lineheight-4);
    }
  }
`;

const TableOfContentsWrapper = styled.aside`
  position: sticky;
  top: var(--size-11);
  max-width: max-content;
`;

// prettier-ignore
const components = {
  h2: dynamic<unknown>(() => import('@components/PostSectionHeader').then((m) => m.PostSectionHeader)),
  Spacer: dynamic<unknown>(() => import('@components/Spacer').then((m) => m.Spacer)),
  FancyText: dynamic<unknown>(() => import('@components/FancyText').then((m) => m.FancyText)),
  Disclaimer: dynamic<unknown>(() => import('@components/Disclaimer').then((m) => m.Disclaimer)),
  Anchor: dynamic<unknown>(() => import('@components/Anchor').then((m) => m.Anchor)),
  CodeSnippet: dynamic<unknown>(() => import('@components/CodeSnippet').then((m) => m.CodeSnippet)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <>
      {post && (
        <Wrapper toc={!!post.toc}>
          <ContentWrapper>
            <PostHeader post={post} />
            <Content>
              <MDXRemote {...post.source} components={components} />
              <Divider size={8} />
              <PostsPaginator
                prevPost={post.prevPost}
                nextPost={post.nextPost}
              />
            </Content>
          </ContentWrapper>
          {post.toc && post.headers && (
            <Media greaterThanOrEqual="sm">
              <TableOfContentsWrapper>
                <TableOfContents headers={post.headers} />
              </TableOfContentsWrapper>
            </Media>
          )}
        </Wrapper>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await supabase.from<Slug>('posts').select('slug');
  const slugs = error || !data ? [] : data;

  return {
    paths: slugs.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post | undefined;
}> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const { data, error } = await supabase
    .rpc<Post>('get_post')
    .eq('slug', slug)
    .select('*, prevPost:prev_post, nextPost:next_post')
    .single();

  if (error || !data) return { props: { post: undefined } };

  const mdxBlob = await supabase.storage
    .from('posts')
    .download(`public/${data.slug}.mdx`);

  if (mdxBlob.error || !mdxBlob.data) return { props: { post: undefined } };

  const rawSource = await mdxBlob.data.text();
  const { content } = matter(rawSource);

  const source = await serialize(content, {
    mdxOptions: { remarkPlugins: [prism] },
  });

  const pattern = /^###*\s/;
  let headers = !data.toc
    ? []
    : [
        'Introduction',
        ...rawSource
          .split('\n')
          .filter((line) => line.match(pattern))
          .map((line) => line.replace(pattern, '')),
      ];

  return {
    props: {
      post: { ...data, source, headers },
    },
  };
};

export default Blog;
