import { Media } from '@components/Media';
import { STORAGE_TOKEN, THEME, THEME_TOKEN } from '@const/theme';
import Moon from '@svg/moon.svg';
import Sun from '@svg/sun.svg';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface ThemeToggleIconsProps {
  theme: THEME | undefined;
  size: number;
}

const ThemeToggleIcons: FC<ThemeToggleIconsProps> = ({ theme, size }) => (
  <>
    {theme === THEME.DARK ? (
      <Moon width={size} height={size} />
    ) : (
      <Sun width={size} height={size} />
    )}
  </>
);

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<THEME>();

  useEffect(() => {
    const isDark = localStorage.getItem(STORAGE_TOKEN) === THEME.DARK;
    const initial = isDark ? THEME.LIGHT : THEME.DARK;

    setTheme(initial);
  }, []);

  function toggle() {
    localStorage.setItem(STORAGE_TOKEN, theme as string);
    document.documentElement.setAttribute(THEME_TOKEN, theme as string);

    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
  }

  return (
    <Wrapper onClick={toggle}>
      <Media greaterThanOrEqual="md">
        <ThemeToggleIcons theme={theme} size={35} />
      </Media>
      <Media lessThan="md">
        <ThemeToggleIcons theme={theme} size={55} />
      </Media>
    </Wrapper>
  );
};
