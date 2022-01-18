import styled from 'styled-components';
import { Divider } from './Divider';
import { GradientText } from './GradientText';

const Hello = styled.h1`
  --tt-key: hero-message-hello;

  /* prettier-ignore */
  @keyframes hero-message-hello {
    0%, 20% { font-size: var(--font-size-6); }
    100% { font-size: var(--font-size-8); }
  }
`;

const Job = styled.span`
  color: var(--text1);
  margin-bottom: var(--size-4);
  --tt-key: hero-message-job;

  /* prettier-ignore */
  @keyframes hero-message-job {
    0%, 20% { font-size: var(--font-size-3); }
    100% { font-size: var(--font-size-4) }
  }
`;

const Bio = styled.p`
  margin-top: var(--size-4);
  margin-bottom: var(--size-7);
  letter-spacing: var(--font-letterspacing-2);
  max-width: 50ch;
  --tt-key: hero-message-bio;

  /* prettier-ignore */
  @keyframes hero-message-bio {
    0%, 20% { font-size: var(--font-size-1); }
    100% { font-size: var(--font-size-2); }
  }
`;

export const HeroMessage = () => (
  <>
    <GradientText>
      <Hello>Hi, I&apos;m Christian.</Hello>
    </GradientText>
    <Job>Full-Stack Web Developer</Job>
    <Divider />
    <Bio>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta cum
      assumenda, culpa aliquid porro corporis illo ut quod facere reprehenderit
      quo blanditiis debitis possimus ex labore sunt.
    </Bio>
  </>
);
