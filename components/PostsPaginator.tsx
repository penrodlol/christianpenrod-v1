import { PaginatedPost } from '@models/post';
import ArrowLeft from '@svg/arrow-left.svg';
import ArrowRight from '@svg/arrow-right.svg';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: var(--size-3);
  justify-content: space-between;
`;

const Item = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: var(--text-2);

  &#next-post {
    text-align: right;
    margin-left: auto;
    align-items: end;
  }

  &:hover {
    color: var(--text-1);
  }
`;

const Direction = styled.span`
  color: var(--guava-2);
  display: flex;
  gap: var(--size-2);
  max-width: max-content;
`;

const PostTitle = styled.strong`
  font-size: var(--size-4);
`;

export interface PostsPaginatorProps {
  prevPost: PaginatedPost;
  nextPost: PaginatedPost;
}

export const PostsPaginator: FC<PostsPaginatorProps> = ({
  prevPost,
  nextPost,
}) => {
  return (
    <Wrapper>
      {prevPost && (
        <Link href={prevPost ? `/blog/${prevPost.slug}` : '/blog'} passHref>
          <Item aria-label={`Go to previous post: ${prevPost.title}`}>
            <Direction>
              <ArrowLeft width={30} height={30} />
              Prev
            </Direction>
            <PostTitle>{prevPost?.title}</PostTitle>
          </Item>
        </Link>
      )}
      {nextPost && (
        <Link href={nextPost ? `/blog/${nextPost.slug}` : '/blog'} passHref>
          <Item
            id="next-post"
            aria-label={`Go to next post: ${nextPost.title}`}
          >
            <Direction>
              Next
              <ArrowRight width={30} height={30} />
            </Direction>
            <PostTitle>{nextPost?.title}</PostTitle>
          </Item>
        </Link>
      )}
    </Wrapper>
  );
};
