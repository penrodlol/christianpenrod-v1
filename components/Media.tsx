import { createMedia } from '@artsy/fresnel';
import { SIZE } from '@const/breakpoints';

function emToPx(size: string) {
  return Number(`${size.replace(/em/i, '')}`) * 16;
}

const AppMedia = createMedia({
  breakpoints: {
    smallest: 0,
    xs: emToPx(SIZE.XS) + 1,
    sm: emToPx(SIZE.SM) + 1,
    md: emToPx(SIZE.MD) + 1,
    lg: emToPx(SIZE.LG) + 1,
    xl: emToPx(SIZE.XL) + 1,
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
