import Warning from '@svg/warning.svg';
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

  svg {
    transform: translateY(0.2rem);
    fill: var(--text-2) !important;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: var(--size-2);
`;

export const Disclaimer: FC = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Warning height={25} width={25} />
        <div>{children}</div>
      </InnerWrapper>
    </Wrapper>
  );
};
