import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    smallest: 0,
    xs: 480,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 1920,
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
