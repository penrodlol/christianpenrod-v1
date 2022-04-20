import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  --_disclaimer-font-size: 0.95em;

  background: var(--surface-2);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  border-left: solid var(--size-2) var(--guava-2);
  font-size: var(--_disclaimer-font-size);
  letter-spacing: var(--font-letterspacing-2);
  padding: var(--size-4);
`;

const InnerWrapper = styled.div`
  > *:not(span[size]) {
    margin: 0 !important;
  }
`;

export const Disclaimer: FC = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};
