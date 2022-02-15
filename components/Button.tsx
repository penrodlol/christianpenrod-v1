import { MOTION } from '@const/motion';
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
      background = 'var(--brand-2)';
      backgroundHover = 'var(--brand-1)';
      break;
    }
  }

  const hoverAnimation = css`
    @keyframes move-up {
      to {
        transform: translateY(-0.125rem);
      }
    }

    ${MOTION.NO_PREFERENCE} {
      animation: move-up forwards;
      animation-timing-function: var(--ease-squish-5);
      animation-duration: 0.5s;
    }
  `;

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
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

    &:hover {
      background: ${asIcon ? 'transparent' : backgroundHover};
      box-shadow: ${asIcon || isBasic ? 'none' : 'var(--shadow-4)'};

      ${!isBasic && hoverAnimation}

      svg {
        fill: var(--brand-1);
        filter: drop-shadow(3px 3px 5px hsl(var(--shadow-color) / 65%));
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
