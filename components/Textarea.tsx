import { FC, TextareaHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.textarea<TextareaProps>(
  ({ disableResize }) => css`
    font-family: var(--font-serif);
    font-weight: var(--font-weight-6);
    background: var(--surface-1);
    color: var(--text-1);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);
    caret-color: var(--brand-1);
    border: solid 0.15rem var(--surface-1);
    resize: vertical;
    ${disableResize && 'resize: none;'}
    padding: var(--size-2) var(--size-3);
    outline: none;
    margin: 0 var(--size-3);
    cursor: pointer;
    touch-action: manipulation;
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
