import { MAX, SIZE } from '@const/breakpoints';
import { Posts } from '@interfaces/post';
import ArrowRight from '@svg/arrow-right.svg';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Card } from './Card';

const Wrapper = styled.div`
  --tt-key: post-cards-wrapper;

  /* prettier-ignore */
  @keyframes post-cards-wrapper {
    0%, 40% { padding-inline: var(--size-5); }
    100% { padding-inline: var(--size-9); }
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--size-8);

  ${MAX.MD} {
    grid-auto-flow: row;
    grid-template-columns: none;
    max-width: ${SIZE.XS};
    margin: 0 auto;
  }
`;

const CardAnchor = styled.a`
  > :first-child {
    height: 100%;
  }
`;

export interface PostCardsProps {
  posts: Posts | null;
}

export const PostCards: FC<PostCardsProps> = ({ posts }) => (
  <Wrapper>
    <InnerWrapper>
      {posts?.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          passHref
          aria-label={`Navigate internally to blog post: ${post.title}`}
        >
          <CardAnchor>
            <Card
              title={post.title}
              subheader={dayjs(post.published).format('YYYY-MM-DD')}
              tags={post.tags}
              description={post.description}
              actions={[
                <Button key={post.id} color="basic">
                  Read More
                  <ArrowRight width={25} height={25} />
                </Button>,
              ]}
            />
          </CardAnchor>
        </Link>
      ))}
    </InnerWrapper>
  </Wrapper>
);
