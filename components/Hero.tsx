import Image from 'next/image';
import styled from 'styled-components';
import { HeroActions } from './HeroActions';
import { HeroMessage } from './HeroMessage';

const Content = styled.div`
  position: relative;
  z-index: var(--layer-2);
  margin: 0 auto;
  max-width: max-content;
`;

const ImageWrapper = styled.div`
  position: absolute;
  bottom: -6rem;
  right: 0;
  transform: rotate(5deg);
  z-index: var(--layer-1);

  --tt-key: hero-image-wrapper;

  /* prettier-ignore */
  @keyframes hero-image-wrapper {
  0%, 95% { opacity: 0.06; }
  100% { opacity: 0.5; }
}
`;

export const Hero = () => {
  return (
    <div>
      <Content>
        <HeroMessage />
        <HeroActions />
      </Content>
      <ImageWrapper>
        <Image
          src="/img/ideas.webp"
          alt="Hero Image"
          placeholder="blur"
          blurDataURL="/img/ideas.webp"
          layout="fixed"
          width={550}
          height={550}
          quality={100}
        />
      </ImageWrapper>
    </div>
  );
};
