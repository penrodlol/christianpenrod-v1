import { Media } from '@components/Media';
import { SIZE } from '@const/breakpoints';
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
  max-width: ${SIZE.XL};
  padding: var(--size-fluid-1) var(--size-fluid-3);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-size: var(--font-size-2);
  color: var(--text-2);
`;

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NextLink href="/" passHref>
          <Brand aria-label="Navigate internally to home"></Brand>
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
