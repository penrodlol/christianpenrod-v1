import { Contact } from '@components/Contact';
import { Divider } from '@components/Divider';
import { MAX } from '@const/breakpoints';
import styled from 'styled-components';

const Hello = styled.h1`
  --_hero-hello-font-size: 4.5em;
  --tt-key: hero-hello;

  /* prettier-ignore */
  @keyframes hero-hello {
    0%, 20% { font-size: var(--font-size-6); }
    100% { font-size: var(--_hero-hello-font-size); }
  }
`;

const Job = styled.span`
  color: var(--text-2);
  margin-bottom: var(--size-4);
  --tt-key: hero-job;

  /* prettier-ignore */
  @keyframes hero-job {
    0%, 20% { font-size: var(--font-size-3); }
    100% { font-size: var(--font-size-5) }
  }
`;

const Bio = styled.p`
  font-weight: var(--font-weight-6);
  margin-top: var(--size-4);
  margin-bottom: var(--size-7);
  max-width: var(--size-content-2);
  line-height: var(--font-lineheight-3);
  --tt-key: hero-bio;

  /* prettier-ignore */
  @keyframes hero-bio {
    0%, 20% { font-size: var(--font-size-1); }
    100% { font-size: var(--font-size-3); }
  }
`;

const ContactWrapper = styled.div`
  ${MAX.MD} {
    button {
      width: 100%;
    }
  }
`;

export const HeroMessage = () => (
  <div>
    <Hello>Hi, I&apos;m Christian.</Hello>
    <Job>Full-Stack Web Developer</Job>
    <Divider />
    <Bio>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta cum
      assumenda, culpa aliquid porro corporis illo ut quod facere reprehenderit
      quo blanditiis debitis possimus ex labore sunt.
    </Bio>
    <ContactWrapper>
      <Contact />
    </ContactWrapper>
  </div>
);
