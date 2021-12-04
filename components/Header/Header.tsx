import { MediaQuery } from '@components/MediaQuery';
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

const Title = styled.span`
  font-size: var(--font-size-sm);
  border-radius: var(--rounded-0);
  cursor: pointer;
`;

export const HEADER_ROUTES = ['Projects', 'Blog'];

export const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Title tabIndex={0} aria-label="Navigate to home">
        Christian Penrod
      </Title>
      <MediaQuery at="min-md">
        <HeaderInline routes={HEADER_ROUTES} />
      </MediaQuery>
      <MediaQuery at="max-md">
        <HeaderMenu routes={HEADER_ROUTES} />
      </MediaQuery>
    </HeaderContent>
  </HeaderWrapper>
);
