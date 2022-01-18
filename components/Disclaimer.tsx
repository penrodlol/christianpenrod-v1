import Warning from '@svg/warning.svg';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--surface-disclaimer);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  border-left: solid var(--size-2) var(--guava1);
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-5);
  line-height: var(--font-lineheight-4);
  letter-spacing: var(--font-letterspacing-2);
  padding: var(--size-4);

  svg {
    transform: translateY(0.2rem);
    fill: var(--text2) !important;
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
