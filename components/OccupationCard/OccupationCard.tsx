import { Occupation } from '@interfaces/occupation.interface';
import Image from 'next/image';
import { FC, useRef } from 'react';
import styled, { css } from 'styled-components';
import { getTotalTime } from './occupation-time-formatter';
import { OccupationCardNodes } from './OccupationCardNodes';

const Wrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.background.base};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    padding: 1.25rem;
  `,
);

const Header = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: start;
  margin-bottom: 1.5rem;
`;

const LogoWrapper = styled.div(
  ({ theme }) => css`
    display: block;

    > :first-child {
      border: solid 0.2rem ${theme.primary.base} !important;
      box-shadow: ${theme.shadow.base};
      border-radius: 20%;

      img {
        filter: grayscale(100%) !important;
      }
    }
  `,
);

const Company = styled.h3`
  line-height: 1.2em;
  --tt-key: occupation-card-company;

  /* prettier-ignore */
  @keyframes occupation-card-company {
    0%, 40% { font-size: 1.1em;}
    100% { font-size: 1.5em; }
  }
`;

const TotalTime = styled.span`
  color: ${({ theme }) => theme.text.faded};
  font-size: 0.8em;
`;

export interface OccupationCardProps {
  occupation: Occupation;
}

export const OccupationCard: FC<OccupationCardProps> = ({ occupation }) => {
  const totalTime = useRef(getTotalTime(occupation.roles));

  return (
    <Wrapper>
      <Header>
        <LogoWrapper>
          <Image
            src={occupation.logo}
            alt={`${occupation.company} logo`}
            placeholder="blur"
            blurDataURL={occupation.logo}
            layout="intrinsic"
            height={50}
            width={50}
            quality={100}
          />
        </LogoWrapper>
        <div>
          <Company>{occupation.company}</Company>
          <TotalTime>{totalTime.current}</TotalTime>
        </div>
      </Header>
      <OccupationCardNodes roles={occupation.roles} />
    </Wrapper>
  );
};
