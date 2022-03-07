import { SocialLinks } from '@components/SocialLinks';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Wrapper = styled.footer`
  --tt-key: footer;

  display: grid;
  gap: var(--size-5);
  justify-content: center;
  margin-bottom: var(--size-6);

  /* prettier-ignore */
  @keyframes footer {
    0%, 40% { padding-top: var(--size-6); }
    100% { padding-top: var(--size-8); }
  }
`;

const Footnote = styled.div`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-4);
  text-align: center;
`;

const Copyright = styled.span`
  color: var(--guava-2);
  font-weight: var(--font-weight-8);
`;

export const Footer = () => (
  <Wrapper>
    <SocialLinks showRss />
    <Footnote>
      Christian Penrod <Copyright>&#169;{dayjs().year()}</Copyright>
    </Footnote>
  </Wrapper>
);
