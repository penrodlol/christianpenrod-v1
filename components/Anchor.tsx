import {
  AnchorHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.a<AnchorProps>(({ underline }) => {
  const underlineStyles = css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      left: 0;
      bottom: -0.15rem;
      border-top: 0.2rem solid var(--guava-2);
      border-radius: var(--radius-2);

      ${underline === 'hover' && 'display: none;'}
    }

    &:hover {
      color: var(--guava-2);
    }

    &:hover::after {
      display: unset;

      @keyframes expand {
        from {
          right: 0;
          left: 0;
        }
        to {
          right: calc(var(--size-2) * -1);
          left: calc(var(--size-2) * -1);
        }
      }

      animation: expand forwards;
      animation-timing-function: var(--ease-squish-2);
      animation-duration: 500ms;
    }
  `;

  return css`
    color: var(--text-1);
    text-decoration: none;
    cursor: pointer;
    border-radius: var(--radius-2);

    ${underline && underlineStyles}
  `;
});

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: 'hover' | 'always';
}

const AnchorComponent = (
  props: PropsWithChildren<AnchorProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) => (
  <Wrapper ref={ref} {...props}>
    {props.children}
  </Wrapper>
);

export const Anchor = forwardRef(AnchorComponent);
