import { DARKMODE_KEY } from 'const/storage';
import { minify } from 'uglify-js';

export function evalDarkMode() {
  const darkmodeKey = '<DARKMODE_KEY>';

  const persisted = localStorage.getItem(darkmodeKey) === 'true';
  const prefers = matchMedia('(prefers-color-scheme: dark)').matches;
  const darkmode = persisted ?? prefers;

  if (!localStorage.getItem(darkmodeKey))
    localStorage.setItem(darkmodeKey, darkmode.toString());

  document.documentElement.setAttribute('theme', darkmode ? 'dark' : 'light');
}

export const evalDarkModeHTML = minify(
  `(${String(evalDarkMode).replace('<DARKMODE_KEY>', DARKMODE_KEY)})()`,
  { mangle: { toplevel: true } },
).code;
