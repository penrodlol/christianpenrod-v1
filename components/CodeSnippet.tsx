import { FC } from 'react';
import { useRefElement } from 'rooks';
import styled from 'styled-components';
import { CopyToClipboard } from './CopyToClipboard';

const Wrapper = styled.div`
  margin: var(--size-7) 0;
`;

const InnerWrapper = styled.div`
  background: var(--code-surface);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  border: solid 0.12rem var(--surface3);
  border-top-right-radius: 0;
  position: relative;
  font-size: var(--font-size-1);
  letter-spacing: var(--font-letterspacing-0);
`;

const CopyToClipboardWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0.2rem;
`;

const Title = styled.div`
  background: var(--code-surface);
  border-top-right-radius: var(--radius-2);
  border-top-left-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  border: solid 0.12rem var(--surface3);
  border-bottom: 0;
  width: max-content;
  font-size: 0.8rem;
  padding: 0 0.7rem;
  margin-left: auto;
  margin-right: 0.8rem;
`;

const CodeWrapper = styled.pre`
  overflow-x: auto;
  padding: var(--size-3);

  .function {
    font-style: italic;
    color: var(--code-function);
  }

  .keyword {
    color: var(--code-keyword);
  }

  .class-name {
    color: var(--code-classname);
  }

  .string,
  .template-string {
    color: var(--code-string);
  }

  .builtin {
    color: var(--code-builtin);
  }
`;

export interface CodeSnippetProps {
  title?: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({ title, children }) => {
  const [ref, el] = useRefElement<HTMLElement>();

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <InnerWrapper>
        <CopyToClipboardWrapper>
          <CopyToClipboard copyTarget={el} />
        </CopyToClipboardWrapper>
        <CodeWrapper>
          <code ref={ref}>{children}</code>
        </CodeWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
