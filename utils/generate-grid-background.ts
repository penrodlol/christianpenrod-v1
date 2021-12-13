import { css, DefaultTheme } from 'styled-components';

export function generateGridBackground(theme: DefaultTheme) {
  const hsl = theme.primary.base.replace(/(hsl\(|\))/g, '');

  return css`
    background-image: url("data:image/svg+xml,
      <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(3) rotate(5)'>
            <rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/>
            <path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z' stroke-width='0.5' stroke='hsla(${hsl}, 0.2)' fill='none'/>
          </pattern>
        </defs>
        <rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/>
      </svg>
    ");
  `;
}
