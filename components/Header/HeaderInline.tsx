import { ThemeToggle } from '@Components/ThemeToggle';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const RoutesWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const Route = styled.a`
  cursor: pointer;
  font-size: 20px;
  border-radius: 0.1rem;
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
