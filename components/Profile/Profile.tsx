import { MIN } from '@const/breakpoints';
import { IMG_GRAYSCALE, OVERLAY_GUAVA } from '@const/mixins';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from '../Divider';
import { FancyText } from '../FancyText';
import { Media } from '../Media';
import { Spacer } from '../Spacer';
import {
  AngularLink,
  MaterialDesignLink,
  NextjsLink,
  NxLink,
  StyledComponentsLink,
  TailwindCSSLink,
} from './ProfileLinks';

const Wrapper = styled.div`
  display: grid;
  gap: var(--size-4);
  position: relative;
  --tt-key: profile-wrapper;

  > :first-child {
    text-align: center;

    > :last-child {
      max-width: var(--size-content-2);
      margin: 0 auto;
    }
  }

  /* prettier-ignore */
  @keyframes profile-wrapper {
    0% { padding-top: var(--size-4); }
    100% { padding-top: var(--size-8); }
  }

  ${MIN.SM} {
    grid-auto-flow: column;
    grid-template-columns: 40% 1fr;
    gap: var(--size-9);
  }
`;

const SelfieWrapper = styled.div`
  max-width: 25rem;
  margin: 0 auto;
  background: var(--brand-3);
  padding-block: var(--size-5);
  border-radius: var(--radius-blob-1);

  ${IMG_GRAYSCALE};

  > :first-child {
    box-shadow: var(--shadow-4);
    border-radius: var(--radius-2);

    ${OVERLAY_GUAVA(0.35)}
  }
`;

const Name = styled.span`
  display: block;
  font-size: var(--font-size-5);
  margin-top: var(--size-7);
`;

const Position = styled.span`
  display: block;
  color: var(--text-2);
  --tt-key: profile-position;

  /* prettier-ignore */
  @keyframes profile-position {
    0% { font-size: var(--font-size-3); }
    100% { font-size: var(--font-size-2); }
  }
`;

const Bio = styled.p`
  --_profile-bio-max-width: 50ch;
  --tt-key: profile-bio;

  font-size: var(--font-size-2);
  max-width: var(--_profile-bio-max-width);
  margin: 0 auto;

  @keyframes profile-bio {
    0% {
      padding-top: 0;
      line-height: var(--font-lineheight-3);
    }
    100% {
      padding-top: var(--size-5);
      line-height: var(--font-lineheight-4);
    }
  }
`;

export interface ProfileProps {
  selfie: string;
}

export const Profile: FC<ProfileProps> = ({ selfie }) => (
  <Wrapper>
    <div>
      <SelfieWrapper>
        <Image
          id="selfie"
          src={selfie}
          alt="Selfie"
          placeholder="blur"
          blurDataURL="img/placeholder.webp"
          layout="intrinsic"
          objectFit="cover"
          height={400}
          width={300}
          quality={100}
        />
      </SelfieWrapper>
      <Name>Christian Penrod</Name>
      <Position>Front-End Web Developer</Position>
      <Media lessThan="sm">
        <Divider />
      </Media>
    </div>
    <div>
      <Bio>
        Lets by honest, talking about yourself in third-person is difficult, but
        here&apos;s my best attempt at it...
        <Spacer size={3} />
        I&apos;ve been developing for the web since 2015. One of my primary
        interests involves <FancyText>developer experience</FancyText> (DX)
        tooling. I&apos;ve worked in depth migrating <AngularLink /> codebases
        to <NxLink />.
        <Spacer size={3} />
        Another area of interest includes{' '}
        <FancyText>responsive web design</FancyText>. I enjoy creating
        aesthetically pleasing, mobile friendly, accessible websites. I&apos;ve
        worked hands-on with frameworks such as <AngularLink /> and{' '}
        <NextjsLink />. And styling libraries including <MaterialDesignLink />,{' '}
        <StyledComponentsLink />, and <TailwindCSSLink />.
        <Spacer size={3} />
        Although I&apos;m not a qualified expert, I try to{' '}
        <FancyText>teach</FancyText> others the knowledge I&apos;ve accumulated
        over the years. Whether that be through blog posts or just working with
        my co-workers.
      </Bio>
    </div>
  </Wrapper>
);
