import { css } from 'styled-components';

export function generateGridBackground() {
  return css(({ theme }) => {
    const hsl = theme.primary.base.replace(/(hsl\(|\))/g, '');

    return `
      background-color: ${theme.background.light};
      background-image: url("
        data:image/svg+xml,%3Csvg
        xmlns='http://www.w3.org/2000/svg'
        width='100%25'
        height='100%25'%3E%3Cdefs%3E%3Cpattern
        id='p'
        width='100'
        height='100'
        patternUnits='userSpaceOnUse'
        patternTransform='rotate(5)
        scale(0.67)'%3E%3Cpath
        data-color='outline'
        fill='none'
        stroke='hsla(${hsl} / 20%)'
        stroke-width='2.25'
        d='M50 0v100M100 50H0'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect
        fill='url(%23p)'
        width='100%25'
        height='100%25'%3E%3C/rect%3E%3C/svg%3E
      ");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;
  });
}
