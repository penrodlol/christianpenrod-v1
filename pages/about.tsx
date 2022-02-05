import { GridSurface } from '@components/GridSurface';
import { Media } from '@components/Media';
import { OccupationCard } from '@components/OccupationCard/OccupationCard';
import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { Profile } from '@components/Profile';
import { SectionTitle } from '@components/SectionTitle';
import { SIZE } from '@const/breakpoints';
import { Occupation, Occupations } from '@interfaces/occupation';
import { supabase } from '@utils/supabase';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styled from 'styled-components';

const ProfileWrapper = styled.section`
  max-width: ${SIZE.MD};
  margin: 0 auto;
  padding-inline: var(--size-5);
`;

const OccupationsWrapper = styled.section`
  max-width: ${SIZE.SM};
  margin: 0 auto;
  padding-inline: var(--size-4);
  padding-bottom: var(--size-10);
  --tt-key: occupations-wrapper;

  /* prettier-ignore */
  @keyframes occupations-wrapper {
    0%, 40% { margin-top: var(--size-7); }
    100% { margin-top: var(--size-10); }
  }
`;

const OccupationsInnerWrapper = styled.div`
  max-width: ${SIZE.XS};
  margin: 0 auto;
  display: grid;
  gap: var(--size-7);
`;

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  occupations,
}) => {
  return (
    <>
      <PageHead page="About" />
      <main>
        <Media greaterThanOrEqual="xs">
          <PageTitle page="About" title="Who is Christian?" />
        </Media>
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
        <GridSurface>
          <OccupationsWrapper>
            <SectionTitle>Experience</SectionTitle>
            <OccupationsInnerWrapper>
              {occupations?.map((occupation) => (
                <OccupationCard key={occupation.id} occupation={occupation} />
              ))}
            </OccupationsInnerWrapper>
          </OccupationsWrapper>
        </GridSurface>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  occupations: Occupations;
}> = async () => {
  const { data, error } = await supabase
    .from<Occupation>('occupations')
    .select('*, roles:occupation_roles(*)');

  const occupations = error || !data ? [] : data;

  return {
    props: { occupations },
  };
};

export default About;
