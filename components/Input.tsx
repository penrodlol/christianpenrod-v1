import { FC, InputHTMLAttributes, useState } from 'react';
import { useRefElement } from 'rooks';
import styled, { css } from 'styled-components';
import { Button } from './Button';
import { Svg, SvgName } from './Svg';

const Wrapper = styled.div<{ focus: boolean }>(
  ({ theme, focus }) => css`
    background: ${theme.background.heavy};
    border-radius: ${theme.rounded.base};
    box-shadow: ${theme.shadow.base};
    caret-color: ${theme.primary.base};
    ${focus && `border: solid 0.1em ${theme.tertiary.base};`}
    padding: 0.5rem 0.75rem;
    display: grid;
    grid-template-columns: auto repeat(3, max-content);
    align-items: center;
    margin: 0 1rem;

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
  icon?: {
    name: SvgName;
    aria: string;
  };
  resetAriaLabel?: string;
}

export const Input: FC<InputProps> = ({ icon, resetAriaLabel, ...props }) => {
  const [ref, el] = useRefElement<HTMLInputElement>();
  const [dirty, setDirty] = useState(false);
  const [focus, setFocus] = useState(false);

  function handleChange() {
    setDirty((el as HTMLInputElement).value.trim().length > 0);
  }

  function handleReset() {
    (el as HTMLInputElement).value = '';
    setDirty(false);
  }

  return (
    <Wrapper focus={focus} onChange={handleChange}>
      <ActualInput
        {...props}
        ref={ref}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {icon && <Svg name="close" />}
      {resetAriaLabel && dirty && (
        <Button
          icon="close"
          iconSize={20}
          type="button"
          onClick={handleReset}
        />
      )}
    </Wrapper>
  );
};
