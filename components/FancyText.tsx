import { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.strong(
  ({ theme }) => css`
    color: ${theme.text.emphasis};
    font-family: ${theme.font.fancy};
    font-size: 1.325rem;
  `,
);

export const FancyText: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
