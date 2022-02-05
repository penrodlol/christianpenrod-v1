import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { SocialLinks } from '@components/SocialLinks';
import ArrowUpCircle from '@svg/arrow-up-circle.svg';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  height: max-content;
  --tt-key: footer;

  /* prettier-ignore */
  @keyframes footer {
    0%, 40% { padding-top: var(--size-4); }
    100% { padding-top: var(--size-8); }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: var(--layer-2);
  font-size: var(--font-size-3);
  text-align: center;
  margin: 0 auto;
  width: max-content;

  > :nth-child(2) {
    margin-block: var(--size-5);
  }

  > :nth-child(3) {
    width: max-content;
    margin: 0 auto;
  }
`;

const Footnote = styled.div`
  font-weight: var(--font-weight-4);
  font-size: var(--font-size-2);
  margin-top: var(--size-3);
  margin-bottom: var(--size-6);
`;

const Copyright = styled.span`
  color: var(--guava-2);
  font-weight: var(--font-weight-8);
`;

export const Footer = () => (
  <Wrapper>
    <Content>
      <Button
        asIcon
        aria-label="Navigate back to top of page."
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpCircle width={60} height={60} />
      </Button>
      <Divider />
      <SocialLinks />
      <Footnote>
        Christian Penrod <Copyright>&#169;{dayjs().year()}</Copyright>
      </Footnote>
    </Content>
  </Wrapper>
);
