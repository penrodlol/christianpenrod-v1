import { GradientText } from '@components/GradientText';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const WelcomeTitle = styled.h1`
  font-size: 60px;
`;

const WelcomeDescription = styled.p`
  max-width: 40ch;
  font-size: 30px;
  line-height: 2.8rem;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const WelcomeButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Welcome = () => (
  <section>
    <GradientText>
      <WelcomeTitle>Hi, I&apos;m Christian Penrod.</WelcomeTitle>
    </GradientText>
    <WelcomeDescription>
      Full-Stack Web Developer from Pittsburgh, Pennsylvania. I specialize in
      developing performant/responsive websites.
    </WelcomeDescription>
    <WelcomeButtonWrapper>
      <Button type="button" aria-label="Navigate to projects">
        Projects
      </Button>
      <Button status="outline" type="button" aria-label="Navigate to blog">
        Blog
      </Button>
    </WelcomeButtonWrapper>
  </section>
);
