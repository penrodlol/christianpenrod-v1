import { Divider } from '@components/Divider';
import { GithubCard } from '@components/GithubCard';
import { HitCounter } from '@components/HitCounter';
import { Media } from '@components/Media';
import { PageHead } from '@components/PageHead';
import { PostHeader } from '@components/PostHeader';
import { PostsPaginator } from '@components/PostsPaginator';
import { TableOfContents } from '@components/TableOfContents';
import { MIN } from '@const/breakpoints';
import { GithubInfo } from '@models/github-info';
import { Post, Slug } from '@models/post';
import { fetchInfo } from '@utils/octokit';
import { supabase } from '@utils/supabase';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import readingTime from 'reading-time';
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

const GithubCardWrapper = styled.div`
  margin: var(--size-8) 0;
`;

const HitCounterWrapper = styled.div`
  margin-top: var(--size-7);
  display: flex;
  justify-content: end;
`;

const TableOfContentsWrapper = styled.aside`
  position: sticky;
  top: var(--size-11);
  max-width: max-content;
`;

const HiddenIntroductionLink = styled.a`
  position: absolute;
  top: calc(var(--size-9) * -1);
`;

// prettier-ignore
const components = {
  h2: dynamic<unknown>(() => import('@components/PostSectionHeader').then((m) => m.PostSectionHeader)),
  Spacer: dynamic<unknown>(() => import('@components/Spacer').then((m) => m.Spacer)),
  FancyText: dynamic<unknown>(() => import('@components/FancyText').then((m) => m.FancyText)),
  Disclaimer: dynamic<unknown>(() => import('@components/Disclaimer').then((m) => m.Disclaimer)),
  Anchor: dynamic<unknown>(() => import('@components/Anchor').then((m) => m.Anchor)),
  CodeSnippet: dynamic<unknown>(() => import('@components/CodeSnippet').then((m) => m.CodeSnippet)),
  Tabs: dynamic<any>(() => import('@components/Tabs').then((m) => m.Tabs)),
  Tab: dynamic<any>(() => import('@components/Tabs').then((m) => m.Tab)),
  Checkbox: dynamic<any>(() => import('@components/Checkbox').then((m) => m.Checkbox)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const [hits, setHits] = useState<number | null>();
  const [githubInfo, setGithubInfo] = useState<GithubInfo | null>();

  useEffect(() => {
    if (!post) return;

    supabase
      .rpc<number>('update_post_hits', { target: post.id })
      .single()
      .then(({ data }) => setHits(data));

    if (!post.github) return;

    fetchInfo(post.github).then((info) => setGithubInfo(info));
  }, [post]);

  return (
    <>
      <PageHead
        page={post?.title}
        title={post?.title}
        description={post?.description}
      />
      {post && (
        <Wrapper toc={!!post.toc}>
          <ContentWrapper>
            <PostHeader post={post} />
            <Content>
              <MDXRemote {...post.source} components={components} />
              {githubInfo && (
                <GithubCardWrapper>
                  <GithubCard {...githubInfo} />
                </GithubCardWrapper>
              )}
              {hits && (
                <HitCounterWrapper>
                  <HitCounter count={hits} />
                </HitCounterWrapper>
              )}
              <Divider size={8} />
              <PostsPaginator
                prevPost={post.prevPost}
                nextPost={post.nextPost}
              />
            </Content>
          </ContentWrapper>
          {post.toc && post.headers && (
            <Media greaterThanOrEqual="xl">
              <TableOfContentsWrapper>
                <TableOfContents headers={post.headers} />
              </TableOfContentsWrapper>
            </Media>
          )}
          <HiddenIntroductionLink
            id="introduction"
            href="#introduction"
            aria-hidden
            tabIndex={-1}
          />
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
    .rpc<Post>('get_post', { target: slug })
    .select('*, prevPost:prev_post, nextPost:next_post')
    .single();

  if (error || !data) return { props: { post: undefined } };

  const mdxBlob = await supabase.storage
    .from('posts')
    .download(`public/${data.slug}.mdx`);

  if (mdxBlob.error || !mdxBlob.data) return { props: { post: undefined } };

  const rawSource = await mdxBlob.data.text();

  const source = await serialize(rawSource, {
    mdxOptions: { remarkPlugins: [prism] },
  });

  const readtime = Math.round(readingTime(rawSource).minutes);

  const pattern = /^###*\s/;
  const headers = !data.toc
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
      post: { ...data, source, headers, readtime },
    },
  };
};

export default Blog;
