import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.button<ButtonProps>(({ color, asIcon }) => {
  const isBasic = color === 'basic';

  let background!: string;
  let backgroundHover!: string;

  switch (color) {
    case 'cta': {
      background = 'var(--guava-2)';
      backgroundHover = 'var(--guava-1)';
      break;
    }
    case 'basic': {
      background = 'transparent';
      backgroundHover = 'transparent';
      break;
    }
    default: {
      background = 'var(--brand-3)';
      backgroundHover = 'var(--brand-4)';
      break;
    }
  }

  return css`
    display: inline-block;
    align-items: center;
    gap: var(--size-2);
    white-space: nowrap;
    text-align: center;
    border: none;
    cursor: pointer;
    font-weight: var(--font-weight-8);
    font-size: var(--font-size-2);
    border-radius: var(--radius-2);
    padding: ${asIcon || isBasic ? 0 : '0.8rem var(--size-7)'};
    box-shadow: ${asIcon || isBasic ? 'none' : 'var(--shadow-3)'};
    background: ${asIcon ? 'transparent' : background};

    ${isBasic && 'color: var(--text-1);'}

    &:hover:not(:active) {
      background: ${asIcon ? 'transparent' : backgroundHover};

      svg {
        fill: var(--brand-1);
      }
    }
  `;
});

export type ButtonColor = 'default' | 'cta' | 'basic';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  asIcon?: boolean;
}

const ButtonComponent = (
  props: PropsWithChildren<ButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <Wrapper ref={ref} {...props}>
      {props.children}
    </Wrapper>
  );
};

export const Button = forwardRef(ButtonComponent);
