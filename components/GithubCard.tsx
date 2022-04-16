import { GithubInfo } from '@models/github-info';
import GithubBookmark from '@svg/github-bookmark.svg';
import GithubFork from '@svg/github-fork.svg';
import GithubStar from '@svg/github-star.svg';
import { FC } from 'react';
import styled from 'styled-components';
import { Anchor } from './Anchor';

const Wrapper = styled.div`
  background: var(--surface-2);
  box-shadow: var(--shadow-3);
  border-radius: var(--radius-2);
  padding: var(--size-4);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-3);
`;

const Description = styled.p`
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-6);
  color: var(--text-2);
  margin-top: var(--size-2);
  margin-bottom: var(--size-3);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-3);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-6);
  color: var(--text-2);
`;

const Circle = styled.div`
  border-radius: 50%;
  width: var(--size-3);
  height: var(--size-3);
  background: var(--guava-2);
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-2);

  &:first-child {
    margin-right: var(--size-3);
  }
`;

export const GithubCard: FC<GithubInfo> = (props) => {
  return (
    <Wrapper>
      <Title>
        <GithubBookmark width={25} height={25} />
        <Anchor
          href={props.url}
          underline="hover"
          target="_blank"
          rel="nofollow noreferrer"
          aria-label="Navigate externally to the post's github."
        >
          {props.name}
        </Anchor>
      </Title>
      <Description>{props.description}</Description>
      <Stats>
        <Stat>
          <Circle />
          <span>{props.language}</span>
        </Stat>
        <Stat>
          <GithubStar width={20} height={20} />
          {props.stars}
        </Stat>
        <Stat>
          <GithubFork width={20} height={20} />
          {props.forks}
        </Stat>
      </Stats>
    </Wrapper>
  );
};
