import { PageHead } from '@components/PageHead';
import { Svg } from '@components/Svg';
import { Post } from '@interfaces/post';
import { getPostSlug, getPostsSlugs } from '@utils/get-post-slugs';
import dayjs from 'dayjs';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import { ButtonProps } from '../../components/Button';

const Wrapper = styled.main`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  padding: 2.2rem 1.5rem 0 1.5rem;
`;

const Header = styled.div(
  ({ theme }) => css`
    background: ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    display: grid;
    align-items: center;

    @media screen and (min-width: ${theme.breakpoint.sm}) {
      grid-auto-flow: column;
      gap: 1rem;
    }
  `,
);

const Title = styled.h1`
  --tt-key: blog-title;

  @keyframes blog-title {
    0%,
    40% {
      padding: 1rem 1.5rem;
      font-size: 1.6em;
    }
    100% {
      padding: 2.5rem 3rem;
      font-size: 2em;
    }
  }
`;

const Stats = styled.div(
  ({ theme }) => css`
    background: ${theme.background.light};
    border-radius: ${theme.rounded.base};
    padding: 2.5rem 2rem;
    margin: 0.2rem;
    display: grid;
    --tt-key: blog-stats;

    @keyframes blog-stats {
      0%,
      40% {
        padding: 1rem 1.5rem;
        font-size: 0.9em;
        gap: 1em;
      }
      100% {
        padding: 2.5rem 2rem;
        font-size: 1em;
        gap: 1.5em;
      }
    }
  `,
);

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// prettier-ignore
const components = {
  Button: dynamic<ButtonProps>(() => import('@components/Button').then((m) => m.Button)),
};

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <>
      <PageHead page="Blog" />
      <Wrapper>
        <Header>
          <Title>{post.data.title}</Title>
          <Stats>
            <StatsItem>
              <Svg name="calendar" width={25} height={25} />{' '}
              {dayjs.utc(post.data.publishedOn).format('MMM Do, YYYY')}
            </StatsItem>
            <StatsItem>
              <Svg name="clock" width={25} height={25} /> {post.data.readTime}{' '}
              Minute Read
            </StatsItem>
          </Stats>
        </Header>
        <MDXRemote {...post.source} components={components} />
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
