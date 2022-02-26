export const SIZE = {
  XXS: '240px',
  XS: '360px',
  SM: '480px',
  MD: '768px',
  LG: '1024px',
  XL: '1440px',
  XXL: '1920px',
};

export const MIN = {
  XXS: `@media screen and (min-width: ${SIZE.XXS})`,
  XS: `@media screen and (min-width: ${SIZE.XS})`,
  SM: `@media screen and (min-width: ${SIZE.SM})`,
  MD: `@media screen and (min-width: ${SIZE.MD})`,
  LG: `@media screen and (min-width: ${SIZE.LG})`,
  XL: `@media screen and (min-width: ${SIZE.XL})`,
  XXL: `@media screen and (min-width: ${SIZE.XXL})`,
};

export const MAX = {
  XXS: `@media screen and (max-width: calc(${SIZE.XXS} - 1px))`,
  XS: `@media screen and (max-width: calc(${SIZE.XS} - 1px))`,
  SM: `@media screen and (max-width: calc(${SIZE.SM} - 1px))`,
  MD: `@media screen and (max-width: calc(${SIZE.MD} - 1px))`,
  LG: `@media screen and (max-width: calc(${SIZE.LG} - 1px))`,
  XL: `@media screen and (max-width: calc(${SIZE.XL} - 1px))`,
  XXL: `@media screen and (max-width: calc(${SIZE.XXL} - 1px))`,
};
