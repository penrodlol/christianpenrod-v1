import { COLORS, DARKMODE_KEY } from 'const/theme';
import { minify, MinifyOptions } from 'uglify-js';

const evalDarkMode = `
  const persisted = localStorage.getItem("${DARKMODE_KEY}") === 'true';
  const prefers = matchMedia('(prefers-color-scheme: dark)').matches;
  const darkmode = persisted ?? prefers;

  if (!localStorage.getItem("${DARKMODE_KEY}")) {
    localStorage.setItem("${DARKMODE_KEY}", darkmode.toString());
  }

  Object.entries(${JSON.stringify(COLORS)}).forEach(([key, value]) => {
    document.documentElement.style.setProperty(
      '--' + key,
      darkmode ? value.dark : value.light,
    );
  });
`;

const options: MinifyOptions = {
  mangle: { toplevel: true },
};

export const evalDarkModeHTML = minify(evalDarkMode, options).code;
