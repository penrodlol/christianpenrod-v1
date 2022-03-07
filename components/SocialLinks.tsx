import { GITHUB, LINKEDIN, TWITTER } from '@const/socials';
import Github from '@svg/github.svg';
import LinkedIn from '@svg/linkedin.svg';
import RSS from '@svg/rss.svg';
import Twitter from '@svg/twitter.svg';
import { FC } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  gap: var(--size-8);
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--text-1);
  }
`;

export interface SocialLinksProps {
  showRss?: boolean;
}

export const SocialLinks: FC<SocialLinksProps> = ({ showRss }) => (
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
    {showRss && (
      <Button
        asIcon
        aria-label="Show RSS feed for page."
        onClick={() => window.open('/rss.xml', '_blank')}
      >
        <RSS height={30} width={30} />
      </Button>
    )}
  </Wrapper>
);
