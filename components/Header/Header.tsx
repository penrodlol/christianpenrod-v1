import { Media } from '@components/Media';
import Logo from '@svg/logo.svg';
import NextLink from 'next/link';
import styled from 'styled-components';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

const ROUTES = ['About', 'Projects', 'Blog'];

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--layer-5);
  background-color: var(--surface-2);
  box-shadow: var(--shadow-2);
`;

const Nav = styled.nav`
  max-width: var(--size-xl);
  padding: var(--size-fluid-1) var(--size-fluid-3);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.a`
  border-radius: var(--radius-2);
  transform: translateY(0.2em);
`;

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NextLink href="/" passHref>
          <LogoWrapper aria-label="Navigate internally to home">
            <Logo height={30} width={40} />
          </LogoWrapper>
        </NextLink>
        <Media greaterThanOrEqual="md">
          <DesktopHeader routes={ROUTES} />
        </Media>
        <Media lessThan="md">
          <MobileHeader routes={ROUTES} />
        </Media>
      </Nav>
    </Wrapper>
  );
};
