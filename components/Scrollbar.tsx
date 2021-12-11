import { createGlobalStyle } from 'styled-components';

const ScollbarStyles = createGlobalStyle`
  *::-webkit-scrollbar {
    width: 0.2em;

    &-track {
      box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
    }

    &-thumb {
      background: linear-gradient(180deg, var(--primary), var(--tertiary));
      border-radius: 0.25em;
    }

    ${({ theme }) => theme.breakpoints.sm} { width: 0.6em; }
  }
`;

export const Scrollbar = () => <ScollbarStyles />;
