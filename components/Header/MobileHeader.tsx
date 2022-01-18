import { Hamburger } from '@components/Hamburger';
import { ThemeToggle } from '@components/ThemeToggle';
import NextLink from 'next/link';
import { FC } from 'react';
import { useRefElement, useToggle } from 'rooks';
import styled, { createGlobalStyle } from 'styled-components';

const Overlay = createGlobalStyle`
  body {
    position: fixed;
    inset: 0;
    z-index: var(--layer-5);
    background: var(--overlay);
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 6rem;
  left: 2rem;
  bottom: 0;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--font-size-5);
  z-index: var(--layer-important);

  a {
    color: var(--text);
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
      <Hamburger ref={hamburgerRef} onClick={toggleMenu} />
      {menu && (
        <>
          <Overlay />
          <Menu>
            {routes.map((route) => (
              <NextLink
                key={route}
                href={`/${route.toLowerCase()}`}
                passHref
                aria-label={`Navigate to ${route.toLowerCase()}`}
              >
                <a onClick={() => hamburgerEl?.click()}>{route}</a>
              </NextLink>
            ))}
            <ThemeToggle />
          </Menu>
        </>
      )}
    </>
  );
};
