import { css } from 'styled-components';

export const guavaHue = (opacity: number) => css`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: var(--layer-2);
    background: var(--guava-2);
    opacity: ${opacity};
  }
`;
