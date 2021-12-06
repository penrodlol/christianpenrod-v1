import { ThemeToggle } from '@components/ThemeToggle';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const RoutesWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 3rem;
`;

const Route = styled.a`
  font-size: 1.15em;
`;

export interface HeaderInlineProps {
  routes: Array<string>;
}

export const HeaderInline = (props: PropsWithChildren<HeaderInlineProps>) => (
  <RoutesWrapper>
    {props.routes.map((route) => (
      <Route
        key={route}
        tabIndex={0}
        aria-label={`Navigate to ${route.toLowerCase()}`}
      >
        {route}
      </Route>
    ))}
    <ThemeToggle />
  </RoutesWrapper>
);
