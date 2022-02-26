import { Media } from '@components/Media';
import { SocialLinks } from '@components/SocialLinks';
import { MIN } from '@const/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';
import { HeroMessage } from './HeroMessage';

const Wrapper = styled.div`
  ${MIN.MD} {
    display: grid;
    grid-template-columns: 1fr 40%;
    padding-top: 5%;
    gap: var(--size-10);
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: max-content;

  > :last-child {
    align-self: end;
    padding-top: var(--size-7);
    padding-bottom: var(--size-5);
  }

  ${MIN.MD} {
    display: grid;
    justify-items: space-between;
  }
`;

const RocketWrapper = styled.div`
  position: relative;
  background: var(--brand-3);
  border-radius: var(--radius-blob-1);
  transform: scaleX(-1);
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <HeroMessage />
        <SocialLinks />
      </Content>
      <Media greaterThan="sm">
        <RocketWrapper>
          <Image
            src="/img/rocket.webp"
            alt="Rocket"
            priority
            layout="responsive"
            height={250}
            width={250}
            quality={100}
          />
        </RocketWrapper>
      </Media>
    </Wrapper>
  );
};
