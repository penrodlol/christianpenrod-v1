import { COLORS, DARKMODE_KEY } from 'const/theme';
import { atom } from 'recoil';

export const darkmodeState = atom<boolean | undefined>({
  key: DARKMODE_KEY,
  default: undefined,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((darkmode) => {
        if (darkmode == null) return;

        localStorage.setItem(DARKMODE_KEY, darkmode.toString());

        Object.entries(COLORS).forEach(([key, value]) => {
          const propKey = `--${key}`;
          const propValue = darkmode ? value.dark : value.light;

          document.documentElement.style.setProperty(propKey, propValue);
        });
      });
    },
  ],
});
