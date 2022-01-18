import { Role } from '@interfaces/occupation';
import { FC } from 'react';
import styled from 'styled-components';
import { formatFrom, formatTo } from './occupation-time-formatter';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-3);
  justify-content: start;
  --tt-key: occupation-card-node-wrapper;

  :not(:last-child) > :last-child {
    padding-bottom: var(--size-7);
  }

  /* prettier-ignore */
  @keyframes occupation-card-node-wrapper {
    0%, 40% { padding: 0; }
    100% { padding: 0 var(--size-3); }
  }
`;

const Dot = styled.div`
  background: var(--guava2);
  border-radius: 50%;
  height: 0.8rem;
  width: 0.8rem;
`;

const EndDot = styled(Dot)`
  background: none;
  border: solid 0.2rem var(--guava2);
`;

const Pipe = styled.div`
  background: var(--guava2);
  height: 100%;
  width: 0.2rem;
  margin: 0 auto;
  transform: translateY(-0.7rem);
`;

const Content = styled.div`
  transform: translateY(-0.35rem);
`;

const Title = styled.h4`
  color: var(--text2);
  --tt-key: occupation-card-node-title;

  /* prettier-ignore */
  @keyframes occupation-card-node-title {
    0%, 40% { font-size: var(--font-size-2); }
    100% { font-size: var(--font-size-3); }
  }
`;

const Time = styled.span`
  color: var(--text1);
  display: block;
  margin-bottom: var(--size-2);
  font-size: var(--font-size-1);
`;

const Description = styled.p`
  font-size: 0.8em;
  line-height: var(--font-lineheight-5);
`;

export interface OccupationCardNodesProps {
  roles: Array<Role>;
}

export const OccupationCardNodes: FC<OccupationCardNodesProps> = ({
  roles,
}) => (
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
          <Description>{role.description}</Description>
        </Content>
      </Wrapper>
    ))}
  </>
);
