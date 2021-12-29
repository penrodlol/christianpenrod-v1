import { Media } from '@components/Media';
import NextLink from 'next/link';
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
  font-size: 1em;
  cursor: pointer;
`;

export const HEADER_ROUTES = ['About', 'Projects', 'Blog'];

export const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <NextLink href="/" aria-label="Navigate to home">
        <Title>Christian Penrod</Title>
      </NextLink>
      <Media greaterThanOrEqual="md">
        <HeaderInline routes={HEADER_ROUTES} />
      </Media>
      <Media lessThan="md">
        <HeaderMenu routes={HEADER_ROUTES} />
      </Media>
    </InnerWrapper>
  </Wrapper>
);
