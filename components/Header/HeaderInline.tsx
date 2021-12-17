import { ThemeToggle } from '@components/ThemeToggle';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const RoutesWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 3rem;
  font-size: 1.15em;
`;

export interface HeaderInlineProps {
  routes: Array<string>;
}

export const HeaderInline = (props: PropsWithChildren<HeaderInlineProps>) => (
  <RoutesWrapper>
    {props.routes.map((route) => (
      <NextLink
        key={route}
        href=""
        aria-label={`Navigate to ${route.toLowerCase()}`}
      >
        {route}
      </NextLink>
    ))}
    <ThemeToggle />
  </RoutesWrapper>
);
