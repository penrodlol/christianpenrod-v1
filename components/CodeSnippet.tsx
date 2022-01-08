import { FC, useRef } from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from './CopyToClipboard';

const Wrapper = styled.div`
  margin: 3rem 0;
`;

const InnerWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.code.background};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    border: solid 0.12rem ${theme.background.heavy};
    border-top-right-radius: 0;
    position: relative;
    font-size: 0.9em;
    letter-spacing: 0;
  `,
);

const CopyToClipboardWrapper = styled.div`
  position: absolute;
  right: -1.5rem;
  top: 0.2rem;
`;

const Title = styled.div(
  ({ theme }) => css`
    background: ${theme.code.background};
    border-top-right-radius: ${theme.rounded.base};
    border-top-left-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    border: solid 0.12rem ${theme.background.heavy};
    border-bottom: 0;
    width: max-content;
    font-size: 0.8rem;
    padding: 0 0.7rem;
    margin-left: auto;
    margin-right: 0.8rem;
  `,
);

const CodeWrapper = styled.pre(
  ({ theme }) => css`
    overflow-x: auto;
    padding: 1rem;

    .function {
      font-style: italic;
      color: ${theme.code.function};
    }

    .keyword {
      color: ${theme.code.keyword};
    }

    .class-name {
      color: ${theme.code.classname};
    }

    .string,
    .template-string {
      color: ${theme.code.string};
    }

    .builtin {
      color: ${theme.code.builtin};
    }
  `,
);

export interface CodeSnippetProps {
  title?: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({ title, children }) => {
  const codeRef = useRef<HTMLElement>(null);

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <InnerWrapper>
        <CopyToClipboardWrapper>
          <CopyToClipboard copyTarget={codeRef.current} />
        </CopyToClipboardWrapper>
        <CodeWrapper>
          <code ref={codeRef}>{children}</code>
        </CodeWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
