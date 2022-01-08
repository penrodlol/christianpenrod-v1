import { Occupations } from '@interfaces/occupation';
import { FC } from 'react';
import styled from 'styled-components';
import { OccupationCard } from './OccupationCard';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  --tt-key: career-wrapper;

  /* prettier-ignore */
  @keyframes career-wrapper {
    0%, 40% { padding: 0; }
    100% { padding: 1.5rem 0; }
  }
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  --tt-key: carrer-title;

  @keyframes carrer-title {
    0%,
    40% {
      font-size: 1.4em;
      margin-left: 1rem;
    }
    100% {
      font-size: 1.7em;
      margin-left: 3rem;
    }
  }
`;

const OccupationsWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xs};
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

export interface CarrerProps {
  occupations: Occupations | null;
}

export const Carrer: FC<CarrerProps> = ({ occupations }) => {
  return (
    <Wrapper>
      <Title>Career</Title>
      <pre></pre>
      <OccupationsWrapper>
        {occupations?.map((occupation) => (
          <OccupationCard key={occupation.id} occupation={occupation} />
        ))}
      </OccupationsWrapper>
    </Wrapper>
  );
};
