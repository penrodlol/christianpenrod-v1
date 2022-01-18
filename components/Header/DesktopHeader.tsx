import { ThemeToggle } from '@components/ThemeToggle';
import NextLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 3rem;

  a {
    color: var(--text);
    text-decoration: none;
  }
`;

export interface DesktopHeaderProps {
  routes: Array<string>;
}

export const DesktopHeader: FC<DesktopHeaderProps> = ({ routes }) => (
  <Wrapper>
    {routes.map((route) => (
      <NextLink
        key={route}
        href={`/${route.toLowerCase()}`}
        aria-label={`Navigate to ${route.toLowerCase()}`}
      >
        {route}
      </NextLink>
    ))}
    <ThemeToggle />
  </Wrapper>
);
