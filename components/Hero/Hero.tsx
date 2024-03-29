import { Media } from '@components/Media';
import { SocialLinks } from '@components/SocialLinks';
import { MAX, MIN } from '@const/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';
import { HeroMessage } from './HeroMessage';

const Wrapper = styled.div`
  ${MIN.LG} {
    display: grid;
    grid-template-columns: 1fr 40%;
    padding-top: 5%;
    gap: var(--size-10);
  }
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: max-content;

  ${MIN.LG} {
    display: grid;
    justify-items: space-between;
  }
`;

const SocialLinksWrapper = styled.div`
  justify-self: start;
  align-self: end;
  padding-top: var(--size-7);
  padding-bottom: var(--size-5);

  ${MAX.LG} {
    > :first-child {
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
    }
  }
`;

const RocketWrapper = styled.div`
  position: relative;
  background: var(--brand-3);
  border-radius: var(--radius-blob-1);
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <HeroMessage />
        <SocialLinksWrapper>
          <SocialLinks />
        </SocialLinksWrapper>
      </Content>
      <Media greaterThan="md">
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
