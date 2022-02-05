import { MAX, MIN } from '@const/breakpoints';
import { Post } from '@interfaces/post';
import ArrowRight from '@svg/arrow-right.svg';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Chip } from './Chip';
import { Divider } from './Divider';

const Wrapper = styled.a`
  background: var(--surface-3);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
  padding: var(--size-4);
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-5);
  }
`;

const Header = styled.div`
  ${MIN.MD} {
    height: var(--size-11);
  }
`;

const Published = styled.span`
  color: var(--text-2);
  display: block;
`;

const TagsWrapper = styled.div`
  font-size: var(--font-size-0);
  display: flex;
  gap: var(--size-2);
  margin: var(--size-1) 0;
  overflow-x: auto;
  overflow-y: hidden;

  ${MAX.MD} {
    flex-wrap: wrap;
  }
`;

const Title = styled.span`
  --tt-key: post-card-title;

  /* prettier-ignore */
  @keyframes post-card-title {
    0%, 60% { font-size: var(--font-size-3); }
    100% { font-size: var(--font-size-4); }
  }
`;

const Description = styled.p`
  font-size: var(--font-size-1);
  line-height: var(--font-lineheight-4);
  height: var(--size-11);
  overflow: auto;

  ${MAX.MD} {
    height: auto;
    min-height: var(--size-11);
  }
`;

const Footer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-2);
  align-items: center;
  justify-content: end;
  align-self: end;
  margin-top: var(--size-3);
`;

export interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => (
  <NextLink
    href={`/blog/${post.slug}`}
    passHref
    aria-label={`Navigate internally to blog post: ${post.title}`}
  >
    <Wrapper tabIndex={0}>
      <Header>
        <Published>{dayjs(post.published).format('YYYY-MM-DD')}</Published>
        <TagsWrapper>
          {post.tags?.map((tag) => (
            <Chip key={tag}>#{tag}</Chip>
          ))}
        </TagsWrapper>
        <Title>{post.title}</Title>
      </Header>
      <Divider />
      <Description>{post.description}</Description>
      <Footer>
        Read More
        <ArrowRight width={25} height={25} />
      </Footer>
    </Wrapper>
  </NextLink>
);
