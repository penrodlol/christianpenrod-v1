import { createMedia } from '@artsy/fresnel';
import { emToPx } from '@utils/convert-em-to-px';
import { BREAKPOINTS } from './Theme/theme';

const AppMedia = createMedia({
  breakpoints: {
    smallest: 0,
    xs: emToPx(BREAKPOINTS.xs) + 1,
    sm: emToPx(BREAKPOINTS.sm) + 1,
    md: emToPx(BREAKPOINTS.md) + 1,
    lg: emToPx(BREAKPOINTS.lg) + 1,
    xl: emToPx(BREAKPOINTS.xl) + 1,
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
