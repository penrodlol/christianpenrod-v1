import React, { createRef } from 'react';
import styled from 'styled-components';
import { ContactForm } from './ContactForm';
import { Divider } from './Divider';
import { GradientText } from './GradientText';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--md);
`;

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: max-content;
`;

const Slogan = styled.h2`
  --tt-key: welcome-slogan;

  /* prettier-ignore */
  @keyframes welcome-slogan {
    0%, 20% { font-size: 2.25em; }
    100% { font-size: 4em; }
  }
`;

const Position = styled.h3`
  color: var(--text-faded);
  margin-bottom: 1.25rem;
  --tt-key: welcome-position;

  /* prettier-ignore */
  @keyframes welcome-position {
    0%, 20% { font-size: 1.2em; }
    100% { font-size: 1.6em; }
  }
`;

const Bio = styled.p`
  max-width: 40ch;
  margin-top: 1.25rem;
  margin-bottom: 2.25rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  --tt-key: welcome-bio;

  /* prettier-ignore */
  @keyframes welcome-bio {
    0%, 20% { font-size: 1em; }
    100% { font-size: 1.25em; }
  }
`;

export const Welcome = () => {
  const welcomeTitleRef = createRef<HTMLHeadingElement>();
  return (
    <Wrapper>
      <InnerWrapper>
        <GradientText>
          <Slogan ref={welcomeTitleRef}>Hi, I&apos;m Christian.</Slogan>
        </GradientText>
        <Position>Full-Stack Web Developer</Position>
        <Divider />
        <Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta
          cum assumenda, culpa aliquid porro corporis illo ut quod facere
          reprehenderit quo blanditiis debitis possimus ex labore sunt.
        </Bio>
        <ContactForm />
      </InnerWrapper>
    </Wrapper>
  );
};
