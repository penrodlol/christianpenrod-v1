import { MIN } from '@const/breakpoints';
import { Post } from '@models/post';
import Calendar from '@svg/calendar.svg';
import Clock from '@svg/clock.svg';
import dayjs from 'dayjs';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  background: var(--surface-1);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
  display: grid;
  align-items: center;

  ${MIN.MD} {
    grid-auto-flow: column;
  }
`;

const Title = styled.h1`
  --tt-key: post-header-title;

  @keyframes post-header-title {
    0%,
    40% {
      font-size: var(--font-size-4);
      padding: var(--size-3) var(--size-5);
    }
    100% {
      font-size: var(--font-size-5);
      padding: var(--size-6) var(--size-8);
    }
  }
`;

const Stats = styled.div`
  --tt-key: post-header-stats;

  background: var(--surface-3);
  border-radius: var(--radius-2);
  display: grid;
  height: calc(100% - var(--size-2));
  margin-inline: var(--size-1);

  @keyframes post-header-stats {
    0%,
    40% {
      padding: var(--size-3) var(--size-5);
      font-size: var(--font-size-1);
      gap: var(--size-3);
    }
    100% {
      padding: var(--size-6) var(--size-7);
      font-size: var(--font-size-2);
      gap: var(--size-5);
    }
  }
`;

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-3);
`;

export interface PostHeaderProps {
  post: Post;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <Stats>
        <StatsItem>
          <Calendar width={25} height={25} />
          {dayjs.utc(post.published).format('MMM Do, YYYY')}
        </StatsItem>
        <StatsItem>
          <Clock width={25} height={25} /> {post.readtime} Minute Read
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};
