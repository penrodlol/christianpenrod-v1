import { DefaultTheme } from 'styled-components';

export const SHADOW = (base: string) =>
  `0.3px 0.5px 0.7px hsl(${base} / 0.36),` +
  `0.8px 1.6px 2px -0.8px hsl(${base} / 0.36),` +
  `2.1px 4.1px 5.2px -1.7px hsl(${base} / 0.36),` +
  `5px 10px 12.6px -2.5px hsl(${base} / 0.36)`;

export const BREAKPOINTS = {
  xs: '40em',
  sm: '48em',
  md: '64em',
  lg: '80em',
  xl: '96em',
};

export const base: DefaultTheme = {
  breakpoint: BREAKPOINTS,
  font: { base: 'Poppins', fancy: 'Victor Mono' },
  background: {
    base: 'var(--background-base)',
    heavy: 'var(--background-heavy)',
    light: 'var(--background-light)',
  },
  text: { base: 'var(--text-base)', faded: 'var(--text-faded)' },
  basic: { base: 'var(--basic-base)', hover: 'var(--basic-hover)' },
  primary: { base: 'var(--primary-base)', hover: 'var(--primary-hover)' },
  secondary: { base: 'var(--secondary-base)', hover: 'var(--secondary-hover)' },
  tertiary: { base: 'var(--tertiary-base)', hover: 'var(--tertiary-hover)' },
  shadow: { base: 'var(--shadow)' },
  rounded: { base: '0.25em' },
};

export const dark: DefaultTheme = {
  ...base,
  background: {
    base: 'hsl(222, 30%, 13%)',
    heavy: 'hsl(222, 50%, 8%)',
    light: 'hsl(222, 29%, 16%)',
  },
  text: { base: 'hsl(0, 0%, 80%)', faded: 'hsl(0, 0%, 59%)' },
  basic: { base: 'hsl(233, 7%, 78%)', hover: 'hsl(230, 3%, 65%)' },
  primary: { base: 'hsl(229, 42%, 69%)', hover: 'hsl(229, 35%, 62%)' },
  secondary: { base: 'hsl(39, 100%, 90%)', hover: 'hsl(39, 88%, 84%)' },
  tertiary: { base: 'hsl(264, 81%, 84%)', hover: 'hsl(264, 41%, 72%)' },
  shadow: { base: SHADOW('0deg 0% 2%') },
};

export const light: DefaultTheme = {
  ...base,
  background: {
    base: 'hsl(225, 38%, 94%)',
    heavy: 'hsl(230, 24%, 85%)',
    light: 'hsl(216, 100%, 99%)',
  },
  text: { base: 'hsl(0, 0%, 9%)', faded: 'hsl(0, 0%, 37%)' },
  basic: { base: 'hsl(228, 16%, 70%)', hover: 'hsl(227, 12%, 61%)' },
  primary: { base: 'hsl(229, 61%, 69%)', hover: 'hsl(229, 50%, 62%)' },
  secondary: { base: 'hsl(39, 88%, 84%)', hover: 'hsl(39, 90%, 81%)' },
  tertiary: { base: 'hsl(266, 57%, 86%)', hover: 'hsl(266, 30%, 75%)' },
  shadow: { base: SHADOW('0deg 0% 63%') },
};
