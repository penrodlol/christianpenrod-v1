import { MIN } from '@const/breakpoints';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  gap: var(--size-7);

  > :first-child {
    text-align: center;
  }

  ${MIN.SM} {
    grid-auto-flow: column;
    grid-template-columns: 40% 1fr;
    gap: var(--size-9);
  }
`;

const SelfieWrapper = styled.div`
  display: block;

  > :first-child {
    border: solid var(--size-1) var(--brand1) !important;
    box-shadow: var(--shadow-3);
    border-radius: var(--radius-2);

    img {
      filter: sepia(80%) !important;
    }
  }
`;

const Name = styled.span`
  display: block;
  font-size: var(--font-size-3);
  margin-top: var(--size-2);
`;

const Position = styled.span`
  color: var(--text1);
  display: block;
`;

const Bio = styled.p`
  font-size: var(--font-size-1);
  line-height: var(--font-lineheight-4);
  max-width: 50ch;
  margin: 0 auto;
`;

export const Profile = () => (
  <Wrapper>
    <div>
      <SelfieWrapper>
        <Image
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
      </Bio>
    </div>
  </Wrapper>
);
