import { FC } from 'react';
import styled, { css } from 'styled-components';

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const Wrapper = styled.strong(
  ({ theme }) => css`
    color: ${theme.text.emphasis};
    font-family: ${theme.font.fancy};
    font-size: 1.325rem;
    display: inline-block;
  `,
);

export const FancyText: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
