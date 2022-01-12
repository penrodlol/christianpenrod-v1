import { FC, TextareaHTMLAttributes, useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.textarea<TextareaProps & { focus: boolean }>(
  ({ theme, disableResize, focus }) => css`
    background: ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    caret-color: ${theme.primary.base};
    color: ${theme.text.base};
    font-family: ${theme.font.base};
    border: solid 0.15rem
      ${focus ? theme.tertiary.base : theme.background.heavy};
    resize: vertical;
    ${disableResize && 'resize: none;'}
    padding: 0.5rem 0.75rem;
    outline: none;
    margin: 0 1rem;
    --tt-key: textarea;

    /* prettier-ignore */
    @keyframes textarea {
      0% { font-size: 1em; }
      100% { font-size: 1.25em; }
    }
  `,
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  disableResize?: boolean;
}

export const Textarea: FC<TextareaProps> = (props) => {
  const [focus, setFocus] = useState(false);

  return (
    <Wrapper
      {...props}
      focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};
