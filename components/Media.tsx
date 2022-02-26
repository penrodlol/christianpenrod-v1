import { createMedia } from '@artsy/fresnel';
import { SIZE } from '@const/breakpoints';

function pxToNumber(size: string) {
  return Number(`${size.replace(/px/i, '')}`);
}

const AppMedia = createMedia({
  breakpoints: {
    xxs: pxToNumber(SIZE.XXS),
    xs: pxToNumber(SIZE.XS),
    sm: pxToNumber(SIZE.SM),
    md: pxToNumber(SIZE.MD),
    lg: pxToNumber(SIZE.LG),
    xl: pxToNumber(SIZE.XL),
    xxl: pxToNumber(SIZE.XXL),
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
