import 'styled-components';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Background {
  base: string;
  heavy: string;
  light: string;
  blur: string;
}

export interface Font {
  base: string;
  fancy: string;
}

export interface Text {
  base: string;
  faded: string;
}

export interface Color {
  base: string;
  hover: string;
}

export interface Shadow {
  base: string;
  hover: string;
}

export interface Rounded {
  base: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: Record<Breakpoint, string>;
    font: Font;
    background: Background;
    text: Text;
    basic: Color;
    primary: Color;
    secondary: Color;
    tertiary: Color;
    shadow: Shadow;
    rounded: Rounded;
  }
}
