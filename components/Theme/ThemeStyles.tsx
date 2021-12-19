import { createGlobalStyle, css } from 'styled-components';

const BodyStyles = css(
  ({ theme }) => `
    body {
      background: ${theme.background.base};
      color: ${theme.text.base};
      font-family: ${theme.font.base};
      font-weight: 600;
      letter-spacing: 0.09em;
    }`,
);

const ScrollbarStyles = css(
  ({ theme }) => `
    *::-webkit-scrollbar {
      width: 0.6em;
    
      &-track {
        box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
      }
    
      &-thumb {
        background: linear-gradient(180deg, ${theme.primary.base}, ${theme.tertiary.base});
        border-radius: 0.25em;
      }
    
      @media screen and (max-width: ${theme.breakpoint.sm}) {
        width: 0.4em;
      }
    }`,
);

const AnchorTagStyles = css`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text.base};
  }
`;

const Styles = createGlobalStyle`
  ${BodyStyles}
  ${ScrollbarStyles}
  ${AnchorTagStyles}
`;

export const ThemeStyles = () => <Styles />;
