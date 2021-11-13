import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonSize = 'sm' | 'lg';
export type ButtonStatus = 'primary' | 'outline' | 'cta' | 'basic';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  status?: ButtonStatus;
}

const Wrapper = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  font-weight: bold;
  ${(props) => {
    return props.size === 'sm'
      ? `
        font-size: 16px;
        padding: 0.8rem 1.5rem;
        min-width: 7rem;
      `
      : `
        font-size: 18px;
        padding: 1rem 2.5rem;
        min-width: 9rem;
      `;
  }};
  ${(props) => {
    switch (props.status) {
      case 'basic':
        return `
          background: transparent;
          color: var(--accent-100);
          &:hover:not([disabled]):not(:active) {
            background: var(--dark-100);
          }
        `;
      case 'cta':
        return `
          background: var(--accent-100);
          &:hover:not([disabled]):not(:active) {
            background: var(--accent-200);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--light-100);
          box-shadow:inset 0px 0px 0px 0.15rem var(--light-100);
          &:hover:not([disabled]):not(:active) {
            background: var(--dark-100);
          }
        `;
      default:
        return `
          background: var(--light-100);
          &:hover:not([disabled]):not(:active) {
            background: var(--light-200);
          }
        `;
    }
  }};
`;

export const Button = (props: ButtonProps) => (
  <Wrapper {...props}>{props.children}</Wrapper>
);
