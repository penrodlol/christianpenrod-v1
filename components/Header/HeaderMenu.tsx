import { Hamburger } from '@Components/Hamburger';
import { Overlay } from '@Components/Overlay';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

const Route = styled.a`
  font-size: 40px;
  cursor: pointer;
  display: block;
  width: max-content;
  padding: 1rem;
  font-weight: 600;
`;

export interface HeaderMenuProps {
  routes: Array<string>;
}

export const HeaderMenu = (props: PropsWithChildren<HeaderMenuProps>) => {
  const [show, showMenu] = useState(false);

  return (
    <div>
      <HamburgerWrapper onClick={() => showMenu(!show)}>
        <Hamburger type="button" aria-label="Toggle navigation menu" />
      </HamburgerWrapper>
      <Overlay show={show}>
        {props.routes.map((route) => (
          <Route key={route}>{route}</Route>
        ))}
      </Overlay>
    </div>
  );
};
