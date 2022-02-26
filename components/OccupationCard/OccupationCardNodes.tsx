import { Role } from '@interfaces/occupation';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import styled from 'styled-components';
import { formatFrom, formatTo } from './occupation-time-formatter';

const Wrapper = styled.div`
  --tt-key: occupation-card-node-wrapper;

  display: grid;
  grid-auto-flow: column;
  gap: var(--size-3);
  justify-content: start;

  :not(:last-child) > :last-child {
    padding-bottom: var(--size-7);
  }

  @keyframes occupation-card-node-wrapper {
    0%,
    40% {
      padding: 0;
    }
    100% {
      padding-left: var(--size-3);
      padding-right: var(--size-3);
    }
  }
`;

const Dot = styled.div`
  background: var(--guava-2);
  border-radius: 50%;
  height: 0.8rem;
  width: 0.8rem;
`;

const EndDot = styled(Dot)`
  background: none;
  border: solid 0.2rem var(--guava-2);
`;

const Pipe = styled.div`
  background: var(--guava-2);
  height: 100%;
  width: 0.2rem;
  margin: 0 auto;
  transform: translateY(-0.7rem);
`;

const Content = styled.div`
  transform: translateY(-0.45rem);
`;

const Title = styled.h4`
  color: var(--text-1);
  font-size: var(--font-size-3);
`;

const Time = styled.span`
  color: var(--text-2);
  display: block;
  margin-bottom: var(--size-2);
  font-size: var(--font-size-1);
`;

const Description = styled.div`
  font-size: var(--font-size-1);
  line-height: var(--font-lineheight-4);
  font-weight: var(--font-weight-6);
`;

// prettier-ignore
const components = {
  Spacer: dynamic<unknown>(() => import('@components/Spacer').then((m) => m.Spacer)),
};

export interface OccupationCardNodesProps {
  roles: Array<Role>;
}

export const OccupationCardNodes: FC<OccupationCardNodesProps> = ({
  roles,
}) => {
  return (
    <>
      {roles.map((role, index) => (
        <Wrapper key={role.id}>
          <div>
            {index === roles.length - 1 ? (
              <EndDot />
            ) : (
              <>
                <Dot />
                <Pipe />
              </>
            )}
          </div>
          <Content>
            <Title>{role.title}</Title>
            <Time>
              {formatFrom(role.from)} - {formatTo(role.to)}
            </Time>
            <Description>
              <MDXRemote {...role.description} components={components} />
            </Description>
          </Content>
        </Wrapper>
      ))}
    </>
  );
};
