import { createMedia } from '@artsy/fresnel';
import { SIZE } from '@const/breakpoints';

function emToPx(size: string) {
  return Number(`${size.replace(/em/i, '')}`) * 16;
}

const AppMedia = createMedia({
  breakpoints: {
    smallest: 0,
    xs: emToPx(SIZE.XS),
    sm: emToPx(SIZE.SM),
    md: emToPx(SIZE.MD),
    lg: emToPx(SIZE.LG),
    xl: emToPx(SIZE.XL),
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
