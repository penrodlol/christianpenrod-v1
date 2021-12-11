import { DefaultTheme } from 'styled-components';

export function persistThemeCssVars(theme: DefaultTheme) {
  Object.entries(theme).forEach(([key, value]) => {
    Object.entries(value as Record<string, string>).forEach(
      ([childKey, childValue]) => {
        document.documentElement.style.setProperty(
          `--${key}-${childKey}`,
          childValue,
        );
      },
    );
  });
}
