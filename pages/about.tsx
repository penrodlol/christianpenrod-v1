import { GridSurface } from '@components/GridSurface';
import { OccupationCard } from '@components/OccupationCard/OccupationCard';
import { PageTitle } from '@components/PageTitle';
import { Profile } from '@components/Profile';
import { SectionTitle } from '@components/SectionTitle';
import { MIN } from '@const/breakpoints';
import { Occupation, Occupations } from '@interfaces/occupation';
import { supabase } from '@utils/supabase';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import styled from 'styled-components';

const ProfileWrapper = styled.section`
  max-width: var(--size-lg);
  margin: 0 auto;
  padding-inline: var(--size-5);
`;

const OccupationsWrapper = styled.section`
  --tt-key: occupations-wrapper;

  max-width: var(--size-md);
  margin: 0 auto;
  padding-inline: var(--size-4);
  padding-bottom: var(--size-10);

  /* prettier-ignore */
  @keyframes occupations-wrapper {
    0%, 40% { margin-top: var(--size-7); }
    100% { margin-top: var(--size-10); }
  }
`;

const OccupationsInnerWrapper = styled.div`
  display: grid;
  gap: var(--size-7);

  ${MIN.XS} {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  occupations,
  selfie,
}) => {
  return (
    <>
      <PageTitle page="About" title="Who is Christian?" />
      <ProfileWrapper>
        <Profile selfie={selfie} />
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
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  occupations: Occupations;
  selfie: string;
}> = async () => {
  const { data, error } = await supabase
    .from<Occupation>('occupations')
    .select('*, roles:occupation_roles(*)');
  const careerBucket = supabase.storage.from('career');
  const miscBucket = supabase.storage.from('misc');

  const payload = error || !data ? [] : data;

  const occupations: Occupations = payload.map((occupation) => {
    const carrerBucketPayload = careerBucket.getPublicUrl(occupation.logo);
    return { ...occupation, logo: carrerBucketPayload?.publicURL as string };
  });

  const selfiePayload = miscBucket.getPublicUrl('public/selfie.webp');
  const selfie = selfiePayload.data?.publicURL || '';

  return {
    props: {
      occupations,
      selfie,
    },
  };
};

export default About;
