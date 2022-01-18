import { FC, TextareaHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.textarea<TextareaProps>(
  ({ disableResize }) => css`
    background: var(--surface1);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);
    caret-color: var(--brand1);
    border: solid 0.15rem var(--surface1);
    resize: vertical;
    ${disableResize && 'resize: none;'}
    padding: var(--size-2) var(--size-3);
    outline: none;
    margin: 0 1rem;
    --tt-key: textarea;

    /* prettier-ignore */
    @keyframes textarea {
      0% { font-size: var(--font-size-1); }
      100% { font-size: var(--font-size-3); }
    }
  `,
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  disableResize?: boolean;
}

export const Textarea: FC<TextareaProps> = (props) => {
  return <Wrapper {...props} />;
};
