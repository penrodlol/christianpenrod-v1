import { MIN } from '@const/breakpoints';
import { Post } from '@interfaces/post';
import Calendar from '@svg/calendar.svg';
import Clock from '@svg/clock.svg';
import dayjs from 'dayjs';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--surface3);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
  display: grid;
  align-items: center;

  ${MIN.SM} {
    grid-auto-flow: column;
    gap: var(--size-3);

    h1 {
      max-inline-size: var(--size-header-2) !important;
    }
  }
`;

const Title = styled.h1`
  color: var(--text2);
  font-size: var(--font-size-4);
  max-inline-size: var(--size-header-3);
  --tt-key: post-header-title;

  @keyframes post-header-title {
    0%,
    40% {
      padding-block: var(--size-3);
      padding-inline: var(--size-5);
    }
    100% {
      padding-block: var(--size-6);
      padding-inline: var(--size-8);
    }
  }
`;

const Stats = styled.div`
  background: var(--surface1);
  border-radius: var(--radius-2);
  margin: var(--size-1);
  display: grid;
  --tt-key: post-header-stats;

  @keyframes post-header-stats {
    0%,
    40% {
      padding-block: var(--size-3);
      padding-inline: var(--size-5);
      font-size: var(--font-size-1);
      gap: var(--size-3);
    }
    100% {
      padding-block: var(--size-6);
      padding-inline: var(--size-7);
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
