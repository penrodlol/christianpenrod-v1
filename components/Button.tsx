import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.button<ButtonProps>(({ color, asIcon }) => {
  let background!: string;
  let backgroundHover!: string;

  if (color === 'cta') {
    background = 'var(--guava1)';
    backgroundHover = 'var(--guava2)';
  } else {
    background = 'var(--moon1)';
    backgroundHover = 'var(--moon2)';
  }

  return css`
    white-space: nowrap;
    text-align: center;
    font-weight: var(--font-weight-7);
    font-size: var(--font-size-2);
    border-radius: var(--radius-2);
    color: var(--text-offset);
    padding: ${asIcon ? 0 : '0.8rem var(--size-7)'};
    box-shadow: ${asIcon ? 'none' : 'var(--shadow-2)'};
    background: ${asIcon ? 'transparent' : background};

    &:hover {
      background: ${asIcon ? 'transparent' : backgroundHover};

      svg {
        fill: var(--brand1);
      }
    }
  `;
});

export type ButtonColor = 'basic' | 'cta';

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
