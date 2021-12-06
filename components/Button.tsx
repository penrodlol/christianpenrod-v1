import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

export type ButtonStatus = 'primary' | 'secondary' | 'cta';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
}

const Wrapper = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  font-size: 1.15em;
  font-weight: 600;
  border-radius: var(--rounded);
  padding: 0.65rem 1.6rem;
  box-shadow: var(--shadow);

  &:disabled {
    cursor: not-allowed;
  }

  ${({ status }) => {
    switch (status) {
      case 'secondary':
        return `
          background: var(--basic);

          &:hover:not(:active) {
            background: var(--basic-hover);
          }
        `;
      case 'cta':
        return `
          background: var(--secondary);

          &:hover:not(:active) {
            background: var(--secondary-hover);
          }
        `;
      default:
        return `
          background: var(--primary);

          &:hover:not(:active) {
            background: var(--primary-hover);
          }
        `;
    }
  }}
`;

export const Button: FC<ButtonProps> = (props) => (
  <Wrapper {...props}>{props.children}</Wrapper>
);
