import { Occupation } from '@interfaces/occupation';
import Image from 'next/image';
import { FC, useRef } from 'react';
import styled from 'styled-components';
import { getTotalTime } from './occupation-time-formatter';
import { OccupationCardNodes } from './OccupationCardNodes';

const Wrapper = styled.div`
  background: var(--surface2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  padding: var(--size-4);
`;

const Header = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: var(--size-3);
  justify-content: start;
  margin-bottom: var(--size-5);
`;

const LogoWrapper = styled.div`
  display: block;

  > :first-child {
    border: solid var(--size-1) var(--brand1) !important;
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-2);

    img {
      filter: grayscale(100%) !important;
    }
  }
`;

const Company = styled.h3`
  color: var(--text2);
  line-height: var(--font-lineheight-1);
  font-size: var(--font-size-4);
`;

const TotalTime = styled.span`
  color: var(--text1);
  font-size: var(--font-size-0);
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
