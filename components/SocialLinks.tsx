import { MAX } from '@const/breakpoints';
import { GITHUB, LINKEDIN, TWITTER } from '@const/socials';
import Github from '@svg/github.svg';
import LinkedIn from '@svg/linkedin.svg';
import Twitter from '@svg/twitter.svg';
import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  gap: var(--size-8);

  svg {
    fill: var(--text-1);
  }

  ${MAX.LG} {
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const SocialLinks = () => (
  <Wrapper>
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
  </Wrapper>
);
