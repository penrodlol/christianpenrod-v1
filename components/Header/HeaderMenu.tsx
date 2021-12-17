import { Hamburger } from '@components/Hamburger';
import { Overlay } from '@components/Overlay';
import { ThemeToggle } from '@components/ThemeToggle';
import gsap from 'gsap';
import { PropsWithChildren, useRef, useState } from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

const Route = styled.a`
  font-size: 2em;
  cursor: pointer;
  display: block;
  width: max-content;
  margin: 2rem 0;
  font-weight: 600;
  transform: translateX(-15rem);

  &:first-child {
    margin-top: 4rem;
  }
`;

const ThemeToggleWrapper = styled.div`
  position: absolute;
  left: 2.5rem;
  bottom: 2rem;
  visibility: hidden;
`;

const tl = gsap.timeline({ paused: true });

export interface HeaderMenuProps {
  routes: Array<string>;
}

export const HeaderMenu = (props: PropsWithChildren<HeaderMenuProps>) => {
  const [menu, setMenu] = useState(false);
  const routeRefs = useRef<Array<HTMLAnchorElement>>([]);
  const themeToggleRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    tl.to(routeRefs.current, {
      onStart: () => setMenu(true),
      opacity: menu ? 0 : 1,
      x: menu ? '-13rem' : '2.5rem',
      ease: `back.${menu ? 'in' : 'out'}(2)`,
      stagger: {
        each: 0.1,
        from: menu ? 1 : 0,
      },
      duration: 0.3,
    })
      .to(
        themeToggleRef.current,
        {
          autoAlpha: menu ? 0 : 1,
          duration: 0.2,
        },
        0.1,
      )
      .play(0)
      .eventCallback('onComplete', () => {
        if (menu) setMenu(false);
        tl.pause().clear();
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
        <ThemeToggleWrapper ref={themeToggleRef}>
          <ThemeToggle />
        </ThemeToggleWrapper>
      </Overlay>
    </div>
  );
};
