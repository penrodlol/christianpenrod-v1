import { Hamburger } from '@components/Hamburger';
import NextLink from 'next/link';
import { FC } from 'react';
import { useRefElement, useToggle } from 'rooks';
import styled, { createGlobalStyle } from 'styled-components';

const RemoveBodyOverflow = createGlobalStyle`
  body {
    overflow: hidden;
    margin-right: var(--scroll-bar-size);
  }
`;

const Overlay = styled.div`
  background: var(--overlay);
  backdrop-filter: blur(10px);
  position: fixed;
  inset: 0;
  z-index: var(--layer-4);
  opacity: 0;
  animation: var(--animation-fade-in) forwards;
  animation-duration: 100ms;
`;

const Menu = styled.ul`
  position: fixed;
  top: var(--size-9);
  left: var(--size-7);
  bottom: 0;
  margin-bottom: var(--size-8);
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
  font-size: var(--font-size-6);
  z-index: var(--layer-important);

  li {
    color: var(--text2);
    text-decoration: none;
    opacity: 0;
    animation: var(--animation-fade-in) forwards,
      var(--animation-slide-in-right);
    animation-timing-function: var(--ease-squish-4);

    &:nth-child(2) {
      animation-delay: 0.05s;
    }

    &:nth-child(3) {
      animation-delay: 0.1s;
    }
  }

  button {
    margin-top: auto;
    opacity: 0;
    animation: var(--animation-fade-in) forwards;
    animation-delay: 0.08s;
  }
`;

export interface MobileHeaderProps {
  routes: Array<string>;
}

export const MobileHeader: FC<MobileHeaderProps> = ({ routes }) => {
  const [menu, toggleMenu] = useToggle(false);
  const [hamburgerRef, hamburgerEl] = useRefElement<HTMLInputElement>();

  return (
    <>
      <Hamburger
        ref={hamburgerRef}
        onClick={toggleMenu}
        aria-label={`${menu ? 'Open' : 'Close'} navigation.`}
      />
      {menu && (
        <>
          <RemoveBodyOverflow />
          <Overlay />
          <Menu>
            {routes.map((route) => (
              <li key={route}>
                <NextLink
                  href={`/${route.toLowerCase()}`}
                  passHref
                  aria-label={`Navigate internally to ${route.toLowerCase()}.`}
                >
                  <a onClick={() => hamburgerEl?.click()}>{route}</a>
                </NextLink>
              </li>
            ))}
          </Menu>
        </>
      )}
    </>
  );
};
