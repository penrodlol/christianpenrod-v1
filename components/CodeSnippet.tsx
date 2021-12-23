import { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.pre(
  ({ theme }) => css`
    background: ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    font-size: 0.9em;
    letter-spacing: 0.03em;
    overflow-x: auto;
    margin: 3rem 0;
    padding: 1rem;

    .function {
      font-style: italic;
      color: #d4bbf7;
    }

    .keyword {
      color: #a3a6f7;
    }

    .class-name {
      color: #aedef9;
    }

    .string,
    .template-string {
      color: #ababab;
    }

    .builtin {
      @apply #b39dd8;
    }
  `,
);

export const CodeSnippet: FC = ({ children }) => {
  return (
    <Wrapper>
      <code>{children}</code>
    </Wrapper>
  );
};
