import { Anchor } from '@components/Anchor';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: var(--size-8);
  font-size: var(--font-size-2);
`;

export interface DesktopHeaderProps {
  routes: Array<string>;
}

export const DesktopHeader: FC<DesktopHeaderProps> = ({ routes }) => {
  const router = useRouter();

  return (
    <Wrapper>
      {routes.map((route) => (
        <li key={route}>
          <NextLink
            href={`/${route.toLowerCase()}`}
            passHref
            aria-label={`Navigate internally to ${route.toLowerCase()}`}
          >
            <Anchor
              underline={
                router.route.startsWith(`/${route.toLowerCase()}`)
                  ? 'always'
                  : 'hover'
              }
            >
              {route}
            </Anchor>
          </NextLink>
        </li>
      ))}
    </Wrapper>
  );
};
