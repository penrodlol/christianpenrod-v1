import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  top: 3rem;

  img {
    --tt-key: profile-image-wrapper;
  }

  /* prettier-ignore */
  @keyframes profile-image-wrapper {
    0%, 50% { opacity: 0.2; }
    100% { opacity: 1; }
  }
`;

export const Profile = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src="/img/ideas.webp"
          alt="Illustration"
          width={450}
          height={450}
          quality={100}
        />
      </ImageWrapper>
    </Wrapper>
  );
};
