import { createGlobalStyle, css } from 'styled-components';

const BodyStyles = css`
  body {
    background: ${({ theme }) => theme.background.base};
    color: ${({ theme }) => theme.text.base};
    font-family: ${({ theme }) => theme.font.base};
  }
`;

const ScrollbarStyles = css`
  *::-webkit-scrollbar {
    width: 0.6em;

    &-track {
      box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
    }

    &-thumb {
      background: linear-gradient(
        ${({ theme }) =>
          `180deg, ${theme.primary.base}, ${theme.tertiary.base}`}
      );
      border-radius: 0.25em;
    }

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      width: 0.4em;
    }
  }
`;

const Styles = createGlobalStyle`
  ${BodyStyles}
  ${ScrollbarStyles}
`;

export const ThemeStyles = () => <Styles />;
