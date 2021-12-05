import React, { createRef } from 'react';
import styled from 'styled-components';
import { GradientText } from './GradientText';

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: max-content;
`;

const WelcomeTitle = styled.h2`
  font-weight: bold;
  letter-spacing: 0.07em;
  --tt-key: welcome-title;

  /* prettier-ignore */
  @keyframes welcome-title {
    0% { font-size: var(--font-size-xs); }
    100% { font-size: var(--font-size-xl); }
  }
`;

const WelcomeDescription = styled.p`
  max-width: 40ch;
  margin-top: 20px;
  margin-bottom: 60px;
  --tt-key: welcome-description;

  @keyframes welcome-description {
    0%,
    15% {
      font-size: var(--font-size-xs);
      line-height: 1.75rem;
    }
    100% {
      font-size: var(--font-size-md);
      line-height: 2.8rem;
    }
  }
`;

export const Welcome = () => {
  const welcomeTitleRef = createRef<HTMLHeadingElement>();
  return (
    <Wrapper>
      <GradientText>
        <WelcomeTitle ref={welcomeTitleRef}>
          Hi, I&apos;m Christian.
        </WelcomeTitle>
      </GradientText>
      <WelcomeDescription>
        Full-Stack Web Developer from Pittsburgh, Pennsylvania. I specialize in
        developing performant/responsive websites.
      </WelcomeDescription>
    </Wrapper>
  );
};
