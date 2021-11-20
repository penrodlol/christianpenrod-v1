import { Hamburger } from '@Components/Hamburger';
import { Overlay } from '@Components/Overlay';
import gsap from 'gsap';
import { PropsWithChildren, useRef, useState } from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

const Route = styled.a`
  font-size: 50px;
  cursor: pointer;
  display: block;
  width: max-content;
  margin: 2rem 0;
  font-weight: 600;
  border-radius: 0.1rem;
  transform: translateX(-15rem);

  &:first-child {
    margin-top: 4rem;
  }
`;

export interface HeaderMenuProps {
  routes: Array<string>;
}

export const HeaderMenu = (props: PropsWithChildren<HeaderMenuProps>) => {
  const [menu, setMenu] = useState(false);
  const routeRefs = useRef<Array<HTMLAnchorElement>>([]);

  function toggleMenu() {
    gsap.to(routeRefs.current, {
      onStart: () => setMenu(true),
      onComplete: () => {
        if (menu) gsap.delayedCall(0.1, () => setMenu(false));
      },
      opacity: menu ? 0 : 1,
      x: menu ? '-13rem' : '2.5rem',
      ease: `back.${menu ? 'in' : 'out'}(2)`,
      stagger: {
        each: 0.1,
        from: menu ? 1 : 0,
      },
      duration: 0.3,
    });
  }

  return (
    <div>
      <HamburgerWrapper onClick={toggleMenu}>
        <Hamburger type="button" aria-label="Toggle navigation menu" />
      </HamburgerWrapper>
      <Overlay show={menu}>
        {props.routes.map((route, i) => (
          <Route
            key={route}
            tabIndex={0}
            ref={(el: HTMLAnchorElement) => (routeRefs.current[i] = el)}
          >
            {route}
          </Route>
        ))}
      </Overlay>
    </div>
  );
};
