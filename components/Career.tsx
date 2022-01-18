import { occupationsState } from '@atoms/occupations';
import { SIZE } from '@const/breakpoints';
import { Occupation } from '@interfaces/occupation';
import { supabase } from '@utils/supabase';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { OccupationCard } from './OccupationCard/OccupationCard';

const Wrapper = styled.div`
  max-width: ${SIZE.SM};
  margin: 0 auto;
  padding: var(--size-5) 0;
`;

const Title = styled.h3`
  margin-bottom: var(--size-3);
  color: var(--text2);
  font-size: var(--font-size-5);
  --tt-key: carrer-title;

  /* prettier-ignore */
  @keyframes carrer-title {
    0%, 40% { margin-left: var(--size-3); }
    100% { margin-left: var(--size-8); }
  }
`;

const OccupationsWrapper = styled.div`
  max-width: ${SIZE.XS};
  margin: 0 auto;
  display: grid;
  gap: var(--size-7);
  padding
`;

export const Career = () => {
  const [occupations, setOccupations] = useRecoilState(occupationsState);

  useEffect(() => {
    if (occupations) return;

    supabase
      .from<Occupation>('occupations')
      .select('*, roles:occupation_roles(*)')
      .then(({ data }) => setOccupations(data));
  }, [setOccupations, occupations]);

  return (
    <Wrapper>
      <Title>Career</Title>
      <OccupationsWrapper>
        {occupations?.map((occupation) => (
          <OccupationCard key={occupation.id} occupation={occupation} />
        ))}
      </OccupationsWrapper>
    </Wrapper>
  );
};
