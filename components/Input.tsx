import {
  FC,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--surface-1);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  caret-color: var(--brand-1);
  padding-block: var(--size-2);
  padding-inline: var(--size-3);
  display: grid;
  grid-template-columns: auto repeat(3, max-content);
  align-items: center;
  margin: 0 var(--size-3);

  button {
    animation: none !important;
  }

  svg:last-child {
    margin-left: 0.8rem;
  }

  &:hover {
    box-shadow: var(--shadow-3);
  }
`;

const ActualInput = styled.input`
  color: var(--text-1);
  padding-inline: var(--size-2);
  padding-block: var(--size-1);
  border-radius: inherit;
  background: transparent;
  border: none;
  outline: none;
  min-width: 0;
  cursor: pointer;
  touch-action: manipulation;
  --tt-key: input;

  /* prettier-ignore */
  @keyframes input {
    0% { font-size: var(--font-size-1); }
    100% { font-size: var(--font-size-3); }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--guava-2);
    -webkit-box-shadow: 0 0 0px 1000px var(--surface-1) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  submitIcon?: ReactElement<HTMLButtonElement>;
  resetIcon?: ReactElement<HTMLButtonElement>;
}

export const Input: FC<InputProps> = ({ submitIcon, resetIcon, ...props }) => {
  const [resetVisible, setResetVisible] = useState(true);

  useEffect(() => {
    setResetVisible(!!(props.value as string).length);
  }, [props.value]);

  return (
    <Wrapper>
      <ActualInput {...props} />
      {submitIcon}
      {resetVisible && resetIcon}
    </Wrapper>
  );
};
