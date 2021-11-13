import { BREAKPOINTS } from '@Constants/breakpoints';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { HeaderInline } from './HeaderInline';
import { HeaderMenu } from './HeaderMenu';

const HeaderWrapper = styled.nav`
  width: 100vw;
`;

const HeaderContent = styled.div`
  max-width: var(--xl2);
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 25px;
`;

export const HEADER_ROUTES = ['Projects', 'Blog'];

export const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Title>Christian Penrod</Title>
      <MediaQuery minWidth={BREAKPOINTS.lg}>
        <HeaderInline routes={HEADER_ROUTES}></HeaderInline>
      </MediaQuery>
      <MediaQuery maxWidth={BREAKPOINTS.md}>
        <HeaderMenu routes={HEADER_ROUTES}></HeaderMenu>
      </MediaQuery>
    </HeaderContent>
  </HeaderWrapper>
);
