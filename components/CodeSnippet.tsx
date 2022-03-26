import { FC, useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from './CopyToClipboard';

const Wrapper = styled.div`
  margin: var(--size-7) 0;
`;

const InnerWrapper = styled.div`
  background: var(--code-surface);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  position: relative;
`;

const CopyToClipboardWrapper = styled.div`
  position: absolute;
  right: var(--size-2);
  top: var(--size-1);
`;

const Title = styled.div`
  background: var(--code-surface);
  border-top-right-radius: var(--radius-2);
  border-top-left-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  font-size: var(--font-size-1);
  color: var(--text-2);
  border-bottom: 0;
  width: max-content;
  padding-left: var(--size-2);
  padding-right: var(--size-2);
  margin-left: auto;
  margin-right: var(--size-3);
`;

const CodeWrapper = styled.pre`
  overflow-x: auto;
  padding: var(--size-3);
  font-size: var(--font-size-1);
  letter-spacing: var(--font-letterspacing-3);

  * {
    font-family: var(--font-serif);
  }
`;

export interface CodeSnippetProps {
  title?: string;
}

export const CodeSnippet: FC<CodeSnippetProps> = ({ title, children }) => {
  const [text, setText] = useState<string>();

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <InnerWrapper>
        <CopyToClipboardWrapper>
          <CopyToClipboard text={text} />
        </CopyToClipboardWrapper>
        <CodeWrapper>
          <code ref={(el) => setText(el?.innerText.trim())}>{children}</code>
        </CodeWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
