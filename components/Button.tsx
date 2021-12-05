import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

export type ButtonStatus = 'primary' | 'secondary' | 'cta';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
}

const Wrapper = styled.button<ButtonProps>`
  font-size: var(--font-size-xs);
  border-radius: var(--rounded-2);
  border: none;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.02em;
  padding: 0.8rem 1.8rem;
  box-shadow: var(--shadow-elevation);

  &:disabled {
    cursor: not-allowed;
  }

  ${({ status }) => {
    switch (status) {
      case 'secondary':
        return `
          background: transparent;
          box-shadow: inset 0px 0px 0px 0.15rem var(--primary-6);
          color: var(--basic-1);

          &:hover:not(:active, :disabled) { background: var(--basic-8); }
          &:disabled {
            box-shadow:inset 0px 0px 0px 0.15rem var(--primary-4);
            color: var(--basic-6);
          }
        `;
      case 'cta':
        return `
          background: var(--secondary-6);

          &:hover { background: var(--secondary-5); }
          &:active { background: var(--secondary-7); }
          &:disabled { background: var(--secondary-4); }
        `;
      default:
        return `
          background: var(--primary-6);

          &:hover { background: var(--primary-5); }
          &:active { background: var(--primary-7); }
          &:disabled { background: var(--primary-4); }
        `;
    }
  }}
`;

export const Button: FC<ButtonProps> = (props) => (
  <Wrapper {...props}>{props.children}</Wrapper>
);
