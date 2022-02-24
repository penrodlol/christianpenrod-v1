import { OVERLAY_GUAVA } from '@const/mixins';
import { Occupation } from '@interfaces/occupation';
import Image from 'next/image';
import { FC, useRef } from 'react';
import styled from 'styled-components';
import { getTotalTime } from './occupation-time-formatter';
import { OccupationCardNodes } from './OccupationCardNodes';

const Wrapper = styled.div`
  background: var(--surface-3);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-4);
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
    border: solid var(--size-1) var(--brand-2) !important;
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-2);

    ${OVERLAY_GUAVA(0.5)}
  }
`;

const Company = styled.h3`
  color: var(--text-1);
  line-height: var(--font-lineheight-1);
  font-size: var(--font-size-4);
`;

const TotalTime = styled.span`
  color: var(--text-2);
  font-size: var(--font-size-1);
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
            quality={50}
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
