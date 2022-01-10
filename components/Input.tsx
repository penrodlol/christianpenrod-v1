import { FC, InputHTMLAttributes, useState } from 'react';
import { useInput } from 'rooks';
import styled, { css } from 'styled-components';
import { Button } from './Button';

const Wrapper = styled.div<{ dirty: boolean; focus: boolean }>(
  ({ theme, dirty, focus }) => css`
    background: ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    caret-color: ${theme.primary.base};
    border: solid 0.15rem
      ${focus ? theme.tertiary.base : theme.background.heavy};
    padding: 0.5rem 0.75rem;
    display: grid;
    grid-template-columns: auto repeat(3, max-content);
    align-items: center;
    margin: 0 1rem;

    button {
      visibility: ${dirty ? 'visible' : 'hidden'};
    }

    svg:last-child {
      margin-left: 0.8rem;
    }
  `,
);

const ActualInput = styled.input(
  ({ theme }) => css`
    color: ${theme.text.base};
    background: transparent;
    border: none;
    outline: none;
    min-width: 0;
    --tt-key: input;

    /* prettier-ignore */
    @keyframes input {
      0% { font-size: 1em; }
      100% { font-size: 1.25em; }
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: ${theme.tertiary.base};
      -webkit-box-shadow: 0 0 0px 1000px ${theme.background.heavy} inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  `,
);

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  resetAriaLabel?: string;
}

export const Input: FC<InputProps> = ({ resetAriaLabel, ...props }) => {
  const input = useInput();
  const [focus, setFocus] = useState(false);

  return (
    <Wrapper focus={focus} dirty={input?.value.trim().length > 0}>
      <ActualInput
        {...props}
        {...input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {resetAriaLabel && (
        <Button
          icon="close"
          iconSize={20}
          type="button"
          onClick={() => (input.value = '')}
        />
      )}
    </Wrapper>
  );
};
