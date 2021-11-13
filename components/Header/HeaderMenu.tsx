import { Hamburger } from '@Components/Hamburger';
import { PropsWithChildren } from 'react';

export interface HeaderMenuProps {
  routes: Array<string>;
}

export const HeaderMenu = (props: PropsWithChildren<HeaderMenuProps>) => (
  <div>
    <Hamburger type="button" aria-label="Toggle navigation menu" />
  </div>
);
