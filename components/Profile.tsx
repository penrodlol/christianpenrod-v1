import { MIN } from '@const/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';
import { Divider } from './Divider';
import { Media } from './Media';

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

  > :first-child {
    box-shadow: var(--shadow-4);
    border-radius: var(--radius-2);

    img {
      filter: sepia(80%) !important;
    }
  }
`;

const Name = styled.span`
  display: block;
  font-size: var(--font-size-5);
  margin-top: var(--size-3);
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

export const Profile = () => (
  <Wrapper>
    <div>
      <SelfieWrapper>
        <Image
          id="selfie"
          src="/img/me.webp"
          alt="Selfie"
          placeholder="blur"
          blurDataURL="/img/me.webp"
          priority
          layout="intrinsic"
          height={400}
          width={300}
          quality={100}
        />
      </SelfieWrapper>
      <Name>Christian Penrod</Name>
      <Position>Full-Stack Web Developer</Position>
      <Media lessThan="sm">
        <Divider />
      </Media>
    </div>
    <div>
      <Bio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta cum
        assumenda, culpa aliquid porro corporis illo ut quod facere
        reprehenderit quo blanditiis debitis possimus ex labore sunt.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
        reiciendis, sint, vitae distinctio accusantium, quisquam aspernatur
        dolorum quas hic aliquid eveniet.
        <br />
        <br />
        Ipsa soluta cum assumenda, culpa aliquid porro corporis illo ut quod
        facere reprehenderit quo blanditiis debitis, quisquam aspernatur dolorum
        quas hic aliquid eveniet.
        <br />
        <br />
        Ipsa soluta cum assumenda, culpa aliquid porro corporis illo ut quod
        facere reprehenderit quo blanditiis debitis, quisquam aspernatur dolorum
        quas hic aliquid eveniet.
      </Bio>
    </div>
  </Wrapper>
);
