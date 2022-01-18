import { MIN } from '@const/breakpoints';
import { Post } from '@interfaces/post';
import ArrowRight from '@svg/arrow-right.svg';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Chip } from './Chip';
import { Divider } from './Divider';

const Wrapper = styled.a`
  background: var(--surface2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
  padding: var(--size-4);
  color: var(--text2);
  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: var(--shadow-5);
  }
`;

const Header = styled.div`
  ${MIN.LG} {
    height: var(--size-11);
  }
`;

const Published = styled.span`
  color: var(--text1);
  display: block;
`;

const TagsWrapper = styled.div`
  font-size: var(--font-size-0);
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-2);
  margin: var(--size-1) 0;
`;

const Title = styled.span`
  letter-spacing: var(--font-letterspacing-3);
  --tt-key: post-card-title;

  /* prettier-ignore */
  @keyframes post-card-title {
    0%, 60% { font-size: var(--font-size-2); }
    100% { font-size: var(--font-size-3); }
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  font-weight: var(--font-weight-5);
  line-height: var(--font-lineheight-4);
  padding: var(--size);
  min-height: var(--size-11);
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
