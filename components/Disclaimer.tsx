import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Svg } from './Svg';

const Wrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.background.light};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    border: solid ${theme.tertiary.base};
    border-width: 0 0 0 0.7rem;
    font-style: italic;
    font-size: 0.9rem;
    padding: 1rem;
  `,
);

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem;

  svg {
    transform: translateY(0.3rem);
  }
`;

export const Disclaimer: FC = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Svg name="warning" fill="var(--text-base)" height={25} width={25} />
        <div>{children}</div>
      </InnerWrapper>
    </Wrapper>
  );
};
