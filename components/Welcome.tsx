import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { ContactForm } from './ContactForm';
import { Divider } from './Divider';
import { ExternalLink } from './ExternalLink';
import { GradientText } from './GradientText';

const Wrapper = styled.div`
  position: relative;
`;

const InnerWrapper = styled.div`
  position: relative;
  z-index: 1;
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
  color: ${({ theme }) => theme.text.faded};
  margin-bottom: 1.25rem;
  --tt-key: welcome-position;

  /* prettier-ignore */
  @keyframes welcome-position {
    0%, 20% { font-size: 1.2em; }
    100% { font-size: 1.6em; }
  }
`;

const Bio = styled.p`
  margin-top: 1.25rem;
  margin-bottom: 2.25rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  --tt-key: welcome-bio;

  @keyframes welcome-bio {
    0%,
    20% {
      font-size: 1em;
      max-width: 40ch;
    }
    100% {
      font-size: 1.25em;
      max-width: 50ch;
    }
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  gap: 2rem;

  > :first-child {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-auto-flow: column;
    gap: 3.5rem;
    align-items: center;
    width: max-content;

    > :first-child {
      width: 10rem;
    }
  }
`;

const ContactIconsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;

  > :last-child {
    transform: translateY(0.1rem);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    gap: 0;
    width: 80%;
    justify-content: space-between;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: -10rem;
  right: 0;
  transform: rotate(5deg);
  z-index: 0;
  --tt-key: welcome-image-wrapper;

  /* prettier-ignore */
  @keyframes welcome-image-wrapper {
    0%, 95% { opacity: 0.06; }
    100% { opacity: 0.5; }
  }
`;

export const Welcome = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <GradientText>
          <Slogan>Hi, I&apos;m Christian.</Slogan>
        </GradientText>
        <Position>Full-Stack Web Developer</Position>
        <Divider />
        <Bio>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta
          cum assumenda, culpa aliquid porro corporis illo ut quod facere
          reprehenderit quo blanditiis debitis possimus ex labore sunt.
        </Bio>
        <ContactWrapper>
          <ContactForm />
          <ContactIconsWrapper>
            <ExternalLink href="https://twitter.com/penrodlol">
              <Button icon="twitter" aria-label="Navigate to my twitter." />
            </ExternalLink>
            <ExternalLink href="https://github.com/penrodlol">
              <Button icon="github" aria-label="Navigate to my github." />
            </ExternalLink>
            <ExternalLink href="https://linkedin.com/in/christian-penrod-07618314b/">
              <Button icon="linkedin" aria-label="Navigate to my linkedin." />
            </ExternalLink>
          </ContactIconsWrapper>
        </ContactWrapper>
      </InnerWrapper>
      <ImageWrapper>
        <Image
          src="/img/ideas.webp"
          alt="Mind Exploding!"
          priority
          layout="fixed"
          width={550}
          height={550}
          quality={100}
        />
      </ImageWrapper>
    </Wrapper>
  );
};
