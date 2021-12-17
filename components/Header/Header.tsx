import { MediaQuery } from '@components/MediaQuery';
import styled, { css } from 'styled-components';
import { HeaderInline } from './HeaderInline';
import { HeaderMenu } from './HeaderMenu';

const Wrapper = styled.nav(
  ({ theme }) => css`
    background: ${theme.background.base};
    box-shadow: ${theme.shadow.base};
    width: 100vw;
    max-width: 100%;
    position: sticky;
    top: 0;
    z-index: 50;
  `,
);

const InnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xl};
  margin: 0 auto;
  padding: 1rem 2rem;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 1.15em;
`;

export const HEADER_ROUTES = ['Projects', 'Blog'];

export const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <Title tabIndex={0} aria-label="Navigate to home">
        Christian Penrod
      </Title>
      <MediaQuery at="min-md">
        <HeaderInline routes={HEADER_ROUTES} />
      </MediaQuery>
      <MediaQuery at="max-md">
        <HeaderMenu routes={HEADER_ROUTES} />
      </MediaQuery>
    </InnerWrapper>
  </Wrapper>
);
