import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

export type ButtonStatus = 'primary' | 'secondary' | 'cta';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
}

const Wrapper = styled.button<ButtonProps>`
  border-radius: ${({ theme }) => theme.rounded.base};
  box-shadow: ${({ theme }) => theme.shadow.base};
  border: none;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: 600;
  padding: 0.65rem 1.6rem;

  &:disabled {
    cursor: not-allowed;
  }

  background: ${({ status, theme }) => {
    switch (status) {
      case 'secondary':
        return '';
      case 'cta':
        return theme.tertiary.base;
      default:
        return theme.basic.base;
    }
  }};

  &:hover:not(:active, :disabled) {
    background: ${({ status, theme }) => {
      switch (status) {
        case 'secondary':
          return '';
        case 'cta':
          return theme.tertiary.hover;
        default:
          return theme.basic.hover;
      }
    }};
  }
`;

export const Button: FC<ButtonProps> = (props) => (
  <Wrapper {...props}>{props.children}</Wrapper>
);
