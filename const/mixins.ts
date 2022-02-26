import { css } from 'styled-components';

export const HOVER_ICON = css`
  fill: var(--brand-1);
  filter: drop-shadow(3px 3px 5px hsl(var(--shadow-color) / 65%));
`;

export const OVERLAY_GUAVA = (opacity: number) => css`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: var(--layer-2);
    background: var(--guava-2);
    opacity: ${opacity};
  }
`;

export const IMG_GRAYSCALE = css`
  img {
    filter: grayscale(1) !important;
  }
`;
