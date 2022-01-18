import { MAX, MIN } from '@const/breakpoints';
import { GITHUB, LINKEDIN, TWITTER } from '@const/socials';
import Github from '@svg/github.svg';
import LinkedIn from '@svg/linkedin.svg';
import Twitter from '@svg/twitter.svg';
import styled from 'styled-components';
import { Button } from './Button';
import { Contact } from './Contact';

const Wrapper = styled.div`
  display: grid;
  gap: var(--size-7);

  ${MIN.SM} {
    grid-auto-flow: column;
    gap: var(--size-8);
    align-items: center;
    width: max-content;

    > :first-child {
      width: var(--size-12);
    }
  }
`;

const Socials = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-8);
  align-items: center;
  margin: 0 auto;

  ${MAX.SM} {
    gap: 0;
    width: 80%;
    justify-content: space-between;
  }
`;

export const HeroActions = () => (
  <Wrapper>
    <Contact />
    <Socials>
      <Button
        asIcon
        aria-label="Navigate externally to my twitter."
        onClick={() => window.open(TWITTER, '_blank')}
      >
        <Twitter height={30} width={30} />
      </Button>
      <Button
        asIcon
        aria-label="Navigate externally to my github."
        onClick={() => window.open(GITHUB, '_blank')}
      >
        <Github height={30} width={30} />
      </Button>
      <Button
        asIcon
        aria-label="Navigate externally to my linkedin."
        onClick={() => window.open(LINKEDIN, '_blank')}
      >
        <LinkedIn height={30} width={30} />
      </Button>
    </Socials>
  </Wrapper>
);
