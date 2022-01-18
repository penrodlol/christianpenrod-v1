import ArrowUpCircle from '@svg/arrow-up-circle.svg';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.footer`
  display: grid;
  gap: 1rem;
  justify-content: center;
  padding: 0 2rem 1rem 2rem;
  --tt-key: footer-wrapper;

  button {
    margin: 0 auto;
  }

  /* prettier-ignore */
  @keyframes footer-wrapper {
    0%, 40% { margin-top: 1rem; }
    100% { margin-top: 2.5rem; }
  }
`;

const Footnote = styled.div`
  color: var(--text1);
`;

const Copyright = styled.span`
  color: var(--guava1);
  font-weight: 500;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Button
        asIcon
        aria-label="Navigate back to top of page."
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpCircle width={50} height={50} />
      </Button>
      <Footnote>
        Christian Penrod <Copyright>&#169;{dayjs().year()}</Copyright>
      </Footnote>
    </Wrapper>
  );
};
