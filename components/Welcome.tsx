import { GradientText } from '@Components/GradientText';
import React from 'react';
import styled from 'styled-components';

const WelcomeTitle = styled.h1`
  font-size: 60px;
`;

const WelcomeDescription = styled.p`
  max-width: 40ch;
  font-size: 30px;
  line-height: 2.8rem;
  margin-top: 20px;
`;

export const Welcome = () => (
  <div>
    <GradientText>
      <WelcomeTitle>Hi, I&apos;m Christian Penrod.</WelcomeTitle>
    </GradientText>
    <WelcomeDescription>
      Full-Stack Web Developer from Pittsburgh, Pennsylvania. I specialize in
      developing performant/responsive websites.
    </WelcomeDescription>
  </div>
);
