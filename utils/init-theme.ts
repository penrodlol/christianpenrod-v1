import { STORAGE_TOKEN, THEME, THEME_TOKEN } from '@const/theme';
import { minify } from 'uglify-js';

export function initTheme() {
  const key = '<STORAGE_KEY>';
  const token = '<THEME_TOKEN>';
  const dark = '<DARK>';
  const light = '<LIGHT>';

  const persistedTheme = localStorage.getItem(key);
  const prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = persistedTheme || (prefersDarkMode ? dark : light);

  localStorage.setItem(key, theme);
  document.documentElement.setAttribute(token, theme);
}

const initThemeStr = String(initTheme)
  .replace('<STORAGE_KEY>', STORAGE_TOKEN)
  .replace('<THEME_TOKEN>', THEME_TOKEN)
  .replace('<DARK>', THEME.DARK)
  .replace('<LIGHT>', THEME.LIGHT);

export const initThemeHTML = minify(`(${initThemeStr})()`, {
  mangle: { toplevel: true },
}).code;
