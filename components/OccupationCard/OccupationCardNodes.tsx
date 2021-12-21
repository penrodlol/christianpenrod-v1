import { Role } from '@interfaces/occupation';
import { FC } from 'react';
import styled from 'styled-components';
import { formatFrom, formatTo } from './occupation-time-formatter';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: start;
  --tt-key: occupation-card-node-wrapper;

  :not(:last-child) > :last-child {
    padding-bottom: 2rem;
  }

  /* prettier-ignore */
  @keyframes occupation-card-node-wrapper {
    0%, 40% { padding: 0; }
    100% { padding: 0 1rem; }
  }
`;

const Dot = styled.div`
  background: ${({ theme }) => theme.tertiary.base};
  border-radius: 50%;
  height: 0.8rem;
  width: 0.8rem;
`;

const EndDot = styled(Dot)`
  background: none;
  border: solid 0.2rem ${({ theme }) => theme.tertiary.base};
`;

const Pipe = styled.div`
  background: ${({ theme }) => theme.tertiary.base};
  height: 100%;
  width: 0.2rem;
  margin: 0 auto;
  transform: translateY(-0.7rem);
`;

const Content = styled.div`
  transform: translateY(-0.45rem);
`;

const Title = styled.h4`
  --tt-key: occupation-card-node-title;

  /* prettier-ignore */
  @keyframes occupation-card-node-title {
    0%, 40% { font-size: 1em; }
    100% { font-size: 1.2em; }
  }
`;

const Time = styled.span`
  color: ${({ theme }) => theme.text.faded};
  display: block;
  margin-bottom: 0.5rem;
  --tt-key: occupation-card-node-time;

  /* prettier-ignore */
  @keyframes occupation-card-node-time {
    0%, 40% { font-size: 0.8em; }
    100% { font-size: 0.9em }
  }
`;

const Description = styled.p`
  font-size: 0.75em;
  line-height: 2em;
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
            {formatFrom(role.time.from)} - {formatTo(role.time.to)}
          </Time>
          <Description>{role.description}</Description>
        </Content>
      </Wrapper>
    ))}
  </>
);
