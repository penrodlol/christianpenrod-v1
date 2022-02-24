export const SIZE = {
  XS: '30em',
  SM: '48em',
  MD: '64em',
  LG: '90em',
  XL: '120em',
};

export const MIN = {
  XS: `@media screen and (min-width: ${SIZE.XS})`,
  SM: `@media screen and (min-width: ${SIZE.SM})`,
  MD: `@media screen and (min-width: ${SIZE.MD})`,
  LG: `@media screen and (min-width: ${SIZE.LG})`,
  XL: `@media screen and (min-width: ${SIZE.XL})`,
};

export const MAX = {
  XS: `@media screen and (max-width: ${SIZE.XS})`,
  SM: `@media screen and (max-width: ${SIZE.SM})`,
  MD: `@media screen and (max-width: ${SIZE.MD})`,
  LG: `@media screen and (max-width: ${SIZE.LG})`,
  XL: `@media screen and (max-width: ${SIZE.XL})`,
};
