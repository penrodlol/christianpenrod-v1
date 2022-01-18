import { Career } from '@components/Career';
import { GridBackground } from '@components/GridBackground';
import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { Profile } from '@components/Profile';
import { SIZE } from '@const/breakpoints';
import type { NextPage } from 'next';
import styled from 'styled-components';

const ProfileWrapper = styled.section`
  max-width: ${SIZE.SM};
  margin: 0 auto;
  padding-inline: var(--size-5);
  padding-top var(--size-8);
`;

const CareerWrapper = styled.section`
  border: solid var(--surface1);
  border-width: 0.1rem 0;
  padding-inline: var(--size-4);
  padding-bottom: var(--size-6);
  --tt-key: career-wrapper;

  /* prettier-ignore */
  @keyframes career-wrapper {
    0%, 40% { margin-top: var(--size-7); }
    100% { margin-top: var(--size-10); }
  }
`;

const About: NextPage = () => {
  return (
    <>
      <PageHead page="About" />
      <main>
        <PageTitle page="About" title="Who is Christian?" />
        <ProfileWrapper>
          <Profile />
        </ProfileWrapper>
        <GridBackground>
          <CareerWrapper>
            <Career />
          </CareerWrapper>
        </GridBackground>
      </main>
    </>
  );
};

export default About;
