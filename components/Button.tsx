import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonSize = 'sm' | 'md' | 'lg';
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
    switch (props.size) {
      case 'sm':
        return `
          font-size: 20px;
          padding: 0.8rem 1.8rem;
        `;
      case 'lg':
        return `
          font-size: 30px;
          padding: 1.5rem 3.5rem;
        `;
      default:
        return `
          font-size: 25px;
          padding: 1rem 2.3rem;
        `;
    }
  }};
  ${(props) => {
    switch (props.status) {
      case 'basic':
        return `
          background: transparent;
          color: var(--accent);
        `;
      case 'cta':
        return `
          background: var(--accent);
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--text);
          box-shadow:inset 0px 0px 0px 0.2rem var(--text);
        `;
      default:
        return `
          background: var(--text);
        `;
    }
  }};
`;

export const Button = (props: ButtonProps) => (
  <Wrapper {...props}>{props.children}</Wrapper>
);
