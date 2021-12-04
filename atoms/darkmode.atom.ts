import { DARKMODE_KEY } from 'const/storage';
import { atom } from 'recoil';

export const darkmodeState = atom<boolean | undefined>({
  key: DARKMODE_KEY,
  default: undefined,
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((curr, prev) => {
        if (prev == null) return;

        const darkmode = curr as boolean;
        const theme = darkmode ? 'dark' : 'light';

        localStorage.setItem(DARKMODE_KEY, darkmode.toString());
        document.documentElement.setAttribute('theme', theme);
      });
    },
  ],
});
