import { DefaultTheme } from 'styled-components';

export const SHADOW_BASE = (hslValue: string) =>
  `0.3px 0.5px 0.7px hsl(${hslValue} / 0.36),` +
  `0.8px 1.6px 2px -0.8px hsl(${hslValue} / 0.36),` +
  `2.1px 4.1px 5.2px -1.7px hsl(${hslValue} / 0.36),` +
  `5px 10px 12.6px -2.5px hsl(${hslValue} / 0.36)`;

export const SHADOW_HOVER = (hslValue: string) =>
  `0.3px 0.5px 0.7px hsl(${hslValue} / 0.2),` +
  `1px 1.9px 2.4px -0.4px hsl(${hslValue} / 0.2),` +
  `1.7px 3.4px 4.3px -0.7px hsl(${hslValue} / 0.2),` +
  `2.8px 5.5px 6.9px -1.1px hsl(${hslValue} / 0.2),` +
  `4.4px 8.7px 11px -1.4px hsl(${hslValue} / 0.2),` +
  `6.8px 13.5px 17px -1.8px hsl(${hslValue} / 0.2),` +
  `10.2px 20.4px 25.7px -2.1px hsl(${hslValue} / 0.2),` +
  `15px 30px 37.7px -2.5px hsl(${hslValue} / 0.2)`;

export const BREAKPOINTS = {
  xs: '40em',
  sm: '48em',
  md: '64em',
  lg: '80em',
  xl: '96em',
};

export const base: DefaultTheme = {
  breakpoint: BREAKPOINTS,
  font: { base: 'Poppins', fancy: '' },
  background: {
    base: 'var(--background-base)',
    heavy: 'var(--background-heavy)',
    light: 'var(--background-light)',
    blur: 'var(--background-blur)',
  },
  text: {
    base: 'var(--text-base)',
    faded: 'var(--text-faded)',
    emphasis: 'var(--text-emphasis)',
  },
  basic: { base: 'var(--basic-base)', hover: 'var(--basic-hover)' },
  primary: { base: 'var(--primary-base)', hover: 'var(--primary-hover)' },
  secondary: { base: 'var(--secondary-base)', hover: 'var(--secondary-hover)' },
  tertiary: { base: 'var(--tertiary-base)', hover: 'var(--tertiary-hover)' },
  shadow: { base: 'var(--shadow-base)', hover: 'var(--shadow-hover)' },
  rounded: { base: '0.25em' },
};

export const dark: DefaultTheme = {
  ...base,
  background: {
    base: 'hsl(222, 30%, 13%)',
    heavy: 'hsl(222, 50%, 8%)',
    light: 'hsl(222, 29%, 16%)',
    blur: 'hsl(222, 30%, 13%, 40%)',
  },
  text: {
    base: 'hsl(0, 0%, 80%)',
    faded: 'hsl(0, 0%, 59%)',
    emphasis: 'hsl(266, 68%, 77%)',
  },
  basic: { base: 'hsl(233, 24%, 76%)', hover: 'hsl(233, 32%, 73%)' },
  primary: { base: 'hsl(229, 42%, 69%)', hover: 'hsl(229, 35%, 62%)' },
  secondary: { base: 'hsl(39, 100%, 90%)', hover: 'hsl(39, 88%, 84%)' },
  tertiary: { base: 'hsl(264, 81%, 84%)', hover: 'hsl(264, 41%, 72%)' },
  shadow: {
    base: SHADOW_BASE('0deg 0% 2%'),
    hover: SHADOW_HOVER('0deg 0% 2%'),
  },
};

export const light: DefaultTheme = {
  ...base,
  background: {
    base: 'hsl(225, 38%, 94%)',
    heavy: 'hsl(230, 24%, 85%)',
    light: 'hsl(216, 100%, 99%)',
    blur: 'hsl(225, 38%, 94%, 40%)',
  },
  text: {
    base: 'hsl(0, 0%, 9%)',
    faded: 'hsl(0, 0%, 37%)',
    emphasis: 'hsl(266, 91%, 42%)',
  },
  basic: { base: 'hsl(233, 68%, 92%)', hover: 'hsl(233, 78%, 88%)' },
  primary: { base: 'hsl(229, 61%, 69%)', hover: 'hsl(229, 50%, 62%)' },
  secondary: { base: 'hsl(39, 88%, 84%)', hover: 'hsl(39, 90%, 81%)' },
  tertiary: { base: 'hsl(266, 62%, 83%)', hover: 'hsl(266, 30%, 75%)' },
  shadow: {
    base: SHADOW_BASE('0deg 0% 63%'),
    hover: SHADOW_HOVER('0deg 0% 63%'),
  },
};
