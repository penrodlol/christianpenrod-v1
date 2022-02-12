import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';

const Wrapper = styled.div`
  max-width: max-content;
  width: auto;
  padding-bottom: var(--size-6);
  --tt-key: section-title-wrapper;

  > :last-child {
    margin: var(--size-2) auto;
    width: 90%;
  }

  @keyframes section-title-wrapper {
    0%,
    40% {
      margin-left: var(--size-5);
      padding-top: var(--size-7);
    }
    100% {
      margin-left: var(--size-8);
      padding-top: var(--size-9);
    }
  }
`;

const Title = styled.h2`
  --tt-key: section-title-title;

  /* prettier-ignore */
  @keyframes section-title-title {
    0% { font-size: var(--font-size-4); }
    100% { font-size: var(--font-size-5); }
  }
`;

export const SectionTitle: FC = ({ children }) => (
  <Wrapper>
    <Title>{children}</Title>
    <Divider />
  </Wrapper>
);
