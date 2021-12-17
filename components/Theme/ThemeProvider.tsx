import { THEME_KEY } from '@const/storage';
import { persistThemeCssVars } from '@utils/persist-theme-css-vars';
import { createContext, FC, useEffect, useState } from 'react';
import {
  DefaultTheme,
  ThemeProvider as ThemeProviderSC,
} from 'styled-components';
import { base, dark, light } from './theme';
import { ThemeStyles } from './ThemeStyles';

export type Theme = 'base' | 'dark' | 'light';

export const ThemeMapper = new Map<Theme, DefaultTheme>()
  .set('base', base)
  .set('light', light)
  .set('dark', dark);

export interface ThemeProviderState {
  id: Theme;
  toggleTheme: () => void;
}

export const ThemeProviderContext = createContext<ThemeProviderState>({
  id: 'base',
  toggleTheme: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [state, setState] = useState<ThemeProviderState>({
    id: 'base',
    toggleTheme: () =>
      setState((snapshot) => {
        const id = snapshot.id === 'dark' ? 'light' : 'dark';

        localStorage.setItem(THEME_KEY, id);
        persistThemeCssVars(ThemeMapper.get(id) as DefaultTheme);

        return { ...snapshot, id };
      }),
  });

  useEffect(() => {
    setState((snapshot) => {
      const id = localStorage.getItem(THEME_KEY) as Theme;
      return { ...snapshot, id };
    });
  }, []);

  return (
    <ThemeProviderContext.Provider value={state}>
      <ThemeProviderSC theme={ThemeMapper.get(state.id) as DefaultTheme}>
        <ThemeStyles />
        {children}
      </ThemeProviderSC>
    </ThemeProviderContext.Provider>
  );
};
