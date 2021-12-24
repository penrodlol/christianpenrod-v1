import { Carrer } from '@components/Career';
import { PageHead } from '@components/PageHead';
import { PageTitle } from '@components/PageTitle';
import { generateGridBackground } from '@utils/generate-grid-background';
import type { NextPage } from 'next';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const Wrapper = styled.main``;

const Profile = styled.div(
  ({ theme }) => css`
    max-width: ${theme.breakpoint.sm};
    margin: 0 auto;
    padding: 2.2rem 1.5rem 0 1.5rem;
  `,
);

const ProfileContent = styled.div(
  ({ theme }) => css`
    display: grid;
    gap: 2rem;
    margin-top: 2rem;

    > :first-child {
      text-align: center;
    }

    @media screen and (min-width: ${theme.breakpoint.sm}) {
      grid-auto-flow: column;
      grid-template-columns: 40% 1fr;
      gap: 4rem;
    }
  `,
);

const SelfieWrapper = styled.div(
  ({ theme }) => css`
    display: block;

    > :first-child {
      border: solid 0.2rem ${theme.primary.base} !important;
      box-shadow: ${theme.shadow.base};
      border-radius: 20%;

      img {
        filter: sepia(80%) !important;
      }
    }
  `,
);

const Name = styled.span`
  display: block;
  font-size: 1.3em;
`;

const Position = styled.span`
  color: ${({ theme }) => theme.text.faded};
  display: block;
`;

const Bio = styled.p`
  font-size: 0.9em;
  line-height: 1.8em;
  max-width: 50ch;
  margin: 0 auto;
`;

const CareerWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.background.light};
    border: solid ${theme.background.heavy};
    ${generateGridBackground()};
    border-width: 0.1rem 0;
    --tt-key: profile-carrer;

    @keyframes profile-carrer {
      0%,
      40% {
        margin-top: 2rem;
        padding: 1.5rem 1.3rem;
      }
      100% {
        margin-top: 5rem;
        padding: 2.2rem 1.5rem;
      }
    }
  `,
);

const About: NextPage = () => {
  const page = 'About';

  return (
    <>
      <PageHead page={page} />
      <Wrapper>
        <Profile>
          <PageTitle page={page} title="Who is Christian?" />
          <ProfileContent>
            <div>
              <SelfieWrapper>
                <Image
                  src="/img/me.webp"
                  alt="Selfie"
                  placeholder="blur"
                  blurDataURL="/img/me.webp"
                  priority
                  layout="intrinsic"
                  height={400}
                  width={300}
                  quality={100}
                />
              </SelfieWrapper>
              <Name>Christian Penrod</Name>
              <Position>Full-Stack Web Developer</Position>
            </div>
            <div>
              <Bio>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                soluta cum assumenda, culpa aliquid porro corporis illo ut quod
                facere reprehenderit quo blanditiis debitis possimus ex labore
                sunt.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                eos reiciendis, sint, vitae distinctio accusantium, quisquam
                aspernatur dolorum quas hic aliquid eveniet.
                <br />
                <br />
                Ipsa soluta cum assumenda, culpa aliquid porro corporis illo ut
                quod facere reprehenderit quo blanditiis debitis, quisquam
                aspernatur dolorum quas hic aliquid eveniet.
              </Bio>
            </div>
          </ProfileContent>
        </Profile>
        <CareerWrapper>
          <Carrer />
        </CareerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
