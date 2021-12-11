import { dark, light } from '@components/Theme/theme';
import { Theme } from '@components/Theme/ThemeProvider';
import { THEME_KEY } from 'const/storage';
import { minify } from 'uglify-js';

export function evalDarkMode() {
  const themeKey = '<THEME_KEY>';
  const darkTheme = '<DARK_THEME>';
  const lightTheme = '<LIGHT_THEME>';

  const persisted = (localStorage.getItem(themeKey) as Theme) === 'dark';
  const prefers = matchMedia('(prefers-color-scheme: dark)').matches;
  const darkmode = persisted ?? prefers;
  const theme = darkmode ? JSON.parse(darkTheme) : JSON.parse(lightTheme);
  const themeValue: Theme = darkmode ? 'dark' : 'light';

  if (!localStorage.getItem(themeKey))
    localStorage.setItem(themeKey, themeValue);

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

const evalDarkModeStr = String(evalDarkMode)
  .replace('<THEME_KEY>', THEME_KEY)
  .replace('<DARK_THEME>', JSON.stringify(dark))
  .replace('<LIGHT_THEME>', JSON.stringify(light));

export const evalDarkModeHTML = minify(`(${evalDarkModeStr})()`, {
  mangle: { toplevel: true },
}).code;
