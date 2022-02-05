import { Media } from '@components/Media';
import { PageHead } from '@components/PageHead';
import { PostHeader } from '@components/PostHeader';
import { SpacerProps } from '@components/Spacer';
import { TableOfContents } from '@components/TableOfContents';
import { MIN, SIZE } from '@const/breakpoints';
import { Post, Slug } from '@interfaces/post';
import { supabase } from '@utils/supabase';
import { readFileSync } from 'fs';
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
import { join } from 'path';
import prism from 'remark-prism';
import styled, { css } from 'styled-components';

const Wrapper = styled.main<{ toc: boolean }>(({ toc }) => {
  const tocStyles = css`
    max-width: ${SIZE.LG};
    gap: var(--size-9);
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
  `;

  return css`
    position: relative;
    padding-inline: var(--size-5);
    padding-top: var(--size-7);

    ${MIN.LG} {
      ${toc && tocStyles}
    }
  `;
});

const ContentWrapper = styled.section`
  max-width: ${SIZE.SM};
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
      padding-block: var(--size-7);
      line-height: var(--font-lineheight-3);
    }
    100% {
      padding-block: var(--size-9);
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
  Spacer: dynamic<SpacerProps>(() => import('@components/Spacer').then((m) => m.Spacer)),
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
      <PageHead page="Blog" />
      {post && (
        <Wrapper toc={!!post.toc}>
          <ContentWrapper>
            <PostHeader post={post} />
            <Content>
              <MDXRemote {...post.source} components={components} />
            </Content>
          </ContentWrapper>
          {post.toc && post.headers && (
            <Media greaterThanOrEqual="lg">
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
    .from<Post>('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return { props: { post: undefined } };

  const path = join(process.cwd(), 'posts');
  const rawSource = readFileSync(join(path, `${slug}.mdx`), 'utf-8');
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
