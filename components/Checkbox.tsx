import * as CheckboxPrimative from '@radix-ui/react-checkbox';
import Check from '@svg/check.svg';
import { FC, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: var(--size-3);
  align-items: center;

  @keyframes checkbox-scale-up {
    to {
      transform: scale(1);
    }
  }

  [data-state='checked'] {
    svg {
      animation: var(--animation-fade-in) forwards, checkbox-scale-up forwards;
      animation-timing-function: var(--ease-squish-3);
      animation-duration: 0.2s;
    }
  }
`;

const CheckboxWrapper = styled(CheckboxPrimative.Root)`
  all: unset;
  background: var(--surface-1);
  width: var(--size-4);
  height: var(--size-4);
  min-width: var(--size-4);
  min-height: var(--size-4);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  cursor: pointer;
`;

const Indicator = styled(CheckboxPrimative.Indicator)`
  svg {
    opacity: 0;
    transform: scale(0);
    fill: none;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

export interface CheckboxProps extends CheckboxPrimative.CheckboxProps {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
  const [id] = useState(props.id || label);

  return (
    <Wrapper>
      <CheckboxWrapper id={id} {...props}>
        <Indicator>
          <Check width={20} height={20} stroke="var(--brand-1)" />
        </Indicator>
      </CheckboxWrapper>
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};
